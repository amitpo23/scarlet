import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Wifi, Coffee, Car, Wind, Shield, Users, Languages } from "lucide-react";
import { APP_LOGO } from "@/const";
import { useState, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookingModal } from "@/components/BookingModal";
import { WeatherWidget } from "@/components/WeatherWidget";

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<string>();
  const { language, setLanguage, t } = useLanguage();

  const openBooking = (roomType?: string) => {
    setSelectedRoom(roomType);
    setBookingOpen(true);
  };

  const galleryImages = [
    "/images/005.webp", // Red luxury room
    "/images/004.webp", // Peachy room
    "/images/002.webp", // Hallway
    "/images/003.webp", // Room with hallway view
    "/images/006.webp", // Lobby with red wall
    "/images/008.webp", // Library wall
    "/images/010.webp", // Lounge area
  ];

  // Auto-rotate hero images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) => (prev + 1) % galleryImages.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [galleryImages.length]);

  const rooms = [
    {
      name: t("חדר אקונומי זוגי", "Economy Double Room"),
      image: "/images/004.webp",
      description: t(
        "חדר נעים ומעוצב בקפידה עם כל השירותים הדרושים לשהייה נוחה",
        "A pleasant and carefully designed room with all the amenities needed for a comfortable stay"
      ),
    },
    {
      name: t("חדר קלאסיק זוגי", "Classic Double Room"),
      image: "/images/003.webp",
      description: t(
        "חדר מרווח עם עיצוב ייחודי ואווירה חמימה",
        "A spacious room with unique design and warm atmosphere"
      ),
    },
    {
      name: t("חדר קלאסיק זוגי עם מרפסת", "Classic Double Room with Balcony"),
      image: "/images/004.webp",
      description: t(
        "חדר קלאסי עם מרפסת פרטית ונוף לעיר",
        "A classic room with private balcony and city views"
      ),
    },
    {
      name: t("חדר דלוקס", "Deluxe Room"),
      image: "/images/005.webp",
      description: t(
        "חדר יוקרתי עם עיצוב נועז ומרשים בגוונים אדומים",
        "A luxury room with bold and impressive design in red tones"
      ),
    },
  ];

  const amenities = [
    { icon: Wifi, text: t("Wi-Fi חינם", "Free Wi-Fi") },
    { icon: Wind, text: t("מיזוג אוויר", "Air Conditioning") },
    { icon: Coffee, text: t("בר ומסעדה", "Bar & Restaurant") },
    { icon: Car, text: t("חניה", "Parking") },
    { icon: Shield, text: t("כספת בחדר", "In-room Safe") },
    { icon: Users, text: t("שירות קונסיירז'", "Concierge Service") },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img src={APP_LOGO} alt="Scarlet Hotel" className="h-16 md:h-20" />
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">
              {t("אודות", "About")}
            </a>
            <a href="#rooms" className="hover:text-primary transition-colors">
              {t("חדרים", "Rooms")}
            </a>
            <a href="#amenities" className="hover:text-primary transition-colors">
              {t("שירותים", "Amenities")}
            </a>
            <a href="#location" className="hover:text-primary transition-colors">
              {t("מיקום", "Location")}
            </a>
            <a href="#contact" className="hover:text-primary transition-colors">
              {t("צור קשר", "Contact")}
            </a>
          </div>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "he" ? "en" : "he")}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === "he" ? "EN" : "עב"}
            </Button>
            <Button className="bg-primary hover:bg-primary/90" onClick={() => openBooking()}>
              {t("הזמן עכשיו", "Book Now")}
            </Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000"
          style={{ backgroundImage: `url(${galleryImages[activeImage]})` }}
        >
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4">
          <h2 className="text-6xl md:text-8xl font-bold mb-6 animate-fade-in">Scarlet Hotel</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
            {t("חוויה בוטיקית ייחודית בלב תל אביב", "A unique boutique experience in the heart of Tel Aviv")}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6" onClick={() => openBooking()}>
            {t("הזמן עכשיו", "Book Now")}
          </Button>
        </div>
        {/* Weather Widget */}
        <div className="absolute top-24 right-8 z-20 hidden md:block">
          <WeatherWidget />
        </div>
        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === activeImage ? "bg-white w-8" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold mb-6 text-foreground">
                {t("אודות המלון", "About the Hotel")}
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  {t(
                    "מלון Scarlet ממוקם במרכז תל אביב התוסס, ומציע חוויית אירוח בוטיקית ייחודית המשלבת עיצוב נועז עם נוחות מודרנית. המלון כולל גינה, טרסה ובר, ומעניק לאורחים חוויה בלתי נשכחת.",
                    "The Scarlet Hotel is located in vibrant central Tel Aviv, offering a unique boutique hospitality experience that combines bold design with modern comfort. The hotel features a garden, terrace and bar, providing guests with an unforgettable experience."
                  )}
                </p>
                <p>
                  {t(
                    "כל חדר במלון מעוצב בקפידה עם תשומת לב לפרטים הקטנים, ומציע מרפסת פרטית עם נוף לעיר. אנו מספקים שירותי קונסיירז' מקצועיים, אחסון מזוודות ואינטרנט אלחוטי חינם בכל רחבי המלון.",
                    "Each room in the hotel is carefully designed with attention to detail, offering a private balcony with city views. We provide professional concierge services, luggage storage and free Wi-Fi throughout the hotel."
                  )}
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">8.9</div>
                  <div className="text-sm text-muted-foreground">
                    {t("דירוג מצוין", "Excellent Rating")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">9.4</div>
                  <div className="text-sm text-muted-foreground">
                    {t("מיקום מעולה", "Perfect Location")}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <img 
                src="/images/001.webp" 
                alt="Hotel entrance" 
                className="absolute top-0 right-0 w-3/4 h-2/3 object-cover rounded-lg shadow-2xl"
              />
              <img 
                src="/images/009.webp" 
                alt="Hotel interior" 
                className="absolute bottom-0 left-0 w-3/4 h-2/3 object-cover rounded-lg shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center text-foreground">
            {t("החדרים שלנו", "Our Rooms")}
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {t("בחר את החדר המושלם עבורך", "Choose the perfect room for you")}
          </p>
          <div className="grid md:grid-cols-2 gap-8">
            {rooms.map((room, idx) => (
              <Card key={idx} className="overflow-hidden hover:shadow-2xl transition-shadow duration-300">
                <div className="relative h-80">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold mb-4">{room.name}</h3>
                  <p className="text-muted-foreground mb-6">{room.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90" onClick={() => openBooking(idx === 0 ? "economy" : idx === 1 ? "classic" : idx === 2 ? "classic_balcony" : "deluxe")}>
                    {t("הזמן חדר", "Book Room")}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center text-foreground">
            {t("שירותים ומתקנים", "Amenities & Facilities")}
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {t("כל מה שאתה צריך לשהייה מושלמת", "Everything you need for a perfect stay")}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-lg hover:bg-secondary/20 transition-colors">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg">{amenity.text}</h3>
                </div>
              );
            })}
          </div>
          <div className="mt-16 bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">
              {t("כל חדר כולל", "Every room includes")}
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mt-8 max-w-2xl mx-auto">
              <ul className={`space-y-2 ${language === "he" ? "text-right" : "text-left"}`}>
                <li>• {t("ארון בגדים מרווח", "Spacious wardrobe")}</li>
                <li>• {t("קומקום חשמלי", "Electric kettle")}</li>
                <li>• {t("מקרר", "Refrigerator")}</li>
                <li>• {t("כספת אישית", "Personal safe")}</li>
              </ul>
              <ul className={`space-y-2 ${language === "he" ? "text-right" : "text-left"}`}>
                <li>• {t("טלוויזיה בעלת מסך שטוח", "Flat-screen TV")}</li>
                <li>• {t("חדר רחצה פרטי עם מקלחת", "Private bathroom with shower")}</li>
                <li>• {t("מייבש שיער", "Hair dryer")}</li>
                <li>• {t("מצעים ומגבות איכותיים", "Quality linens and towels")}</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center text-foreground">
            {t("גלריה", "Gallery")}
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {t("הצצה למלון שלנו", "A glimpse into our hotel")}
          </p>
          <div className="grid md:grid-cols-3 gap-4">
            {galleryImages.map((img, idx) => (
              <div 
                key={idx} 
                className="relative h-64 overflow-hidden rounded-lg cursor-pointer group"
                onClick={() => setActiveImage(idx)}
              >
                <img 
                  src={img} 
                  alt={`Gallery ${idx + 1}`} 
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center text-foreground">
            {t("מיקום", "Location")}
          </h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">
            {t("במרכז תל אביב", "In the heart of Tel Aviv")}
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">
                    {t("כתובת", "Address")}
                  </h3>
                  <p className="text-muted-foreground">17 J. L. Gordon Street</p>
                  <p className="text-muted-foreground">
                    {t("תל אביב, 6343801", "Tel Aviv, 6343801")}
                  </p>
                  <p className="text-muted-foreground">
                    {t("ישראל", "Israel")}
                  </p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="font-bold text-xl text-foreground mb-4">
                  {t("אטרקציות קרובות", "Nearby Attractions")}
                </h3>
                <p>• {t("חוף גורדון - 5 דקות הליכה", "Gordon Beach - 5 min walk")}</p>
                <p>• {t("כיכר דיזנגוף - 10 דקות הליכה", "Dizengoff Square - 10 min walk")}</p>
                <p>• {t("דיזנגוף סנטר - 15 דקות הליכה", "Dizengoff Center - 15 min walk")}</p>
                <p>• {t("נמל התעופה בן גוריון - 14 ק\"מ", "Ben Gurion Airport - 14 km")}</p>
              </div>
            </div>
            <div className="h-96 bg-muted rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3380.6891234567!2d34.7749!3d32.0809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzLCsDA0JzUxLjIiTiAzNMKwNDYnMjkuNiJF!5e0!3m2!1sen!2sil!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-bold mb-4">
            {t("צור קשר", "Contact Us")}
          </h2>
          <p className="text-lg mb-12 opacity-90">
            {t("נשמח לעמוד לשירותכם", "We're here to help")}
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3">
              <Phone className="w-6 h-6" />
              <span className="text-lg">+972-3-123-4567</span>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-6 h-6" />
              <span className="text-lg">info@scarlethotel.co.il</span>
            </div>
          </div>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6" onClick={() => openBooking()}>
            {t("הזמן עכשיו", "Book Now")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Scarlet Hotel Tel Aviv</h3>
          <p className="text-sm opacity-80 mb-4">
            {t("מלון בוטיק יוקרתי בלב תל אביב", "A luxury boutique hotel in the heart of Tel Aviv")}
          </p>
          <div className="mt-8 text-xs opacity-60">
            © 2025 Scarlet Hotel. All rights reserved.
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} preselectedRoom={selectedRoom} />
    </div>
  );
}
