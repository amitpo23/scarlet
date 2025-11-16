import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { CalendarIcon, Users, Bed } from "lucide-react";
import { format, differenceInDays } from "date-fns";
import { useLanguage } from "@/contexts/LanguageContext";
import { toast } from "sonner";

interface BookingModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  preselectedRoom?: string;
}

export function BookingModal({ open, onOpenChange, preselectedRoom }: BookingModalProps) {
  const { t } = useLanguage();
  const [checkIn, setCheckIn] = useState<Date>();
  const [checkOut, setCheckOut] = useState<Date>();
  const [adults, setAdults] = useState("2");
  const [children, setChildren] = useState("0");
  const [roomType, setRoomType] = useState(preselectedRoom || "");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const roomPrices: Record<string, number> = {
    economy: 450,
    classic: 550,
    classic_balcony: 650,
    deluxe: 850,
  };

  const calculateTotal = () => {
    if (!checkIn || !checkOut || !roomType) return 0;
    const nights = differenceInDays(checkOut, checkIn);
    if (nights <= 0) return 0;
    return nights * (roomPrices[roomType] || 0);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!checkIn || !checkOut) {
      toast.error(t("אנא בחר תאריכי כניסה ויציאה", "Please select check-in and check-out dates"));
      return;
    }
    
    if (!roomType) {
      toast.error(t("אנא בחר סוג חדר", "Please select a room type"));
      return;
    }

    if (!name || !email || !phone) {
      toast.error(t("אנא מלא את כל השדות", "Please fill in all fields"));
      return;
    }

    // Here you would typically send the booking data to your backend
    toast.success(
      t(
        "ההזמנה נשלחה בהצלחה! ניצור איתך קשר בקרוב.",
        "Booking submitted successfully! We'll contact you soon."
      )
    );
    
    onOpenChange(false);
    // Reset form
    setCheckIn(undefined);
    setCheckOut(undefined);
    setAdults("2");
    setChildren("0");
    setRoomType("");
    setName("");
    setEmail("");
    setPhone("");
  };

  const nights = checkIn && checkOut ? differenceInDays(checkOut, checkIn) : 0;
  const total = calculateTotal();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">
            {t("הזמנת חדר", "Book a Room")}
          </DialogTitle>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Date Selection */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                {t("תאריך כניסה", "Check-in Date")}
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    {checkIn ? format(checkIn, "PPP") : t("בחר תאריך", "Pick a date")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkIn}
                    onSelect={setCheckIn}
                    disabled={(date) => date < new Date()}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                {t("תאריך יציאה", "Check-out Date")}
              </Label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant="outline"
                    className="w-full justify-start text-left font-normal"
                  >
                    {checkOut ? format(checkOut, "PPP") : t("בחר תאריך", "Pick a date")}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0">
                  <Calendar
                    mode="single"
                    selected={checkOut}
                    onSelect={setCheckOut}
                    disabled={(date) => !checkIn || date <= checkIn}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
          </div>

          {/* Guest Selection */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {t("מבוגרים", "Adults")}
              </Label>
              <Select value={adults} onValueChange={setAdults}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[1, 2, 3, 4].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Users className="w-4 h-4" />
                {t("ילדים", "Children")}
              </Label>
              <Select value={children} onValueChange={setChildren}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  {[0, 1, 2, 3].map((num) => (
                    <SelectItem key={num} value={num.toString()}>
                      {num}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>

          {/* Room Type Selection */}
          <div className="space-y-2">
            <Label className="flex items-center gap-2">
              <Bed className="w-4 h-4" />
              {t("סוג חדר", "Room Type")}
            </Label>
            <Select value={roomType} onValueChange={setRoomType}>
              <SelectTrigger>
                <SelectValue placeholder={t("בחר סוג חדר", "Select room type")} />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="economy">
                  {t("חדר אקונומי זוגי", "Economy Double Room")} - ₪450 {t("ללילה", "per night")}
                </SelectItem>
                <SelectItem value="classic">
                  {t("חדר קלאסיק זוגי", "Classic Double Room")} - ₪550 {t("ללילה", "per night")}
                </SelectItem>
                <SelectItem value="classic_balcony">
                  {t("חדר קלאסיק זוגי עם מרפסת", "Classic Double Room with Balcony")} - ₪650 {t("ללילה", "per night")}
                </SelectItem>
                <SelectItem value="deluxe">
                  {t("חדר דלוקס", "Deluxe Room")} - ₪850 {t("ללילה", "per night")}
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Contact Information */}
          <div className="space-y-4 border-t pt-4">
            <h3 className="font-semibold text-lg">
              {t("פרטי יצירת קשר", "Contact Information")}
            </h3>
            
            <div className="space-y-2">
              <Label>{t("שם מלא", "Full Name")}</Label>
              <Input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder={t("הכנס שם מלא", "Enter full name")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>{t("אימייל", "Email")}</Label>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t("הכנס אימייל", "Enter email")}
                required
              />
            </div>

            <div className="space-y-2">
              <Label>{t("טלפון", "Phone")}</Label>
              <Input
                type="tel"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                placeholder={t("הכנס מספר טלפון", "Enter phone number")}
                required
              />
            </div>
          </div>

          {/* Price Summary */}
          {nights > 0 && total > 0 && (
            <div className="bg-secondary/30 p-4 rounded-lg space-y-2">
              <div className="flex justify-between text-sm">
                <span>{t("מספר לילות", "Number of nights")}:</span>
                <span className="font-semibold">{nights}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>{t("מחיר ללילה", "Price per night")}:</span>
                <span className="font-semibold">₪{roomPrices[roomType]}</span>
              </div>
              <div className="flex justify-between text-lg font-bold border-t pt-2">
                <span>{t("סה\"כ", "Total")}:</span>
                <span className="text-primary">₪{total}</span>
              </div>
            </div>
          )}

          {/* Submit Button */}
          <Button type="submit" className="w-full bg-primary hover:bg-primary/90" size="lg">
            {t("שלח הזמנה", "Submit Booking")}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
