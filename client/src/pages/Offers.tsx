import { useLanguage } from "@/contexts/LanguageContext";
import { SpecialOffers } from "@/components/SpecialOffers";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Offers() {
  const { language, t } = useLanguage();

  return (
    <div className="min-h-screen bg-white">
      {/* Header with back button */}
      <div className="bg-gray-50 border-b border-gray-100">
        <div className="container mx-auto px-6 py-8">
          <Link href="/">
            <Button variant="ghost" className="mb-6 text-gray-600 hover:text-primary">
              {language === "he" ? (
                <>
                  <ArrowRight className="w-4 h-4 ml-2" />
                  {t("חזרה לדף הבית", "Back to Home")}
                </>
              ) : (
                <>
                  <ArrowLeft className="w-4 h-4 mr-2" />
                  {t("חזרה לדף הבית", "Back to Home")}
                </>
              )}
            </Button>
          </Link>
          
          <h1 className="text-5xl font-light mb-4 text-gray-900">
            {t("הצעות מיוחדות", "Special Offers")}
          </h1>
          <div className="w-16 h-px bg-primary mb-4"></div>
          <p className="text-base text-gray-600 font-light max-w-2xl">
            {t(
              "חסכו עם המבצעים והחבילות המיוחדות שלנו. הצעות מוגבלות בזמן עבור אורחינו היקרים.",
              "Save with our special deals and packages. Limited time offers for our valued guests."
            )}
          </p>
        </div>
      </div>

      {/* Offers Section */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <SpecialOffers />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-light mb-4 text-gray-900">
            {t("לא מצאת את מה שחיפשת?", "Didn't find what you were looking for?")}
          </h2>
          <p className="text-gray-600 mb-8 font-light">
            {t("צור איתנו קשר ונשמח לעזור לך למצוא את ההצעה המושלמת", "Contact us and we'll be happy to help you find the perfect offer")}
          </p>
          <Link href="/#contact">
            <Button className="bg-primary hover:bg-primary/90 text-white">
              {t("צור קשר", "Contact Us")}
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
