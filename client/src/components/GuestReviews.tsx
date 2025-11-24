import { Star, Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useLanguage } from "@/contexts/LanguageContext";

interface Review {
  id: number;
  name: { he: string; en: string };
  platform: string;
  rating: number;
  date: string;
  comment: { he: string; en: string };
  country: { he: string; en: string };
}

export function GuestReviews() {
  const { t, language } = useLanguage();

  const reviews: Review[] = [
    {
      id: 1,
      name: { he: "שרה כהן", en: "Sarah Cohen" },
      platform: "Booking.com",
      rating: 5,
      date: "2024-10",
      comment: {
        he: "מלון בוטיק מקסים בלב תל אביב! החדרים מעוצבים בטוב טעם, הצוות מדהים ומסביר פנים, והמיקום פשוט מושלם - קרוב לחוף ולכל האטרקציות. בהחלט נחזור!",
        en: "Charming boutique hotel in the heart of Tel Aviv! The rooms are tastefully designed, the staff is amazing and welcoming, and the location is simply perfect - close to the beach and all attractions. We'll definitely be back!"
      },
      country: { he: "ישראל", en: "Israel" }
    },
    {
      id: 2,
      name: { he: "מייקל אנדרסון", en: "Michael Anderson" },
      platform: "Google Reviews",
      rating: 5,
      date: "2024-09",
      comment: {
        he: "חוויה נפלאה! העיצוב הוינטג' הייחודי יוצר אווירה מיוחדת. ארוחת הבוקר מעולה והמיקום מאפשר הליכה קלה לכל מקום. שירות ברמה גבוהה!",
        en: "Wonderful experience! The unique vintage design creates a special atmosphere. Excellent breakfast and the location allows easy walking to everywhere. High-level service!"
      },
      country: { he: "ארה\"ב", en: "USA" }
    },
    {
      id: 3,
      name: { he: "אנה מולר", en: "Anna Müller" },
      platform: "TripAdvisor",
      rating: 4,
      date: "2024-11",
      comment: {
        he: "מלון נחמד מאוד עם אופי. החדרים נקיים ונוחים, הצוות עוזר ומקצועי. המיקום מצוין - 5 דקות הליכה לחוף גורדון. היחס המחיר-ביצועים מעולה!",
        en: "Very nice hotel with character. Rooms are clean and comfortable, staff is helpful and professional. Excellent location - 5 minutes walk to Gordon Beach. Great value for money!"
      },
      country: { he: "גרמניה", en: "Germany" }
    },
    {
      id: 4,
      name: { he: "דוד לוי", en: "David Levy" },
      platform: "Booking.com",
      rating: 5,
      date: "2024-08",
      comment: {
        he: "מלון מדהים! העיצוב האדום והשחור יוצר אווירה ייחודית ומרגשת. הצוות היה מאוד אדיב ועזר לנו עם כל בקשה. מומלץ בחום!",
        en: "Amazing hotel! The red and black design creates a unique and exciting atmosphere. The staff was very kind and helped us with every request. Highly recommended!"
      },
      country: { he: "ישראל", en: "Israel" }
    },
    {
      id: 5,
      name: { he: "סופי דופונט", en: "Sophie Dupont" },
      platform: "Google Reviews",
      rating: 5,
      date: "2024-07",
      comment: {
        he: "חוויה בלתי נשכחת! המלון משלב בצורה מושלמת עיצוב וינטג' עם נוחות מודרנית. הלובי מרשים והחדרים מפנקים. מיקום מעולה בשכונה תוססת!",
        en: "Unforgettable experience! The hotel perfectly combines vintage design with modern comfort. Impressive lobby and pampering rooms. Excellent location in a vibrant neighborhood!"
      },
      country: { he: "צרפת", en: "France" }
    },
    {
      id: 6,
      name: { he: "יוחנן ברג", en: "Johan Berg" },
      platform: "TripAdvisor",
      rating: 4,
      date: "2024-06",
      comment: {
        he: "מלון מעולה ליד הים. החדרים מרווחים ונקיים, המיטות נוחות מאוד. הצוות דובר אנגלית שוטפת ועזר בכל שאלה. חוויה נהדרת בתל אביב!",
        en: "Excellent hotel near the sea. Spacious and clean rooms, very comfortable beds. Staff speaks fluent English and helped with every question. Great experience in Tel Aviv!"
      },
      country: { he: "שוודיה", en: "Sweden" }
    }
  ];

  const averageRating = (reviews.reduce((sum, review) => sum + review.rating, 0) / reviews.length).toFixed(1);
  const totalReviews = reviews.length;

  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            className={`w-4 h-4 ${
              star <= rating
                ? "fill-yellow-400 text-yellow-400"
                : "fill-gray-200 text-gray-200"
            }`}
          />
        ))}
      </div>
    );
  };

  // Duplicate reviews for seamless loop
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <div className="space-y-8">
      {/* Overall Rating */}
      <div className="text-center">
        <div className="inline-flex flex-col items-center bg-primary text-primary-foreground px-12 py-8 rounded-2xl shadow-xl">
          <div className="text-6xl font-bold mb-2">{averageRating}</div>
          <div className="flex gap-1 mb-3">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-6 h-6 ${
                  star <= Math.round(parseFloat(averageRating))
                    ? "fill-yellow-300 text-yellow-300"
                    : "fill-white/30 text-white/30"
                }`}
              />
            ))}
          </div>
          <div className="text-lg opacity-90">
            {t(`מבוסס על ${totalReviews} ביקורות`, `Based on ${totalReviews} reviews`)}
          </div>
        </div>
      </div>

      {/* Horizontal Scrolling Reviews Ticker */}
      <div className="relative overflow-hidden">
        <div className="flex gap-6 animate-scroll-rtl">
          {duplicatedReviews.map((review, index) => (
            <Card key={`${review.id}-${index}`} className="flex-shrink-0 w-[350px] hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="font-bold text-lg mb-1">
                      {language === "he" ? review.name.he : review.name.en}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {language === "he" ? review.country.he : review.country.en}
                    </p>
                  </div>
                  <Quote className="w-8 h-8 text-primary/20" />
                </div>

                <div className="mb-3">{renderStars(review.rating)}</div>

                <p className="text-sm text-muted-foreground mb-4 line-clamp-4">
                  {language === "he" ? review.comment.he : review.comment.en}
                </p>

                <div className="flex items-center justify-between text-xs text-muted-foreground pt-3 border-t">
                  <span className="font-semibold text-primary">{review.platform}</span>
                  <span>{review.date}</span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Trust Badges */}
      <div className="flex flex-wrap justify-center gap-8 pt-8 border-t">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-1">9.4</div>
          <div className="text-sm text-muted-foreground">Booking.com</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-1">4.8</div>
          <div className="text-sm text-muted-foreground">Google Reviews</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary mb-1">4.5</div>
          <div className="text-sm text-muted-foreground">TripAdvisor</div>
        </div>
      </div>
    </div>
  );
}
