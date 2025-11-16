import { useLanguage } from "@/contexts/LanguageContext";
import { Instagram, Heart, MessageCircle } from "lucide-react";
import { Button } from "./ui/button";

export function InstagramFeed() {
  const { t } = useLanguage();

  // Mock Instagram posts
  const posts = [
    {
      id: 1,
      image: "/images/room1.jpg",
      likes: 342,
      comments: 28,
      caption: t("חדר סופריור עם נוף מדהים", "Superior room with amazing view")
    },
    {
      id: 2,
      image: "/images/lobby.jpg",
      likes: 521,
      comments: 45,
      caption: t("הלובי המעוצב שלנו", "Our designed lobby")
    },
    {
      id: 3,
      image: "/images/room2.jpg",
      likes: 289,
      comments: 19,
      caption: t("חדר דלוקס מפנק", "Luxurious deluxe room")
    },
    {
      id: 4,
      image: "/images/view.jpg",
      likes: 678,
      comments: 62,
      caption: t("נוף מרהיב של תל אביב", "Stunning view of Tel Aviv")
    },
    {
      id: 5,
      image: "/images/corridor.jpg",
      likes: 198,
      comments: 15,
      caption: t("מסדרונות מעוצבים", "Designed corridors")
    },
    {
      id: 6,
      image: "/images/room3.jpg",
      likes: 445,
      comments: 38,
      caption: t("חדר אקזקיוטיב יוקרתי", "Luxury executive room")
    }
  ];

  return (
    <div className="space-y-8">
      {/* Instagram Header */}
      <div className="text-center">
        <div className="flex items-center justify-center gap-3 mb-4">
          <Instagram className="w-8 h-8 text-primary" />
          <h3 className="text-2xl font-bold">@scarlethotel_tlv</h3>
        </div>
        <p className="text-muted-foreground mb-6">
          {t("עקבו אחרינו באינסטגרם לעדכונים ותמונות מהמלון", "Follow us on Instagram for updates and hotel photos")}
        </p>
        <Button asChild variant="default" size="lg">
          <a 
            href="https://instagram.com/scarlethotel_tlv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2"
          >
            <Instagram className="w-5 h-5" />
            {t("עקבו אחרינו", "Follow Us")}
          </a>
        </Button>
      </div>

      {/* Instagram Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {posts.map((post) => (
          <a
            key={post.id}
            href="https://instagram.com/scarlethotel_tlv"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative aspect-square overflow-hidden rounded-lg bg-secondary/20"
          >
            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
            />
            {/* Overlay on hover */}
            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white space-y-2">
                <div className="flex items-center justify-center gap-6">
                  <div className="flex items-center gap-2">
                    <Heart className="w-5 h-5 fill-white" />
                    <span className="font-semibold">{post.likes}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <MessageCircle className="w-5 h-5" />
                    <span className="font-semibold">{post.comments}</span>
                  </div>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>

      {/* Social Stats */}
      <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">12.5K</div>
          <div className="text-sm text-muted-foreground">{t("עוקבים", "Followers")}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">856</div>
          <div className="text-sm text-muted-foreground">{t("פוסטים", "Posts")}</div>
        </div>
        <div className="text-center">
          <div className="text-3xl font-bold text-primary">4.8</div>
          <div className="text-sm text-muted-foreground">{t("דירוג ממוצע", "Avg Rating")}</div>
        </div>
      </div>
    </div>
  );
}
