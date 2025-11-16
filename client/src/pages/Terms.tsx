import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Terms() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">
            {t("תנאי שימוש", "Terms of Service")}
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
              <p className="text-sm text-muted-foreground mb-8">
                עדכון אחרון: נובמבר 2025
              </p>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">1. כללי</h2>
                <p className="mb-4">
                  תנאי שימוש אלה ("התנאים") מסדירים את השימוש באתר האינטרנט של מלון Scarlet ("האתר", "המלון", "אנחנו")
                  ואת ההזמנות והשירותים הניתנים באמצעותו. השימוש באתר מהווה הסכמה מלאה לתנאים אלה.
                  אם אינכם מסכימים לתנאים, אנא הימנעו משימוש באתר.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2. הזמנות</h2>
                <h3 className="text-2xl font-semibold mb-3">2.1 ביצוע הזמנה</h3>
                <p className="mb-4">
                  הזמנה תיחשב כמאושרת רק לאחר קבלת אישור בכתב (דוא"ל או SMS) מהמלון.
                  המלון שומר לעצמו את הזכות לסרב להזמנה או לבטלה במקרים חריגים.
                </p>
                
                <h3 className="text-2xl font-semibold mb-3">2.2 גיל מינימלי</h3>
                <p className="mb-4">
                  גיל המינימום לביצוע הזמנה ולצ'ק-אין הוא 18 שנים. יש להציג תעודה מזהה בעת הצ'ק-אין.
                </p>

                <h3 className="text-2xl font-semibold mb-3">2.3 תשלום</h3>
                <p className="mb-4">
                  התשלום יבוצע באמצעות כרטיס אשראי תקף. במקרים מסוימים, המלון רשאי לדרוש מקדמה או תשלום מלא מראש.
                  כל המחירים באתר כוללים מע"מ אלא אם צוין אחרת.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">3. ביטולים והחזרים</h2>
                <h3 className="text-2xl font-semibold mb-3">3.1 מדיניות ביטול רגילה</h3>
                <p className="mb-4">
                  ביטול ללא עלות ניתן עד 48 שעות לפני מועד ההגעה המתוכנן. ביטול בתוך 48 שעות לפני ההגעה
                  או אי הופעה (No-Show) יגרור חיוב של לילה אחד.
                </p>

                <h3 className="text-2xl font-semibold mb-3">3.2 תעריפים מיוחדים</h3>
                <p className="mb-4">
                  הזמנות בתעריפים מיוחדים (מבצעים, הנחות) עשויות להיות כפופות למדיניות ביטול שונה.
                  פרטי מדיניות הביטול יצוינו במפורש בעת ההזמנה.
                </p>

                <h3 className="text-2xl font-semibold mb-3">3.3 החזרים</h3>
                <p className="mb-4">
                  החזרים יבוצעו לאותו אמצעי תשלום ששימש להזמנה, תוך 14 ימי עסקים.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">4. צ'ק-אין וצ'ק-אאוט</h2>
                <h3 className="text-2xl font-semibold mb-3">4.1 שעות צ'ק-אין וצ'ק-אאוט</h3>
                <p className="mb-4">
                  צ'ק-אין: החל משעה 15:00<br />
                  צ'ק-אאוט: עד שעה 11:00
                </p>

                <h3 className="text-2xl font-semibold mb-3">4.2 צ'ק-אין מוקדם/צ'ק-אאוט מאוחר</h3>
                <p className="mb-4">
                  ניתן לבקש צ'ק-אין מוקדם או צ'ק-אאוט מאוחר בכפוף לזמינות ובתשלום נוסף.
                </p>

                <h3 className="text-2xl font-semibold mb-3">4.3 דרישות צ'ק-אין</h3>
                <p className="mb-4">
                  בעת הצ'ק-אין יש להציג תעודה מזהה תקפה וכרטיס אשראי לערבויות.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">5. כללי התנהגות</h2>
                <p className="mb-4">האורחים מתבקשים:</p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li>לכבד את שאר האורחים ולשמור על שקט בין השעות 22:00-08:00</li>
                  <li>לא לעשן בחדרים (עישון מותר באזורים מיועדים בלבד)</li>
                  <li>לא להכניס חיות מחמד ללא אישור מראש</li>
                  <li>לא לארח אורחים נוספים בחדר ללא אישור</li>
                  <li>לשמור על רכוש המלון ולדווח על נזקים</li>
                </ul>
                <p className="mb-4">
                  המלון שומר לעצמו את הזכות לבקש מאורח לעזוב את המלון ללא החזר כספי במקרה של הפרת כללי ההתנהגות.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">6. אחריות ונזקים</h2>
                <h3 className="text-2xl font-semibold mb-3">6.1 אחריות המלון</h3>
                <p className="mb-4">
                  המלון אינו אחראי לאובדן או נזק לחפצי ערך שלא הופקדו בכספת המלון.
                  מומלץ להשתמש בכספת שבחדר לשמירת חפצי ערך.
                </p>

                <h3 className="text-2xl font-semibold mb-3">6.2 אחריות האורח</h3>
                <p className="mb-4">
                  האורח אחראי לכל נזק שייגרם לרכוש המלון במהלך שהותו. המלון רשאי לחייב את האורח בעלות התיקון או ההחלפה.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">7. כוח עליון</h2>
                <p className="mb-4">
                  המלון לא יהיה אחראי לאי-קיום התחייבויותיו עקב נסיבות שאינן בשליטתו, לרבות אסונות טבע,
                  מלחמה, שביתות, תקלות טכניות או החלטות רשויות.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">8. שינויים בתנאים</h2>
                <p className="mb-4">
                  המלון שומר לעצמו את הזכות לעדכן תנאים אלה מעת לעת. שינויים יפורסמו באתר עם ציון תאריך העדכון.
                  המשך השימוש באתר לאחר עדכון מהווה הסכמה לתנאים המעודכנים.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">9. דין וסמכות שיפוט</h2>
                <p className="mb-4">
                  תנאים אלה כפופים לדיני מדינת ישראל. סמכות השיפוט הבלעדית בכל סכסוך תהיה לבתי המשפט המוסמכים בתל אביב-יפו.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">10. יצירת קשר</h2>
                <p className="mb-4">
                  לשאלות או הבהרות בנוגע לתנאי שימוש אלה, אנא פנו אלינו:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <p><strong>מלון Scarlet</strong></p>
                  <p>רחוב הדוגמה 123, תל אביב</p>
                  <p>דוא"ל: info@scarlethotel.co.il</p>
                  <p>טלפון: 03-1234567</p>
                </div>
              </section>

              <div className="mt-12 text-center">
                <Button asChild size="lg">
                  <a href="/">חזרה לדף הבית</a>
                </Button>
              </div>
            </>
          ) : (
            <>
              <p className="text-sm text-muted-foreground mb-8">
                Last updated: November 2025
              </p>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">1. General</h2>
                <p className="mb-4">
                  These terms of service ("Terms") govern the use of Scarlet Hotel's website ("the Site", "the Hotel", "we")
                  and the reservations and services provided through it. Using the Site constitutes full acceptance of these Terms.
                  If you do not agree to the Terms, please refrain from using the Site.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2. Reservations</h2>
                <h3 className="text-2xl font-semibold mb-3">2.1 Making a Reservation</h3>
                <p className="mb-4">
                  A reservation will be considered confirmed only after receiving written confirmation (email or SMS) from the Hotel.
                  The Hotel reserves the right to refuse or cancel a reservation in exceptional cases.
                </p>
                
                <h3 className="text-2xl font-semibold mb-3">2.2 Minimum Age</h3>
                <p className="mb-4">
                  The minimum age for making a reservation and checking in is 18 years. Valid ID must be presented at check-in.
                </p>

                <h3 className="text-2xl font-semibold mb-3">2.3 Payment</h3>
                <p className="mb-4">
                  Payment will be made using a valid credit card. In certain cases, the Hotel may require a deposit or full payment in advance.
                  All prices on the Site include VAT unless otherwise stated.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">3. Cancellations and Refunds</h2>
                <h3 className="text-2xl font-semibold mb-3">3.1 Standard Cancellation Policy</h3>
                <p className="mb-4">
                  Free cancellation is available up to 48 hours before the planned arrival date. Cancellation within 48 hours of arrival
                  or no-show will result in a charge of one night.
                </p>

                <h3 className="text-2xl font-semibold mb-3">3.2 Special Rates</h3>
                <p className="mb-4">
                  Reservations at special rates (promotions, discounts) may be subject to a different cancellation policy.
                  Cancellation policy details will be explicitly stated at the time of booking.
                </p>

                <h3 className="text-2xl font-semibold mb-3">3.3 Refunds</h3>
                <p className="mb-4">
                  Refunds will be processed to the same payment method used for the reservation, within 14 business days.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">4. Check-in and Check-out</h2>
                <h3 className="text-2xl font-semibold mb-3">4.1 Check-in and Check-out Times</h3>
                <p className="mb-4">
                  Check-in: From 3:00 PM<br />
                  Check-out: Until 11:00 AM
                </p>

                <h3 className="text-2xl font-semibold mb-3">4.2 Early Check-in/Late Check-out</h3>
                <p className="mb-4">
                  Early check-in or late check-out can be requested subject to availability and for an additional fee.
                </p>

                <h3 className="text-2xl font-semibold mb-3">4.3 Check-in Requirements</h3>
                <p className="mb-4">
                  At check-in, a valid ID and credit card for incidentals must be presented.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">5. Code of Conduct</h2>
                <p className="mb-4">Guests are requested to:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Respect other guests and maintain quiet hours between 10:00 PM - 8:00 AM</li>
                  <li>Not smoke in rooms (smoking allowed in designated areas only)</li>
                  <li>Not bring pets without prior approval</li>
                  <li>Not host additional guests in the room without approval</li>
                  <li>Maintain hotel property and report damages</li>
                </ul>
                <p className="mb-4">
                  The Hotel reserves the right to ask a guest to leave the hotel without refund in case of violation of the code of conduct.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">6. Liability and Damages</h2>
                <h3 className="text-2xl font-semibold mb-3">6.1 Hotel Liability</h3>
                <p className="mb-4">
                  The Hotel is not responsible for loss or damage to valuables not deposited in the hotel safe.
                  It is recommended to use the in-room safe for storing valuables.
                </p>

                <h3 className="text-2xl font-semibold mb-3">6.2 Guest Liability</h3>
                <p className="mb-4">
                  The guest is responsible for any damage caused to hotel property during their stay. The Hotel may charge the guest for repair or replacement costs.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">7. Force Majeure</h2>
                <p className="mb-4">
                  The Hotel will not be liable for failure to fulfill its obligations due to circumstances beyond its control, including natural disasters,
                  war, strikes, technical failures, or government decisions.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">8. Changes to Terms</h2>
                <p className="mb-4">
                  The Hotel reserves the right to update these Terms from time to time. Changes will be posted on the Site with the update date indicated.
                  Continued use of the Site after an update constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">9. Governing Law and Jurisdiction</h2>
                <p className="mb-4">
                  These Terms are governed by the laws of the State of Israel. Exclusive jurisdiction for any dispute will be with the competent courts in Tel Aviv-Jaffa.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">10. Contact</h2>
                <p className="mb-4">
                  For questions or clarifications regarding these Terms of Service, please contact us:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <p><strong>Scarlet Hotel</strong></p>
                  <p>123 Example Street, Tel Aviv</p>
                  <p>Email: info@scarlethotel.co.il</p>
                  <p>Phone: +972-3-1234567</p>
                </div>
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
