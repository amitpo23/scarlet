import { useState } from "react";
import { MapView } from "@/components/Map";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Navigation, Clock } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface Attraction {
  id: string;
  name: { he: string; en: string };
  description: { he: string; en: string };
  category: { he: string; en: string };
  lat: number;
  lng: number;
  distance: string;
  walkTime: string;
}

export function AttractionsMap() {
  const { t, language } = useLanguage();
  const [selectedAttraction, setSelectedAttraction] = useState<Attraction | null>(null);

  // Hotel location
  const hotelLocation = { lat: 32.0809, lng: 34.7749 };

  const attractions: Attraction[] = [
    {
      id: "gordon-beach",
      name: { he: "חוף גורדון", en: "Gordon Beach" },
      description: { 
        he: "חוף פופולרי עם מתקני ספורט ומסעדות", 
        en: "Popular beach with sports facilities and restaurants" 
      },
      category: { he: "חוף", en: "Beach" },
      lat: 32.0789,
      lng: 34.7698,
      distance: "500m",
      walkTime: "5 min",
    },
    {
      id: "dizengoff-square",
      name: { he: "כיכר דיזנגוף", en: "Dizengoff Square" },
      description: { 
        he: "כיכר אייקונית עם מזרקה צבעונית ובתי קפה", 
        en: "Iconic square with colorful fountain and cafes" 
      },
      category: { he: "ציון דרך", en: "Landmark" },
      lat: 32.0850,
      lng: 34.7747,
      distance: "800m",
      walkTime: "10 min",
    },
    {
      id: "dizengoff-center",
      name: { he: "דיזנגוף סנטר", en: "Dizengoff Center" },
      description: { 
        he: "קניון גדול עם חנויות, מסעדות ובידור", 
        en: "Large shopping mall with stores, restaurants and entertainment" 
      },
      category: { he: "קניות", en: "Shopping" },
      lat: 32.0862,
      lng: 34.7752,
      distance: "1.2km",
      walkTime: "15 min",
    },
    {
      id: "carmel-market",
      name: { he: "שוק הכרמל", en: "Carmel Market" },
      description: { 
        he: "שוק תוסס עם מזון טרי, בגדים ומוצרים מקומיים", 
        en: "Vibrant market with fresh food, clothing and local products" 
      },
      category: { he: "שוק", en: "Market" },
      lat: 32.0741,
      lng: 34.7692,
      distance: "1.5km",
      walkTime: "18 min",
    },
    {
      id: "tel-aviv-museum",
      name: { he: "מוזיאון תל אביב לאמנות", en: "Tel Aviv Museum of Art" },
      description: { 
        he: "מוזיאון אמנות מוביל עם אוספים ישראליים ובינלאומיים", 
        en: "Leading art museum with Israeli and international collections" 
      },
      category: { he: "תרבות", en: "Culture" },
      lat: 32.0777,
      lng: 34.7838,
      distance: "1.8km",
      walkTime: "22 min",
    },
    {
      id: "rothschild-blvd",
      name: { he: "שדרות רוטשילד", en: "Rothschild Boulevard" },
      description: { 
        he: "שדרה מפורסמת עם אדריכלות באוהאוס ובתי קפה", 
        en: "Famous boulevard with Bauhaus architecture and cafes" 
      },
      category: { he: "אדריכלות", en: "Architecture" },
      lat: 32.0644,
      lng: 34.7713,
      distance: "2km",
      walkTime: "25 min",
    },
    {
      id: "old-jaffa",
      name: { he: "יפו העתיקה", en: "Old Jaffa" },
      description: { 
        he: "עיר נמל עתיקה עם גלריות, מסעדות ונוף לים", 
        en: "Ancient port city with galleries, restaurants and sea views" 
      },
      category: { he: "היסטוריה", en: "History" },
      lat: 32.0543,
      lng: 34.7516,
      distance: "4km",
      walkTime: "10 min drive",
    },
    {
      id: "sarona-market",
      name: { he: "שוק סרונה", en: "Sarona Market" },
      description: { 
        he: "שוק אוכל גורמה עם מסעדות ודוכני אוכל", 
        en: "Gourmet food market with restaurants and food stalls" 
      },
      category: { he: "אוכל", en: "Food" },
      lat: 32.0728,
      lng: 34.7878,
      distance: "2.5km",
      walkTime: "30 min",
    },
  ];

  const handleMapReady = (map: google.maps.Map) => {
    // Add hotel marker (red)
    const hotelMarker = new window.google.maps.Marker({
      position: hotelLocation,
      map: map,
      title: "Scarlet Hotel",
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 12,
        fillColor: "#8B1538",
        fillOpacity: 1,
        strokeColor: "#ffffff",
        strokeWeight: 3,
      },
      zIndex: 1000,
    });

    // Add info window for hotel
    const hotelInfoWindow = new window.google.maps.InfoWindow({
      content: `<div style="padding: 8px;"><strong>Scarlet Hotel</strong></div>`,
    });
    hotelMarker.addListener("click", () => {
      hotelInfoWindow.open(map, hotelMarker);
    });

    // Add attraction markers (blue)
    attractions.forEach((attraction) => {
      const marker = new window.google.maps.Marker({
        position: { lat: attraction.lat, lng: attraction.lng },
        map: map,
        title: language === "he" ? attraction.name.he : attraction.name.en,
        icon: {
          path: window.google.maps.SymbolPath.CIRCLE,
          scale: 8,
          fillColor: "#4285F4",
          fillOpacity: 1,
          strokeColor: "#ffffff",
          strokeWeight: 2,
        },
      });

      const infoWindow = new window.google.maps.InfoWindow({
        content: `<div style="padding: 8px;"><strong>${language === "he" ? attraction.name.he : attraction.name.en}</strong></div>`,
      });

      marker.addListener("click", () => {
        setSelectedAttraction(attraction);
        map.panTo({ lat: attraction.lat, lng: attraction.lng });
        infoWindow.open(map, marker);
      });
    });

    // Fit bounds to show all markers
    const bounds = new window.google.maps.LatLngBounds();
    bounds.extend(hotelLocation);
    attractions.forEach((attraction) => {
      bounds.extend({ lat: attraction.lat, lng: attraction.lng });
    });
    map.fitBounds(bounds);
  };

  return (
    <div className="space-y-6">
      <div className="grid md:grid-cols-3 gap-6">
        {/* Attractions List */}
        <div className="md:col-span-1 space-y-3 max-h-[600px] overflow-y-auto">
          {attractions.map((attraction) => (
            <Card
              key={attraction.id}
              className={`cursor-pointer transition-all hover:shadow-lg ${
                selectedAttraction?.id === attraction.id ? "ring-2 ring-primary" : ""
              }`}
              onClick={() => setSelectedAttraction(attraction)}
            >
              <CardContent className="p-4">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div className="flex-1">
                    <h3 className="font-bold text-sm mb-1">
                      {language === "he" ? attraction.name.he : attraction.name.en}
                    </h3>
                    <p className="text-xs text-muted-foreground mb-2">
                      {language === "he" ? attraction.description.he : attraction.description.en}
                    </p>
                    <div className="flex items-center gap-3 text-xs">
                      <span className="flex items-center gap-1 text-primary">
                        <Navigation className="w-3 h-3" />
                        {attraction.distance}
                      </span>
                      <span className="flex items-center gap-1 text-muted-foreground">
                        <Clock className="w-3 h-3" />
                        {attraction.walkTime}
                      </span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Map */}
        <div className="md:col-span-2 h-[600px] rounded-lg overflow-hidden shadow-lg">
          <MapView onMapReady={handleMapReady} />
        </div>
      </div>

      {/* Selected Attraction Details */}
      {selectedAttraction && (
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="p-6">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {language === "he" ? selectedAttraction.name.he : selectedAttraction.name.en}
                </h3>
                <p className="mb-4 opacity-90">
                  {language === "he" ? selectedAttraction.description.he : selectedAttraction.description.en}
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-2">
                    <Navigation className="w-5 h-5" />
                    <span className="font-semibold">{selectedAttraction.distance}</span>
                    <span className="opacity-75">{t("מהמלון", "from hotel")}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5" />
                    <span className="font-semibold">{selectedAttraction.walkTime}</span>
                    <span className="opacity-75">{t("הליכה", "walk")}</span>
                  </div>
                </div>
              </div>
              <span className="bg-white/20 px-3 py-1 rounded-full text-sm">
                {language === "he" ? selectedAttraction.category.he : selectedAttraction.category.en}
              </span>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
