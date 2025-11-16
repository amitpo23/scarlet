import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail, Wifi, Coffee, Car, Wind, Shield, Users } from "lucide-react";
import { useState, useEffect } from "react";

export default function Home() {
  const [activeImage, setActiveImage] = useState(0);

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
      name: "חדר אקונומי זוגי",
      nameEn: "Economy Double Room",
      image: "/images/004.webp",
      description: "חדר נעים ומעוצב בקפידה עם כל השירותים הדרושים לשהייה נוחה",
    },
    {
      name: "חדר קלאסיק זוגי",
      nameEn: "Classic Double Room",
      image: "/images/003.webp",
      description: "חדר מרווח עם עיצוב ייחודי ואווירה חמימה",
    },
    {
      name: "חדר קלאסיק זוגי עם מרפסת",
      nameEn: "Classic Double Room with Balcony",
      image: "/images/004.webp",
      description: "חדר קלאסי עם מרפסת פרטית ונוף לעיר",
    },
    {
      name: "חדר דלוקס",
      nameEn: "Deluxe Room",
      image: "/images/005.webp",
      description: "חדר יוקרתי עם עיצוב נועז ומרשים בגוונים אדומים",
    },
  ];

  const amenities = [
    { icon: Wifi, text: "Wi-Fi חינם", textEn: "Free Wi-Fi" },
    { icon: Wind, text: "מיזוג אוויר", textEn: "Air Conditioning" },
    { icon: Coffee, text: "בר ומסעדה", textEn: "Bar & Restaurant" },
    { icon: Car, text: "חניה", textEn: "Parking" },
    { icon: Shield, text: "כספת בחדר", textEn: "In-room Safe" },
    { icon: Users, text: "שירות קונסיירז'", textEn: "Concierge Service" },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-primary">Scarlet Hotel</h1>
          <div className="hidden md:flex gap-8 text-sm">
            <a href="#about" className="hover:text-primary transition-colors">אודות</a>
            <a href="#rooms" className="hover:text-primary transition-colors">חדרים</a>
            <a href="#amenities" className="hover:text-primary transition-colors">שירותים</a>
            <a href="#location" className="hover:text-primary transition-colors">מיקום</a>
            <a href="#contact" className="hover:text-primary transition-colors">צור קשר</a>
          </div>
          <Button className="bg-primary hover:bg-primary/90">הזמן עכשיו</Button>
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
            חוויה בוטיקית ייחודית בלב תל אביב
          </p>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto opacity-90">
            A unique boutique experience in the heart of Tel Aviv
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8 py-6">
            גלה עוד
          </Button>
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
              <h2 className="text-5xl font-bold mb-6 text-foreground">אודות המלון</h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
                <p>
                  מלון Scarlet ממוקם במרכז תל אביב התוסס, ומציע חוויית אירוח בוטיקית ייחודית המשלבת עיצוב נועז עם נוחות מודרנית. המלון כולל גינה, טרסה ובר, ומעניק לאורחים חוויה בלתי נשכחת.
                </p>
                <p>
                  כל חדר במלון מעוצב בקפידה עם תשומת לב לפרטים הקטנים, ומציע מרפסת פרטית עם נוף לעיר. אנו מספקים שירותי קונסיירז' מקצועיים, אחסון מזוודות ואינטרנט אלחוטי חינם בכל רחבי המלון.
                </p>
                <p className="text-base italic">
                  The Scarlet Hotel is located in vibrant central Tel Aviv, offering a unique boutique hospitality experience that combines bold design with modern comfort. The hotel features a garden, terrace and bar, providing guests with an unforgettable experience.
                </p>
              </div>
              <div className="mt-8 flex gap-4">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">8.9</div>
                  <div className="text-sm text-muted-foreground">דירוג מצוין</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary">9.4</div>
                  <div className="text-sm text-muted-foreground">מיקום מעולה</div>
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
          <h2 className="text-5xl font-bold mb-4 text-center text-foreground">החדרים שלנו</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Our Rooms</p>
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
                  <h3 className="text-2xl font-bold mb-2">{room.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{room.nameEn}</p>
                  <p className="text-muted-foreground mb-6">{room.description}</p>
                  <Button className="w-full bg-primary hover:bg-primary/90">הזמן חדר</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Amenities Section */}
      <section id="amenities" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center text-foreground">שירותים ומתקנים</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Amenities & Facilities</p>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {amenities.map((amenity, idx) => {
              const Icon = amenity.icon;
              return (
                <div key={idx} className="text-center p-6 rounded-lg hover:bg-secondary/20 transition-colors">
                  <Icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-semibold text-lg mb-1">{amenity.text}</h3>
                  <p className="text-sm text-muted-foreground">{amenity.textEn}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-16 bg-accent text-accent-foreground rounded-lg p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">כל חדר כולל</h3>
            <p className="text-lg mb-2">Every room includes</p>
            <div className="grid md:grid-cols-2 gap-4 mt-8 text-right max-w-2xl mx-auto">
              <ul className="space-y-2">
                <li>• ארון בגדים מרווח</li>
                <li>• קומקום חשמלי</li>
                <li>• מקרר</li>
                <li>• כספת אישית</li>
              </ul>
              <ul className="space-y-2">
                <li>• טלוויזיה בעלת מסך שטוח</li>
                <li>• חדר רחצה פרטי עם מקלחת</li>
                <li>• מייבש שיער</li>
                <li>• מצעים ומגבות איכוטיים</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-bold mb-4 text-center text-foreground">גלריה</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Gallery</p>
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
          <h2 className="text-5xl font-bold mb-4 text-center text-foreground">מיקום</h2>
          <p className="text-center text-muted-foreground mb-16 text-lg">Location</p>
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <div className="flex items-start gap-4 mb-6">
                <MapPin className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-2">כתובת</h3>
                  <p className="text-muted-foreground">17 J. L. Gordon Street</p>
                  <p className="text-muted-foreground">תל אביב, 6343801</p>
                  <p className="text-muted-foreground">ישראל</p>
                </div>
              </div>
              <div className="space-y-4 text-muted-foreground">
                <h3 className="font-bold text-xl text-foreground mb-4">אטרקציות קרובות</h3>
                <p>• חוף גורדון - 5 דקות הליכה</p>
                <p>• כיכר דיזנגוף - 10 דקות הליכה</p>
                <p>• דיזנגוף סנטר - 15 דקות הליכה</p>
                <p>• נמל התעופה בן גוריון - 14 ק"מ</p>
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
          <h2 className="text-5xl font-bold mb-4">צור קשר</h2>
          <p className="text-lg mb-12 opacity-90">Contact Us</p>
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
          <Button size="lg" variant="secondary" className="text-lg px-8 py-6">
            הזמן עכשיו
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-accent text-accent-foreground py-12">
        <div className="container mx-auto px-6 text-center">
          <h3 className="text-2xl font-bold mb-4">Scarlet Hotel Tel Aviv</h3>
          <p className="text-sm opacity-80 mb-4">מלון בוטיק יוקרתי בלב תל אביב</p>
          <p className="text-sm opacity-80">A luxury boutique hotel in the heart of Tel Aviv</p>
          <div className="mt-8 text-xs opacity-60">
            © 2025 Scarlet Hotel. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
