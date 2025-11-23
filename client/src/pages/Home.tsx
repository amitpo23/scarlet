import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Wifi, Coffee, Car, Wind, Shield, Users } from "lucide-react";
import { Languages, Menu, X } from "lucide-react";
import { APP_LOGO } from "@/const";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { BookingModal } from "@/components/BookingModal";
import { WeatherWidget } from "@/components/WeatherWidget";
import { AttractionsMap } from "@/components/AttractionsMap";
import { PhotoGallery } from "@/components/PhotoGallery";
import { GuestReviews } from "@/components/GuestReviews";
import { FAQ } from "@/components/FAQ";
import { WhatsAppWidget } from "@/components/WhatsAppWidget";
import { SpecialOffers } from "@/components/SpecialOffers";
import { InstagramFeed } from "@/components/InstagramFeed";
import { AIChatbot } from "@/components/AIChatbot";
import { BackToTop } from "@/components/BackToTop";
import { ScrollProgress } from "@/components/ScrollProgress";

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
      {/* Scroll Progress */}
      <ScrollProgress />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm border-b border-gray-100" role="navigation" aria-label={t("ניווט ראשי", "Main navigation")}>
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <img src={APP_LOGO} alt={t("לוגו מלון Scarlet", "Scarlet Hotel Logo")} className="h-12 md:h-14" />
          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 hover:bg-secondary/20 rounded transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={t("תפריט", "Menu")}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex gap-8 text-sm" role="menubar">
             <a href="#about" className="text-gray-700 hover:text-primary transition-colors">{t("אודות", "About")}</a>
            <a href="#rooms" className="text-gray-700 hover:text-primary transition-colors">{t("חדרים", "Rooms")}</a>
            <a href="#offers" className="text-gray-700 hover:text-primary transition-colors">{t("הצעות", "Offers")}</a>
            <a href="#amenities" className="text-gray-700 hover:text-primary transition-colors">{t("שירותים", "Amenities")}</a>
            <a href="#reviews" className="text-gray-700 hover:text-primary transition-colors">{t("חווות דעת", "Reviews")}</a>
            <a href="#gallery" className="text-gray-700 hover:text-primary transition-colors">{t("גלריה", "Gallery")}</a>
            <a href="#faq" className="text-gray-700 hover:text-primary transition-colors">{t("שאלות", "FAQ")}</a>
            <a href="#location" className="text-gray-700 hover:text-primary transition-colors">{t("מיקום", "Location")}</a>
            <a href="#contact" className="text-gray-700 hover:text-primary transition-colors">{t("צור קשר", "Contact")}</a>
          </div>
          <div className="flex items-center gap-4" role="toolbar" aria-label={t("כפתורי פעולה", "Action buttons")}>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setLanguage(language === "he" ? "en" : "he")}
              className="flex items-center gap-2"
            >
              <Languages className="w-4 h-4" />
              {language === "he" ? "EN" : "עב"}
            </Button>
            <Button size="sm" className="bg-primary hover:bg-primary/90 text-white" onClick={() => openBooking()}>
              {t("הזמן עכשיו", "Book Now")}
            </Button>
          </div>
        </div>
        
        {/* Mobile Menu Dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-gray-100 shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              <a href="#about" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("אודות", "About")}</a>
              <a href="#rooms" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("חדרים", "Rooms")}</a>
              <a href="#offers" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("הצעות", "Offers")}</a>
              <a href="#amenities" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("שירותים", "Amenities")}</a>
              <a href="#reviews" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("חוות דעת", "Reviews")}</a>
              <a href="#gallery" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("גלריה", "Gallery")}</a>
              <a href="#faq" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("שאלות", "FAQ")}</a>
              <a href="#location" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("מיקום", "Location")}</a>
              <a href="#contact" className="hover:text-primary transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>{t("צור קשר", "Contact")}</a>
              <div className="flex gap-2 pt-2 border-t border-border">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setLanguage(language === "he" ? "en" : "he")}
                  className="flex items-center gap-2 flex-1"
                >
                  <Languages className="w-4 h-4" />
                  {language === "he" ? "EN" : "עב"}
                </Button>
                <Button className="bg-primary hover:bg-primary/90 flex-1" onClick={() => { openBooking(); setMobileMenuOpen(false); }}>
                  {t("הזמן עכשיו", "Book Now")}
                </Button>
              </div>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden bg-white">
        <div 
          className="absolute inset-0 bg-cover bg-center transition-all duration-1000 opacity-20"
          style={{ backgroundImage: `url(${galleryImages[activeImage]})` }}
        >
        </div>
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
          <h1 className="text-7xl md:text-8xl font-light mb-6 text-gray-900 animate-fade-in tracking-wide">
            SCARLET
          </h1>
          <div className="w-24 h-px bg-primary mx-auto mb-6"></div>
          <p className="text-xl md:text-2xl mb-12 text-gray-600 font-light">
            {t("חוויית אירוח בוטיקית בלב תל אביב", "Boutique Hospitality in the Heart of Tel Aviv")}
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6 text-lg" onClick={() => openBooking()}>
            {t("הזמן עכשיו", "Book Now")}
          </Button>
          {/* Weather Widget */}
          <div className="mt-16">
            <WeatherWidget />
          </div>
        </div>
        {/* Image indicators */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {galleryImages.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setActiveImage(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === activeImage ? "bg-primary w-8" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-5xl font-light mb-8 text-gray-900">
                {t("אודות המלון", "About the Hotel")}
              </h2>
              <div className="w-16 h-px bg-primary mb-8"></div>
              <div className="space-y-6 text-base text-gray-700 leading-relaxed font-light">
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
              <div className="mt-12 flex gap-12">
                <div className="text-center">
                  <div className="text-5xl font-light text-primary mb-2">8.9</div>
                  <div className="text-sm text-gray-600">
                    {t("דירוג מצוין", "Excellent Rating")}
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-5xl font-light text-primary mb-2">9.4</div>
                  <div className="text-sm text-gray-600">
                    {t("מיקום מעולה", "Perfect Location")}
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-[600px]">
              <div className="absolute top-0 right-0 w-3/4 h-2/3 overflow-hidden">
                <img 
                  src="/images/001.webp" 
                  alt="Hotel entrance" 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute bottom-0 left-0 w-3/4 h-2/3 overflow-hidden shadow-lg">
                <img 
                  src="/images/009.webp" 
                  alt="Hotel interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Rooms Section */}
      <section id="rooms" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center text-gray-900">
            {t("החדרים שלנו", "Rooms & Suites")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-20 text-base font-light">
            {t("בחר את החדר המושלם עבורך", "Choose the perfect room for you")}
          </p>
          <div className="grid md:grid-cols-2 gap-12">
            {rooms.map((room, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative h-96 overflow-hidden mb-6">
                  <img 
                    src={room.image} 
                    alt={room.name} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-light mb-3 text-gray-900">{room.name}</h3>
                  <p className="text-gray-600 mb-6 font-light leading-relaxed">{room.description}</p>
                  <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white transition-colors" onClick={() => openBooking(idx === 0 ? "economy" : idx === 1 ? "classic" : idx === 2 ? "classic_balcony" : "deluxe")}>
                    {t("הזמן חדר", "Book Room")}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers Section */}
      <section id="offers" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center text-gray-900">
            {t("הצעות מיוחדות", "Special Offers")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-20 text-base font-light">
            {t("חסכו עם המבצעים והחבילות המיוחדות שלנו", "Save with our special deals and packages")}
          </p>
          <SpecialOffers />
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center text-gray-900">
            {t("שירותים ומתקנים", "Amenities & Facilities")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-20 text-base font-light">
            {t("כל מה שאתה צריך לשהייה מושלמת", "Everything you need for a perfect stay")}
          </p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div key={idx} className="text-center p-8 hover:bg-gray-50 transition-colors">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-light text-lg text-gray-900">{amenity.text}</h3>
                </div>
              );
            })}
          </div>
          <div className="mt-20 bg-gray-50 p-12 text-center">
            <h3 className="text-2xl font-light mb-8 text-gray-900">
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

      {/* Guest Reviews Section */}
      <section id="reviews" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center text-gray-900">
            {t("חווות דעת אורחים", "Guest Reviews")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-20 text-base font-light">
            {t("מה האורחים שלנו אומרים עלינו", "What our guests say about us")}
          </p>
          <GuestReviews />
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center text-gray-900">
            {t("גלריה", "Gallery")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-20 text-base font-light">
            {t("גלה את המלון שלנו בתמונות מקצועיות", "Explore our hotel through professional photography")}
          </p>
          <PhotoGallery />
        </div>
      </section>

      {/* Instagram Feed Section */}
      <section id="instagram" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center text-gray-900">
            {t("האינסטגרם שלנו", "Our Instagram")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-20 text-base font-light">
            {t("הצטרפו לקהילה שלנו וראו מה קורה במלון", "Join our community and see what's happening at the hotel")}
          </p>
          <InstagramFeed />
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-32 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center text-gray-900">
            {t("שאלות נפוצות", "Frequently Asked Questions")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-20 text-base font-light">
            {t("מצא תשובות לשאלות הנפוצות ביותר", "Find answers to the most common questions")}
          </p>
          <FAQ />
        </div>
      </section>

      {/* Location Section */}
      <section id="location" className="py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light mb-4 text-center text-gray-900">
            {t("מיקום ואטרקציות", "Location & Attractions")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-center text-gray-600 mb-20 text-base font-light">
            {t("גלה את המקומות המעניינים ביותר באזור", "Discover the most interesting places in the area")}
          </p>
          
          {/* Hotel Address */}
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-3 bg-white px-8 py-6 shadow-sm">
              <MapPin className="w-6 h-6 text-primary" />
              <div className={language === "he" ? "text-right" : "text-left"}>
                <h3 className="font-light text-xl text-gray-900">{t("מלון Scarlet", "Scarlet Hotel")}</h3>
                <p className="text-gray-600">17 J. L. Gordon Street, {t("תל אביב", "Tel Aviv")}</p>
              </div>
            </div>
          </div>

          {/* Interactive Attractions Map */}
          <AttractionsMap />
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-5xl font-light mb-4 text-gray-900">
            {t("צור קשר", "Contact Us")}
          </h2>
          <div className="w-16 h-px bg-primary mx-auto mb-4"></div>
          <p className="text-base mb-16 text-gray-600 font-light">
            {t("נשמח לעמוד לשירותכם", "We're here to help")}
          </p>
          <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-12">
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-4">
              <Phone className="w-5 h-5 text-primary" />
              <span className="text-gray-700">+972-3-123-4567</span>
            </div>
            <div className="flex items-center gap-3 bg-gray-50 px-6 py-4">
              <Mail className="w-5 h-5 text-primary" />
              <span className="text-gray-700">info@scarlethotel.co.il</span>
            </div>
          </div>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-10 py-6" onClick={() => openBooking()}>
            {t("הזמן עכשיו", "Book Now")}
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-16 border-t border-gray-800">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-light mb-3 text-white">Scarlet Hotel Tel Aviv</h3>
          <p className="text-sm text-gray-400 mb-8 font-light">
            {t("מלון בוטיק בלב תל אביב", "A boutique hotel in the heart of Tel Aviv")}
          </p>
          <div className="mt-8 space-y-4">
            <div className="flex justify-center gap-6 text-sm">
              <a href="/accessibility" className="text-gray-400 hover:text-primary transition-colors">
                {t("הצהרת נגישות", "Accessibility")}
              </a>
              <span className="text-gray-600">|</span>
              <a href="/privacy" className="text-gray-400 hover:text-primary transition-colors">
                {t("מדיניות פריטיות", "Privacy Policy")}
              </a>
              <span className="text-gray-600">|</span>
              <a href="/terms" className="text-gray-400 hover:text-primary transition-colors">
                {t("תנאי שימוש", "Terms of Service")}
              </a>
            </div>
            <div className="text-xs text-gray-500">
              © 2025 Scarlet Hotel. All rights reserved.
            </div>
          </div>
        </div>
      </footer>

      {/* Booking Modal */}
      <BookingModal open={bookingOpen} onOpenChange={setBookingOpen} />
      <WhatsAppWidget />
      <AIChatbot />
      <BackToTop />
    </div>
  );
}
