import { useLanguage } from "@/contexts/LanguageContext";
import { Button } from "@/components/ui/button";

export default function Privacy() {
  const { t, language } = useLanguage();

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-6">
          <h1 className="text-4xl font-bold">
            {t("מדיניות פרטיות", "Privacy Policy")}
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
                  מלון Scarlet ("המלון", "אנחנו") מכבד את פרטיותכם ומחויב להגן על המידע האישי שלכם.
                  מדיניות פרטיות זו מסבירה כיצד אנו אוספים, משתמשים, מאחסנים ומגנים על המידע האישי שלכם,
                  בהתאם לחוק הגנת הפרטיות, התשמ"א-1981 ותקנות הגנת הפרטיות (אבטחת מידע), התשע"ז-2017.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2. איזה מידע אנו אוספים</h2>
                <p className="mb-4">אנו עשויים לאסוף את סוגי המידע הבאים:</p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li><strong>פרטים אישיים:</strong> שם מלא, תעודת זהות, תאריך לידה</li>
                  <li><strong>פרטי התקשרות:</strong> כתובת דוא"ל, מספר טלפון, כתובת מגורים</li>
                  <li><strong>פרטי תשלום:</strong> פרטי כרטיס אשראי (מאובטחים ומוצפנים)</li>
                  <li><strong>פרטי הזמנה:</strong> תאריכי שהייה, העדפות חדר, בקשות מיוחדות</li>
                  <li><strong>מידע טכני:</strong> כתובת IP, סוג דפדפן, מערכת הפעלה</li>
                  <li><strong>עוגיות (Cookies):</strong> מידע על השימוש באתר</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">3. כיצד אנו משתמשים במידע</h2>
                <p className="mb-4">אנו משתמשים במידע שנאסף למטרות הבאות:</p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li>עיבוד הזמנות ומתן שירותי אירוח</li>
                  <li>תקשורת עם אורחים לגבי הזמנות ושירותים</li>
                  <li>שיפור השירות וחווית המשתמש באתר</li>
                  <li>שליחת מידע שיווקי (בכפוף להסכמה)</li>
                  <li>עמידה בדרישות חוק ותקנות</li>
                  <li>מניעת הונאות ואבטחת מידע</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">4. שיתוף מידע עם צדדים שלישיים</h2>
                <p className="mb-4">
                  אנו לא מוכרים או משכירים את המידע האישי שלכם לצדדים שלישיים. אנו עשויים לשתף מידע עם:
                </p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li>ספקי שירות (עיבוד תשלומים, שירותי דוא"ל)</li>
                  <li>רשויות חוק במקרים הנדרשים על פי חוק</li>
                  <li>שותפים עסקיים (בהסכמתכם המפורשת בלבד)</li>
                </ul>
                <p className="mb-4">
                  כל הצדדים השלישיים מחויבים לשמור על סודיות המידע ולהשתמש בו רק למטרות שלשמן נמסר.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">5. אבטחת מידע</h2>
                <p className="mb-4">
                  אנו נוקטים באמצעי אבטחה טכנולוגיים וארגוניים מתקדמים להגנה על המידע האישי שלכם:
                </p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li>הצפנת SSL/TLS לכל העברות המידע</li>
                  <li>שרתים מאובטחים ומוגנים</li>
                  <li>גישה מוגבלת למידע רק לעובדים מורשים</li>
                  <li>גיבויים קבועים של המידע</li>
                  <li>ניטור ובדיקות אבטחה שוטפות</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">6. זכויותיכם</h2>
                <p className="mb-4">בהתאם לחוק הגנת הפרטיות, יש לכם את הזכויות הבאות:</p>
                <ul className="list-disc pr-6 space-y-2 mb-4">
                  <li><strong>זכות עיון:</strong> לעיין במידע המוחזק עליכם</li>
                  <li><strong>זכות תיקון:</strong> לתקן מידע שגוי או לא מדויק</li>
                  <li><strong>זכות מחיקה:</strong> לבקש מחיקת מידע (בכפוף למגבלות חוקיות)</li>
                  <li><strong>זכות התנגדות:</strong> להתנגד לשימוש במידע למטרות שיווק</li>
                  <li><strong>זכות להסרה:</strong> מרשימות תפוצה שיווקיות</li>
                </ul>
                <p className="mb-4">
                  לממש את זכויותיכם, אנא פנו אלינו בפרטים המופיעים בסעיף "יצירת קשר" להלן.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">7. עוגיות (Cookies)</h2>
                <p className="mb-4">
                  האתר שלנו משתמש בעוגיות לשיפור חווית המשתמש. עוגיות הן קבצי טקסט קטנים הנשמרים במחשב שלכם.
                  אתם יכולים לנהל או למחוק עוגיות דרך הגדרות הדפדפן שלכם.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">8. שמירת מידע</h2>
                <p className="mb-4">
                  אנו שומרים את המידע האישי שלכם כל עוד הוא נדרש למטרות שלשמן נאסף, או כפי שנדרש על פי חוק.
                  לאחר תקופה זו, המידע יימחק או יוסר זיהוי באופן מאובטח.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">9. קטינים</h2>
                <p className="mb-4">
                  האתר שלנו אינו מיועד לקטינים מתחת לגיל 18. אנו לא אוספים ביודעין מידע אישי מקטינים.
                  אם הנכם הורה או אפוטרופוס וגיליתם שילדכם מסר לנו מידע אישי, אנא צרו איתנו קשר.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">10. עדכונים למדיניות</h2>
                <p className="mb-4">
                  אנו שומרים לעצמנו את הזכות לעדכן מדיניות פרטיות זו מעת לעת. עדכונים מהותיים יפורסמו באתר
                  עם ציון תאריך העדכון. המשך השימוש באתר לאחר עדכון מהווה הסכמה למדיניות המעודכנת.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">11. יצירת קשר</h2>
                <p className="mb-4">
                  לשאלות, הבהרות או בקשות בנוגע למדיניות פרטיות זו או לטיפול במידע האישי שלכם, אנא פנו אלינו:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <p><strong>מלון Scarlet</strong></p>
                  <p>רחוב הדוגמה 123, תל אביב</p>
                  <p>דוא"ל: privacy@scarlethotel.co.il</p>
                  <p>טלפון: 03-1234567</p>
                  <p className="mt-4 text-sm">
                    רכז הגנת פרטיות: עו"ד דוד לוי
                  </p>
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
                  Scarlet Hotel ("the Hotel", "we") respects your privacy and is committed to protecting your personal information.
                  This privacy policy explains how we collect, use, store, and protect your personal information,
                  in accordance with the Privacy Protection Law, 1981 and the Privacy Protection Regulations (Data Security), 2017.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">2. What Information We Collect</h2>
                <p className="mb-4">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Personal details:</strong> Full name, ID number, date of birth</li>
                  <li><strong>Contact information:</strong> Email address, phone number, residential address</li>
                  <li><strong>Payment details:</strong> Credit card information (secured and encrypted)</li>
                  <li><strong>Booking details:</strong> Stay dates, room preferences, special requests</li>
                  <li><strong>Technical information:</strong> IP address, browser type, operating system</li>
                  <li><strong>Cookies:</strong> Information about website usage</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">3. How We Use the Information</h2>
                <p className="mb-4">We use the collected information for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Processing reservations and providing hospitality services</li>
                  <li>Communicating with guests regarding bookings and services</li>
                  <li>Improving service and user experience on the website</li>
                  <li>Sending marketing information (subject to consent)</li>
                  <li>Complying with legal and regulatory requirements</li>
                  <li>Preventing fraud and securing information</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">4. Sharing Information with Third Parties</h2>
                <p className="mb-4">
                  We do not sell or rent your personal information to third parties. We may share information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>Service providers (payment processing, email services)</li>
                  <li>Law enforcement authorities when required by law</li>
                  <li>Business partners (only with your explicit consent)</li>
                </ul>
                <p className="mb-4">
                  All third parties are obligated to maintain information confidentiality and use it only for the purposes for which it was provided.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">5. Information Security</h2>
                <p className="mb-4">
                  We employ advanced technological and organizational security measures to protect your personal information:
                </p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li>SSL/TLS encryption for all data transfers</li>
                  <li>Secure and protected servers</li>
                  <li>Limited access to information only for authorized employees</li>
                  <li>Regular data backups</li>
                  <li>Ongoing security monitoring and testing</li>
                </ul>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">6. Your Rights</h2>
                <p className="mb-4">According to the Privacy Protection Law, you have the following rights:</p>
                <ul className="list-disc pl-6 space-y-2 mb-4">
                  <li><strong>Right of access:</strong> To view information held about you</li>
                  <li><strong>Right to correction:</strong> To correct incorrect or inaccurate information</li>
                  <li><strong>Right to erasure:</strong> To request deletion of information (subject to legal limitations)</li>
                  <li><strong>Right to object:</strong> To object to the use of information for marketing purposes</li>
                  <li><strong>Right to removal:</strong> From marketing mailing lists</li>
                </ul>
                <p className="mb-4">
                  To exercise your rights, please contact us using the details in the "Contact" section below.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">7. Cookies</h2>
                <p className="mb-4">
                  Our website uses cookies to improve user experience. Cookies are small text files stored on your computer.
                  You can manage or delete cookies through your browser settings.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">8. Data Retention</h2>
                <p className="mb-4">
                  We retain your personal information as long as it is required for the purposes for which it was collected, or as required by law.
                  After this period, the information will be deleted or anonymized securely.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">9. Minors</h2>
                <p className="mb-4">
                  Our website is not intended for minors under 18. We do not knowingly collect personal information from minors.
                  If you are a parent or guardian and discover that your child has provided us with personal information, please contact us.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">10. Policy Updates</h2>
                <p className="mb-4">
                  We reserve the right to update this privacy policy from time to time. Material updates will be posted on the website
                  with the update date indicated. Continued use of the website after an update constitutes acceptance of the updated policy.
                </p>
              </section>

              <section className="mb-8">
                <h2 className="text-3xl font-bold mb-4">11. Contact</h2>
                <p className="mb-4">
                  For questions, clarifications, or requests regarding this privacy policy or the handling of your personal information, please contact us:
                </p>
                <div className="bg-secondary/20 p-6 rounded-lg">
                  <p><strong>Scarlet Hotel</strong></p>
                  <p>123 Example Street, Tel Aviv</p>
                  <p>Email: privacy@scarlethotel.co.il</p>
                  <p>Phone: +972-3-1234567</p>
                  <p className="mt-4 text-sm">
                    Privacy Protection Coordinator: Adv. David Levy
                  </p>
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
