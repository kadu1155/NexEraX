import { MessageCircle, Phone } from "lucide-react";

const message = encodeURIComponent("Hello,\nI visited your website and would like to discuss my project.");

export function FloatingActions() {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a aria-label="Chat on WhatsApp" href={`https://wa.me/919923772005?text=${message}`} className="grid h-12 w-12 place-items-center rounded-xl bg-green-500 text-white shadow-soft">
        <MessageCircle className="h-6 w-6" />
      </a>
      <a aria-label="Call NexEra" href="tel:+919923772005" className="grid h-12 w-12 place-items-center rounded-xl bg-primary text-white shadow-soft">
        <Phone className="h-6 w-6" />
      </a>
    </div>
  );
}
