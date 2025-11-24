import { useState, useRef, useEffect } from "react";
import { useLanguage } from "@/contexts/LanguageContext";
import { MessageCircle, X, Send, Bot } from "lucide-react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

interface Message {
  id: number;
  text: string;
  sender: "user" | "bot";
  timestamp: Date;
}

export function AIChatbot() {
  const { t, language } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      setMessages([
        {
          id: Date.now(),
          text: t(
            "שלום! אני העוזר הדיגיטלי של מלון Scarlet. איך אוכל לעזור לך היום?",
            "Hello! I'm the Scarlet Hotel digital assistant. How can I help you today?"
          ),
          sender: "bot",
          timestamp: new Date(),
        },
      ]);
    }
  }, [isOpen, t]);

  const getFAQResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    
    // Hebrew responses
    if (language === "he") {
      if (msg.includes("שעות") || msg.includes("צ'ק אין") || msg.includes("check in")) {
        return "שעות הצ'ק-אין: 15:00, שעות הצ'ק-אאוט: 11:00. ניתן לבקש צ'ק-אין מוקדם או צ'ק-אאוט מאוחר בכפוף לזמינות.";
      }
      if (msg.includes("חניה") || msg.includes("parking")) {
        return "יש לנו חניה פרטית תת-קרקעית במחיר של 50 ₪ ללילה. מומלץ להזמין מראש.";
      }
      if (msg.includes("ארוחת בוקר") || msg.includes("breakfast")) {
        return "ארוחת בוקר בופה עשירה מוגשת בין 07:00-11:00. המחיר: 65 ₪ לאדם.";
      }
      if (msg.includes("wifi") || msg.includes("אינטרנט")) {
        return "WiFi מהיר וחינמי זמין בכל רחבי המלון, כולל בחדרים.";
      }
      if (msg.includes("חיות מחמד") || msg.includes("כלב") || msg.includes("חתול") || msg.includes("pet")) {
        return "אנו מקבלים חיות מחמד קטנות (עד 8 ק\"ג) בתוספת תשלום של 100 ₪ ללילה.";
      }
      if (msg.includes("ביטול") || msg.includes("cancel")) {
        return "ניתן לבטל הזמנה ללא עלות עד 48 שעות לפני מועד ההגעה. ביטול מאוחר יותר יחויב בעלות של לילה אחד.";
      }
      if (msg.includes("חוף") || msg.includes("ים") || msg.includes("beach")) {
        return "המלון נמצא במרחק הליכה של 10 דקות מחוף הים של תל אביב.";
      }
      if (msg.includes("שדה תעופה") || msg.includes("airport")) {
        return "המרחק משדה התעופה בן גוריון הוא כ-20 ק\"מ (30-40 דקות נסיעה). אנו מציעים שירות הסעות במחיר של 150 ₪.";
      }
      if (msg.includes("מחיר") || msg.includes("price") || msg.includes("כמה עולה")) {
        return "המחירים משתנים בהתאם לעונה ולסוג החדר. חדר סטנדרט מתחיל מ-450 ₪ ללילה. לחץ על 'הזמן עכשיו' לבדיקת מחירים מדויקים.";
      }
      if (msg.includes("שירותים") || msg.includes("מתקנים") || msg.includes("amenities")) {
        return "המלון כולל: WiFi חינמי, מיזוג אוויר, טלוויזיה, מקלחת, מייבש שיער, כספת, מיני בר, שירות חדרים 24/7, ושירות קונסיירז'.";
      }
      return "מצטער, אני לא בטוח שהבנתי. תוכל לנסח את השאלה אחרת? או לחץ על כפתור WhatsApp לשיחה עם נציג אנושי.";
    }
    
    // English responses
    if (msg.includes("hours") || msg.includes("check in") || msg.includes("check out")) {
      return "Check-in: 3:00 PM, Check-out: 11:00 AM. Early check-in or late check-out available upon request.";
    }
    if (msg.includes("parking")) {
      return "We have underground private parking for 50 ₪ per night. Advance booking recommended.";
    }
    if (msg.includes("breakfast")) {
      return "Rich buffet breakfast served 7:00 AM - 11:00 AM. Price: 65 ₪ per person.";
    }
    if (msg.includes("wifi") || msg.includes("internet")) {
      return "Free high-speed WiFi available throughout the hotel, including in rooms.";
    }
    if (msg.includes("pet") || msg.includes("dog") || msg.includes("cat")) {
      return "We accept small pets (up to 8 kg) for an additional fee of 100 ₪ per night.";
    }
    if (msg.includes("cancel")) {
      return "Free cancellation up to 48 hours before arrival. Later cancellations charged for one night.";
    }
    if (msg.includes("beach") || msg.includes("sea")) {
      return "The hotel is a 10-minute walk from Tel Aviv beach.";
    }
    if (msg.includes("airport")) {
      return "Ben Gurion Airport is 20 km away (30-40 min drive). We offer shuttle service for 150 ₪.";
    }
    if (msg.includes("price") || msg.includes("cost") || msg.includes("how much")) {
      return "Prices vary by season and room type. Standard rooms start from 450 ₪ per night. Click 'Book Now' for exact pricing.";
    }
    if (msg.includes("amenities") || msg.includes("facilities")) {
      return "Hotel amenities: Free WiFi, A/C, TV, shower, hairdryer, safe, minibar, 24/7 room service, and concierge.";
    }
    
    return "I'm sorry, I didn't quite understand. Could you rephrase? Or click the WhatsApp button to chat with a human representative.";
  };

  const handleSend = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");

    // Simulate bot typing delay
    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getFAQResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 800);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-24 right-6 z-40 bg-primary text-primary-foreground rounded-full p-4 shadow-lg hover:scale-110 transition-transform duration-200 group relative"
          aria-label={t("פתח צ'אט", "Open chat")}
          title={t("צ'אט עם עוזר AI", "AI Assistant Chat")}
        >
          <span className="absolute bottom-full right-0 mb-2 px-3 py-1 bg-gray-900 text-white text-sm rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
            {t("צ'אט AI", "AI Chat")}
          </span>
          <MessageCircle className="w-6 h-6" />
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-background border border-border rounded-lg shadow-2xl flex flex-col h-[32rem]">
          {/* Chat Header */}
          <div className="bg-primary text-primary-foreground p-4 rounded-t-lg flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Bot className="w-6 h-6" />
              <div>
                <h3 className="font-semibold">Scarlet AI Assistant</h3>
                <p className="text-xs opacity-90">{t("מקוון", "Online")}</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="hover:bg-primary-foreground/20 rounded p-1 transition-colors"
              aria-label={t("סגור צ'אט", "Close chat")}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-secondary/10">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg p-3 ${
                    message.sender === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-background border border-border"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs opacity-60 mt-1">
                    {message.timestamp.toLocaleTimeString(language === "he" ? "he-IL" : "en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                    })}
                  </p>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-4 border-t border-border bg-background rounded-b-lg">
            <div className="flex gap-2">
              <Input
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder={t("הקלד הודעה...", "Type a message...")}
                className="flex-1"
              />
              <Button onClick={handleSend} size="icon">
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-muted-foreground mt-2 text-center">
              {t("מופעל על ידי AI • זמין 24/7", "Powered by AI • Available 24/7")}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
