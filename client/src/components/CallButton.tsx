import { Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CallButton() {
  const phoneNumber = "052-473-4940";
  const telLink = `tel:${phoneNumber}`;

  const handleClick = () => {
    window.location.href = telLink;
  };

  return (
    <div className="fixed bottom-6 left-6 z-50">
      <Button
        onClick={handleClick}
        size="lg"
        className="h-16 w-16 rounded-full bg-primary hover:bg-primary/90 shadow-2xl hover:shadow-primary/50 transition-all"
        title="התקשר עכשיו"
      >
        <Phone className="w-7 h-7 text-white" />
      </Button>
    </div>
  );
}
