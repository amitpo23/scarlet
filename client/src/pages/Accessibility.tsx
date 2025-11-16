import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function Accessibility() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">
            {t("הצהרת נגישות", "Accessibility Statement")}
          </h1>
          <p className="mt-2 text-lg">
            {t("מלון Scarlet - תל אביב", "Scarlet Hotel - Tel Aviv")}
          </p>
        </div>
      </header>

      <main className="container mx-auto px-6 py-12 max-w-4xl">
        <div className="prose prose-lg max-w-none" dir={language === "he" ? "rtl" : "ltr"}>
          {language === "he" ? (
            <>
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">מחויבות לנגישות</h2>
                <p className="mb-4">
                  מלון Scarlet מחויב להנגשת האתר והשירותים שלנו לכלל האוכלוסייה, לרבות אנשים עם מוגבלויות.
                  אנו פועלים ליישום תקן הנגישות הישראלי (ת"י 5568) ברמה AA, בהתאם לחוק שוויון זכויות לאנשים עם מוגבלות, התשנ"ח-1998.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">הנגשת האתר</h2>
                <p className="mb-4">האתר שלנו כולל את ההתאמות הבאות:</p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li>ניווט באמצעות מקלדת בלבד</li>
                  <li>תמיכה בקוראי מסך (Screen Readers)</li>
                  <li>ניגודיות צבעים מתאימה</li>
                  <li>גדלי טקסט גמישים</li>
                  <li>תגיות ARIA לשיפור הנגישות</li>
                  <li>תיאורי טקסט חלופיים לתמונות</li>
                  <li>מבנה סמנטי נכון של דפי האתר</li>
                  <li>תמיכה בזום עד 200% ללא אובדן תוכן</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">נגישות המלון הפיזי</h2>
                <p className="mb-4">המלון שלנו מציע:</p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li>חניה נגישה</li>
                  <li>כניסה נגישה לכיסאות גלגלים</li>
                  <li>מעלית נגישה</li>
                  <li>חדרים מונגשים (יש לבקש מראש)</li>
                  <li>שירותים נגישים באזורים ציבוריים</li>
                  <li>צוות מיומן בשירות אנשים עם מוגבלויות</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">רמת הנגישות</h2>
                <p className="mb-4">
                  האתר תוכנן ונבנה תוך שאיפה לעמוד בדרישות תקן הנגישות הישראלי (ת"י 5568) ברמה AA,
                  בהתאם להנחיות WCAG 2.1. הנגשת האתר בוצעה על ידי צוות מקצועי ונבדקת באופן שוטף.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">דפדפנים נתמכים</h2>
                <p className="mb-4">האתר נבדק ונמצא נגיש בדפדפנים הבאים:</p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li>Google Chrome (גרסה עדכנית)</li>
                  <li>Mozilla Firefox (גרסה עדכנית)</li>
                  <li>Microsoft Edge (גרסה עדכנית)</li>
                  <li>Safari (גרסה עדכנית)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">תאריך עדכון אחרון</h2>
                <p className="mb-4">
                  הצהרת נגישות זו עודכנה לאחרונה בתאריך: נובמבר 2025
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">משוב ופניות</h2>
                <p className="mb-4">
                  אנו משקיעים מאמצים רבים בהנגשת האתר והשירותים שלנו. אם נתקלתם בבעיית נגישות באתר,
                  או אם יש לכם הצעות לשיפור הנגישות, נשמח לשמוע מכם:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:accessibility@scarlethotel.co.il" className="text-primary hover:underline">
                      accessibility@scarlethotel.co.il
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+972-3-1234567" className="text-primary hover:underline">
                      03-1234567
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    רכזת נגישות: שרה כהן<br />
                    זמינות: ימים א'-ה', 09:00-17:00
                  </p>
                </div>
                <p className="mt-4">
                  נעשה כל מאמץ לטפל בפנייתכם בהקדם האפשרי, ולא יאוחר מ-7 ימי עסקים.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">הסדרי נגישות חלופיים</h2>
                <p className="mb-4">
                  במידה ונתקלתם בקושי בשימוש באתר, אנו מציעים שירותי נגישות חלופיים:
                </p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li>שירות טלפוני לביצוע הזמנות: 03-1234567</li>
                  <li>שירות דוא"ל: info@scarlethotel.co.il</li>
                  <li>שירות WhatsApp: 050-1234567</li>
                  <li>פגישה פיזית במלון (בתיאום מראש)</li>
                </ul>
              </section>

              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <a href="/">חזרה לדף הבית</a>
                </Button>
              </div>
            </>
          ) : (
            <>
              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Commitment to Accessibility</h2>
                <p className="mb-4">
                  Scarlet Hotel is committed to making our website and services accessible to everyone, including people with disabilities.
                  We strive to implement the Israeli Standard (IS 5568) at Level AA, in accordance with the Equal Rights for Persons with Disabilities Law, 1998.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Website Accessibility</h2>
                <p className="mb-4">Our website includes the following accommodations:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Keyboard-only navigation</li>
                  <li>Screen reader support</li>
                  <li>Appropriate color contrast</li>
                  <li>Flexible text sizes</li>
                  <li>ARIA labels for improved accessibility</li>
                  <li>Alternative text descriptions for images</li>
                  <li>Proper semantic structure of pages</li>
                  <li>Support for zoom up to 200% without content loss</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Physical Hotel Accessibility</h2>
                <p className="mb-4">Our hotel offers:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Accessible parking</li>
                  <li>Wheelchair-accessible entrance</li>
                  <li>Accessible elevator</li>
                  <li>Accessible rooms (advance request required)</li>
                  <li>Accessible restrooms in public areas</li>
                  <li>Staff trained in serving people with disabilities</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Accessibility Level</h2>
                <p className="mb-4">
                  The website was designed and built with the goal of meeting the requirements of the Israeli Standard (IS 5568) at Level AA,
                  in accordance with WCAG 2.1 guidelines. Website accessibility was implemented by a professional team and is regularly tested.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Supported Browsers</h2>
                <p className="mb-4">The site has been tested and found accessible in the following browsers:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Google Chrome (current version)</li>
                  <li>Mozilla Firefox (current version)</li>
                  <li>Microsoft Edge (current version)</li>
                  <li>Safari (current version)</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Last Update</h2>
                <p className="mb-4">
                  This accessibility statement was last updated on: November 2025
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Feedback and Inquiries</h2>
                <p className="mb-4">
                  We invest significant efforts in making our website and services accessible. If you encounter an accessibility issue on the site,
                  or if you have suggestions for improving accessibility, we'd love to hear from you:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg space-y-4">
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-primary" />
                    <a href="mailto:accessibility@scarlethotel.co.il" className="text-primary hover:underline">
                      accessibility@scarlethotel.co.il
                    </a>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-5 h-5 text-primary" />
                    <a href="tel:+972-3-1234567" className="text-primary hover:underline">
                      +972-3-1234567
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Accessibility Coordinator: Sarah Cohen<br />
                    Available: Sun-Thu, 09:00-17:00
                  </p>
                </div>
                <p className="mt-4">
                  We will make every effort to address your inquiry as soon as possible, no later than 7 business days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">Alternative Accessibility Arrangements</h2>
                <p className="mb-4">
                  If you experience difficulty using the website, we offer alternative accessibility services:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Phone service for bookings: +972-3-1234567</li>
                  <li>Email service: info@scarlethotel.co.il</li>
                  <li>WhatsApp service: +972-50-1234567</li>
                  <li>In-person meeting at the hotel (by appointment)</li>
                </ul>
              </section>

              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <a href="/">Back to Home</a>
                </Button>
              </div>
            </>
          )}
        </div>
      </main>
    </div>
  );
}
