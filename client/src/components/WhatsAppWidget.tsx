import { useState } from "react";
import { MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLanguage } from "@/contexts/LanguageContext";

export function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const { t, language } = useLanguage();

  // WhatsApp business number (replace with actual hotel number)
  const whatsappNumber = "972501234567"; // Format: country code + number without + or spaces
  
  const message = language === "he"
    ? "שלום! אני מעוניין/ת לקבל מידע נוסף על מלון Scarlet"
    : "Hello! I'm interested in learning more about Scarlet Hotel";

  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  const handleClick = () => {
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      {/* Floating WhatsApp Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isOpen && (
          <div className="mb-4 bg-white rounded-2xl shadow-2xl p-6 max-w-sm animate-in slide-in-from-bottom-4 fade-in">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">Scarlet Hotel</h3>
                  <p className="text-xs text-green-500">
                    {t("מקוון", "Online")}
                  </p>
                </div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                className="h-8 w-8"
                onClick={() => setIsOpen(false)}
              >
                <X className="w-4 h-4" />
              </Button>
            </div>
            
            <div className="bg-gray-100 rounded-lg p-4 mb-4">
              <p className="text-sm">
                {t(
                  "שלום! 👋 איך נוכל לעזור לך היום? שלח לנו הודעה ב-WhatsApp ונחזור אליך בהקדם!",
                  "Hello! 👋 How can we help you today? Send us a message on WhatsApp and we'll get back to you soon!"
                )}
              </p>
            </div>

            <Button
              onClick={handleClick}
              className="w-full bg-green-500 hover:bg-green-600 text-white"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              {t("שלח הודעה ב-WhatsApp", "Send WhatsApp Message")}
            </Button>
          </div>
        )}

        <Button
          onClick={() => setIsOpen(!isOpen)}
          size="lg"
          className="h-16 w-16 rounded-full bg-green-500 hover:bg-green-600 shadow-2xl hover:shadow-green-500/50 transition-all relative group"
          title={t("WhatsApp", "WhatsApp")}
        >
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {t("WhatsApp", "WhatsApp")}
          </span>
          {isOpen ? (
            <X className="w-7 h-7 text-white" />
          ) : (
            <MessageCircle className="w-7 h-7 text-white" />
          )}
        </Button>
      </div>
    </>
  );
}
