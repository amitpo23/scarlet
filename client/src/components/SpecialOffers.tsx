import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Clock, Gift, Heart, Sparkles, Sun } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Offer {
  id: number;
  icon: React.ReactNode;
  title: { he: string; en: string };
  description: { he: string; en: string };
  discount: string;
  validUntil: { he: string; en: string };
  features: { he: string[]; en: string[] };
  badge: { he: string; en: string };
  color: string;
}

export function SpecialOffers() {
  const { t, language } = useLanguage();

  const offers: Offer[] = [
    {
      id: 1,
      icon: <Sun className="w-8 h-8" />,
      title: { he: "חבילת קיץ מיוחדת", en: "Summer Special Package" },
      description: {
        he: "תהנו מקיץ בלתי נשכח בתל אביב עם הנחה מיוחדة על שהיות של 3 לילות ומעלה",
        en: "Enjoy an unforgettable summer in Tel Aviv with a special discount on stays of 3 nights or more"
      },
      discount: "25%",
      validUntil: { he: "עד 31.8.2025", en: "Until Aug 31, 2025" },
      features: {
        he: ["ארוחת בוקר חינם", "שדרוג חדר בכפוף לזמינות", "צ'ק-אאוט מאוחר עד 14:00"],
        en: ["Free breakfast", "Room upgrade subject to availability", "Late check-out until 2 PM"]
      },
      badge: { he: "פופולרי", en: "Popular" },
      color: "bg-orange-500"
    },
    {
      id: 2,
      icon: <Heart className="w-8 h-8" />,
      title: { he: "חבילה רומנטית", en: "Romantic Package" },
      description: {
        he: "חבילה מושלמת לזוגות - חדר מעוצב, שמפניה וארוחת ערב רומנטית",
        en: "Perfect package for couples - designed room, champagne and romantic dinner"
      },
      discount: "20%",
      validUntil: { he: "כל השנה", en: "Year-round" },
      features: {
        he: ["בקבוק שמפניה בחדר", "פרחים טריים", "ארוחת ערב במסעדה מומלצת"],
        en: ["Bottle of champagne in room", "Fresh flowers", "Dinner at recommended restaurant"]
      },
      badge: { he: "מומלץ", en: "Recommended" },
      color: "bg-pink-500"
    },
    {
      id: 3,
      icon: <Calendar className="w-8 h-8" />,
      title: { he: "הזמנה מוקדמת", en: "Early Bird Special" },
      description: {
        he: "הזמינו 30 יום מראש וחסכו! ההצעה הטובה ביותר שלנו",
        en: "Book 30 days in advance and save! Our best offer"
      },
      discount: "30%",
      validUntil: { he: "עד 31.12.2025", en: "Until Dec 31, 2025" },
      features: {
        he: ["ביטול חינם עד 7 ימים לפני", "WiFi מהיר", "שירות קונסיירז' 24/7"],
        en: ["Free cancellation up to 7 days before", "High-speed WiFi", "24/7 concierge service"]
      },
      badge: { he: "הצעה מיוחדת", en: "Special Deal" },
      color: "bg-blue-500"
    },
    {
      id: 4,
      icon: <Sparkles className="w-8 h-8" />,
      title: { he: "חבילת חגים", en: "Holiday Package" },
      description: {
        he: "חגגו את החגים בסגנון! הצעה מיוחדת לחגי ישראל ואירועים מיוחדים",
        en: "Celebrate holidays in style! Special offer for Israeli holidays and special events"
      },
      discount: "15%",
      validUntil: { he: "בתקופות החגים", en: "During holidays" },
      features: {
        he: ["ארוחה חגיגית", "קישוטים מיוחדים בחדר", "פעילויות מיוחדות"],
        en: ["Festive meal", "Special room decorations", "Special activities"]
      },
      badge: { he: "עונתי", en: "Seasonal" },
      color: "bg-purple-500"
    },
    {
      id: 5,
      icon: <Clock className="w-8 h-8" />,
      title: { he: "שהייה ממושכת", en: "Extended Stay" },
      description: {
        he: "שוהים 7 לילות ומעלה? קבלו הנחה משמעותית ושירותים נוספים",
        en: "Staying 7 nights or more? Get a significant discount and additional services"
      },
      discount: "35%",
      validUntil: { he: "כל השנה", en: "Year-round" },
      features: {
        he: ["שירות כביסה חינם", "מטבחון מאובזר", "ניקיון יומי"],
        en: ["Free laundry service", "Equipped kitchenette", "Daily cleaning"]
      },
      badge: { he: "חיסכון מקסימלי", en: "Maximum Savings" },
      color: "bg-green-500"
    },
    {
      id: 6,
      icon: <Gift className="w-8 h-8" />,
      title: { he: "מבצע סוף שבוע", en: "Weekend Deal" },
      description: {
        he: "בואו לבלות סוף שבוע בתל אביב במחיר מיוחד - יום שישי עד יום ראשון",
        en: "Spend a weekend in Tel Aviv at a special price - Friday to Sunday"
      },
      discount: "20%",
      validUntil: { he: "כל סופי השבוע", en: "All weekends" },
      features: {
        he: ["צ'ק-אין מוקדם חינם", "המלצות לאטרקציות", "מפת העיר"],
        en: ["Free early check-in", "Attraction recommendations", "City map"]
      },
      badge: { he: "סופ\"ש", en: "Weekend" },
      color: "bg-red-500"
    }
  ];

  return (
    <div className="space-y-8">
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {offers.map((offer) => (
          <Card key={offer.id} className="relative overflow-hidden hover:shadow-xl transition-shadow group">
            {/* Discount Badge */}
            <div className={`absolute top-4 right-4 ${offer.color} text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg z-10`}>
              {offer.discount} {t("הנחה", "OFF")}
            </div>

            {/* Category Badge */}
            <div className="absolute top-4 left-4 z-10">
              <Badge variant="secondary" className="bg-white/90 backdrop-blur-sm">
                {language === "he" ? offer.badge.he : offer.badge.en}
              </Badge>
            </div>

            <CardHeader className="pt-16">
              <div className={`w-16 h-16 ${offer.color} rounded-full flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform`}>
                {offer.icon}
              </div>
              <CardTitle className="text-2xl">
                {language === "he" ? offer.title.he : offer.title.en}
              </CardTitle>
            </CardHeader>

            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                {language === "he" ? offer.description.he : offer.description.en}
              </p>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Calendar className="w-4 h-4" />
                <span>{language === "he" ? offer.validUntil.he : offer.validUntil.en}</span>
              </div>

              <ul className="space-y-2">
                {(language === "he" ? offer.features.he : offer.features.en).map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm">
                    <span className="text-primary mt-1">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Button className="w-full mt-4" variant="default">
                {t("הזמן עכשיו", "Book Now")}
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="text-center mt-12 p-8 bg-primary/5 rounded-2xl border-2 border-primary/20">
        <h3 className="text-2xl font-bold mb-3">
          {t("לא מצאתם את מה שחיפשתם?", "Didn't find what you were looking for?")}
        </h3>
        <p className="text-muted-foreground mb-6">
          {t("צרו איתנו קשר ונבנה עבורכם חבילה מותאמת אישית", "Contact us and we'll create a custom package for you")}
        </p>
        <Button size="lg" variant="default">
          {t("צור קשר לחבילה מותאמת", "Contact for Custom Package")}
        </Button>
      </div>
    </div>
  );
}
