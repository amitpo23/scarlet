import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X, ChevronLeft, ChevronRight, Maximize2 } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

interface GalleryImage {
  src: string;
  category: { he: string; en: string };
  title: { he: string; en: string };
}

export function PhotoGallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>("all");
  const { t, language } = useLanguage();

  const images: GalleryImage[] = [
    // Existing hotel images
    { src: "/images/005.webp", category: { he: "חדרים", en: "Rooms" }, title: { he: "חדר יוקרה אדום", en: "Luxury Red Room" } },
    { src: "/images/004.webp", category: { he: "חדרים", en: "Rooms" }, title: { he: "חדר אפרסק חמים", en: "Warm Peach Room" } },
    { src: "/images/003.webp", category: { he: "חדרים", en: "Rooms" }, title: { he: "חדר ירוק מודרני", en: "Modern Green Room" } },
    { src: "/images/002.webp", category: { he: "חדרים", en: "Rooms" }, title: { he: "חדר אלגנטי", en: "Elegant Room" } },
    { src: "/images/001.webp", category: { he: "מסדרון", en: "Hallway" }, title: { he: "מסדרון מואר", en: "Lit Hallway" } },
    { src: "/images/006.webp", category: { he: "לובי", en: "Lobby" }, title: { he: "אזור קבלה", en: "Reception Area" } },
    { src: "/images/007.webp", category: { he: "חדרים", en: "Rooms" }, title: { he: "חדר מעוצב", en: "Designed Room" } },
    
    // New professional images
    { src: "/gallery-lobby1.jpg", category: { he: "לובי", en: "Lobby" }, title: { he: "לובי בוטיק מודרני", en: "Modern Boutique Lobby" } },
    { src: "/gallery-lobby2.jpg", category: { he: "לובי", en: "Lobby" }, title: { he: "אזור קבלה יוקרתי", en: "Luxury Reception" } },
    { src: "/gallery-lobby3.jpg", category: { he: "לובי", en: "Lobby" }, title: { he: "לובי עם תאורה טבעית", en: "Naturally Lit Lobby" } },
    { src: "/gallery-room-view.jpg", category: { he: "נוף", en: "Views" }, title: { he: "חדר עם מרפסת ונוף לים", en: "Room with Balcony & Sea View" } },
    { src: "/gallery-balcony.jpg", category: { he: "נוף", en: "Views" }, title: { he: "נוף מהמרפסת", en: "Balcony View" } },
  ];

  const categories = [
    { id: "all", he: "הכל", en: "All" },
    { id: "חדרים", he: "חדרים", en: "Rooms" },
    { id: "לובי", he: "לובי", en: "Lobby" },
    { id: "נוף", he: "נוף", en: "Views" },
    { id: "מסדרון", he: "מסדרון", en: "Hallway" },
  ];

  const filteredImages = filter === "all" 
    ? images 
    : images.filter(img => (language === "he" ? img.category.he : img.category.en) === filter);

  const handlePrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? filteredImages.length - 1 : selectedImage - 1);
    }
  };

  const handleNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === filteredImages.length - 1 ? 0 : selectedImage + 1);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowLeft") handlePrevious();
    if (e.key === "ArrowRight") handleNext();
    if (e.key === "Escape") setSelectedImage(null);
  };

  return (
    <div className="space-y-8">
      {/* Category Filter */}
      <div className="flex flex-wrap justify-center gap-3">
        {categories.map((cat) => (
          <Button
            key={cat.id}
            variant={filter === cat.id ? "default" : "outline"}
            onClick={() => setFilter(cat.id)}
            className={filter === cat.id ? "bg-primary" : ""}
          >
            {language === "he" ? cat.he : cat.en}
          </Button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredImages.map((image, idx) => (
          <div
            key={idx}
            className="relative group cursor-pointer overflow-hidden rounded-lg aspect-square bg-muted"
            onClick={() => setSelectedImage(idx)}
          >
            <img
              src={image.src}
              alt={language === "he" ? image.title.he : image.title.en}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
              <Maximize2 className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-3 translate-y-full group-hover:translate-y-0 transition-transform">
              <p className="text-white text-sm font-semibold">
                {language === "he" ? image.title.he : image.title.en}
              </p>
              <p className="text-white/80 text-xs">
                {language === "he" ? image.category.he : image.category.en}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      <Dialog open={selectedImage !== null} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent 
          className="max-w-7xl w-full h-[90vh] p-0 bg-black/95"
          onKeyDown={handleKeyDown}
        >
          {selectedImage !== null && (
            <div className="relative w-full h-full flex items-center justify-center">
              {/* Close Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 z-50 text-white hover:bg-white/20"
                onClick={() => setSelectedImage(null)}
              >
                <X className="w-6 h-6" />
              </Button>

              {/* Previous Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={handlePrevious}
              >
                <ChevronLeft className="w-8 h-8" />
              </Button>

              {/* Image */}
              <div className="flex flex-col items-center justify-center w-full h-full p-16">
                <img
                  src={filteredImages[selectedImage].src}
                  alt={language === "he" ? filteredImages[selectedImage].title.he : filteredImages[selectedImage].title.en}
                  className="max-w-full max-h-full object-contain"
                />
                <div className="mt-6 text-center">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    {language === "he" ? filteredImages[selectedImage].title.he : filteredImages[selectedImage].title.en}
                  </h3>
                  <p className="text-white/70">
                    {language === "he" ? filteredImages[selectedImage].category.he : filteredImages[selectedImage].category.en}
                  </p>
                  <p className="text-white/50 text-sm mt-2">
                    {selectedImage + 1} / {filteredImages.length}
                  </p>
                </div>
              </div>

              {/* Next Button */}
              <Button
                variant="ghost"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-50 text-white hover:bg-white/20"
                onClick={handleNext}
              >
                <ChevronRight className="w-8 h-8" />
              </Button>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
