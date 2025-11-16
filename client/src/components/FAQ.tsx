import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { useLanguage } from "@/contexts/LanguageContext";

interface FAQItem {
  id: string;
  question: { he: string; en: string };
  answer: { he: string; en: string };
}

export function FAQ() {
  const { t, language } = useLanguage();

  const faqs: FAQItem[] = [
    {
      id: "checkin",
      question: {
        he: "מה שעות הצ'ק-אין והצ'ק-אאוט?",
        en: "What are the check-in and check-out times?"
      },
      answer: {
        he: "צ'ק-אין החל משעה 15:00 וצ'ק-אאוט עד שעה 11:00. אנחנו מציעים שירות אחסון מזוודות חינם אם אתם מגיעים מוקדם או צריכים לעזוב מאוחר יותר. ניתן לבקש צ'ק-אין מוקדם או צ'ק-אאוט מאוחר בכפוף לזמינות ובתשלום נוסף.",
        en: "Check-in starts at 3:00 PM and check-out is until 11:00 AM. We offer free luggage storage if you arrive early or need to leave later. Early check-in or late check-out can be requested subject to availability for an additional fee."
      }
    },
    {
      id: "parking",
      question: {
        he: "האם יש חניה במלון?",
        en: "Is there parking at the hotel?"
      },
      answer: {
        he: "כן, יש לנו חניה פרטית בתשלום במרחק הליכה קצר מהמלון. בנוסף, ישנן אפשרויות חניה ציבורית ברחוב בסביבה. אנו ממליצים להזמין מקום חניה מראש, במיוחד בסופי שבוע ובעונת השיא. הצוות שלנו ישמח לסייע בהזמנת חניה.",
        en: "Yes, we have paid private parking within a short walking distance from the hotel. Additionally, there are public street parking options in the area. We recommend booking a parking spot in advance, especially on weekends and during peak season. Our staff will be happy to assist with parking arrangements."
      }
    },
    {
      id: "breakfast",
      question: {
        he: "האם ארוחת בוקר כלולה במחיר?",
        en: "Is breakfast included in the price?"
      },
      answer: {
        he: "ארוחת בוקר אינה כלולה אוטומטית במחיר החדר, אך ניתן להוסיף אותה בעת ההזמנה או במהלך השהייה. אנו מציעים ארוחת בוקר ישראלית עשירה עם מוצרים טריים ומקומיים. בסביבה קיימים גם בתי קפה ומסעדות מצוינים לארוחת בוקר.",
        en: "Breakfast is not automatically included in the room rate, but can be added during booking or during your stay. We offer a rich Israeli breakfast with fresh, local products. There are also excellent cafes and restaurants in the area for breakfast."
      }
    },
    {
      id: "wifi",
      question: {
        he: "האם יש אינטרנט אלחוטי חינם?",
        en: "Is there free WiFi?"
      },
      answer: {
        he: "כן, אינטרנט אלחוטי מהיר וחינמי זמין בכל רחבי המלון - בחדרים, בלובי ובמרחבים המשותפים. פרטי הגישה מסופקים בעת הצ'ק-אין. במקרה של בעיה טכנית, הצוות שלנו זמין 24/7 לסיוע.",
        en: "Yes, fast and free WiFi is available throughout the hotel - in rooms, lobby, and common areas. Access details are provided at check-in. In case of technical issues, our staff is available 24/7 for assistance."
      }
    },
    {
      id: "pets",
      question: {
        he: "האם מותר להביא חיות מחמד?",
        en: "Are pets allowed?"
      },
      answer: {
        he: "כן, אנו מקבלים בברכה חיות מחמד קטנות עד בינוניות בתשלום נוסף. אנא הודיעו לנו מראש על כוונתכם להביא חיית מחמד כדי שנוכל להכין את החדר בהתאם. חיות המחמד צריכות להיות מחוסנות ומאולפות. יש לשמור על הניקיון והסדר בחדר.",
        en: "Yes, we welcome small to medium-sized pets for an additional fee. Please inform us in advance of your intention to bring a pet so we can prepare the room accordingly. Pets must be vaccinated and trained. Cleanliness and order must be maintained in the room."
      }
    },
    {
      id: "cancellation",
      question: {
        he: "מה מדיניות הביטול?",
        en: "What is the cancellation policy?"
      },
      answer: {
        he: "ביטול ללא עלות ניתן עד 48 שעות לפני מועד ההגעה. ביטול בתוך 48 שעות לפני ההגעה או אי הופעה יגרור חיוב של לילה אחד. בתקופות מיוחדות (חגים, אירועים) עשויה לחול מדיניות ביטול שונה. מומלץ לרכוש ביטוח נסיעות.",
        en: "Free cancellation is available up to 48 hours before arrival. Cancellation within 48 hours of arrival or no-show will result in a charge of one night. During special periods (holidays, events) a different cancellation policy may apply. Travel insurance is recommended."
      }
    },
    {
      id: "beach",
      question: {
        he: "כמה רחוק המלון מהחוף?",
        en: "How far is the hotel from the beach?"
      },
      answer: {
        he: "המלון ממוקם במרחק הליכה של כ-5 דקות מחוף גורדון, אחד החופים הפופולריים ביותר בתל אביב. החוף מציע מתקנים מצוינים כולל מצילים, מקלחות, שירותים ומסעדות. הצוות שלנו ישמח לספק מפה והמלצות על החופים הטובים ביותר באזור.",
        en: "The hotel is located about a 5-minute walk from Gordon Beach, one of Tel Aviv's most popular beaches. The beach offers excellent facilities including lifeguards, showers, restrooms, and restaurants. Our staff will be happy to provide a map and recommendations for the best beaches in the area."
      }
    },
    {
      id: "airport",
      question: {
        he: "איך מגיעים מנמל התעופה למלון?",
        en: "How do I get from the airport to the hotel?"
      },
      answer: {
        he: "נמל התעופה בן גוריון נמצא במרחק כ-20 ק\"מ מהמלון. אפשרויות הגעה: רכבת ישראל (כ-30 דקות לתחנת הרכבת תל אביב-סבידור ומשם 10 דקות הליכה), מונית (כ-30-40 דקות), או שירות הסעות פרטי שניתן להזמין דרכנו. הצוות שלנו ישמח לסייע בתיאום הסעה.",
        en: "Ben Gurion Airport is about 20 km from the hotel. Transportation options: Israel Railways (about 30 minutes to Tel Aviv-Savidor station, then 10 minutes walk), taxi (about 30-40 minutes), or private shuttle service that can be arranged through us. Our staff will be happy to assist with transportation coordination."
      }
    },
    {
      id: "amenities",
      question: {
        he: "אילו שירותים נוספים מציע המלון?",
        en: "What additional amenities does the hotel offer?"
      },
      answer: {
        he: "המלון מציע מגוון שירותים: קבלה פועלת 24 שעות, שירות חדרים, כביסה ו-dry cleaning, כספת בחדרים, מיזוג אוויר, טלוויזיה בכבלים, מייבש שיער, ערכת קפה ותה בחדר, ועוד. אנו גם מציעים המלצות לאטרקציות, מסעדות ואירועים בתל אביב.",
        en: "The hotel offers various services: 24-hour reception, room service, laundry and dry cleaning, in-room safe, air conditioning, cable TV, hair dryer, coffee and tea set in room, and more. We also provide recommendations for attractions, restaurants, and events in Tel Aviv."
      }
    },
    {
      id: "payment",
      question: {
        he: "אילו אמצעי תשלום מקבלים?",
        en: "What payment methods are accepted?"
      },
      answer: {
        he: "אנו מקבלים כרטיסי אשראי מובילים (Visa, MasterCard, American Express), מזומן (שקלים ודולרים), והעברה בנקאית. תשלום מלא או מקדמה נדרשים בעת ההזמנה בהתאם לסוג התעריף. חשבונית מס תינתן בסיום השהייה.",
        en: "We accept major credit cards (Visa, MasterCard, American Express), cash (shekels and dollars), and bank transfer. Full payment or deposit is required at booking depending on the rate type. Tax invoice will be provided at the end of stay."
      }
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4">
        {faqs.map((faq) => (
          <AccordionItem 
            key={faq.id} 
            value={faq.id}
            className="border rounded-lg px-6 bg-white shadow-sm hover:shadow-md transition-shadow"
          >
            <AccordionTrigger className="text-left hover:no-underline py-5">
              <span className="font-semibold text-lg">
                {language === "he" ? faq.question.he : faq.question.en}
              </span>
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
              {language === "he" ? faq.answer.he : faq.answer.en}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
