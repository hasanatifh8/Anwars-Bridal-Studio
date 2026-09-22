"use client";

import { Icon } from "@iconify/react/dist/iconify.js";
import { whatsappBookingLink } from "@/utils/whatsapp";

const WhatsAppButton = () => {
    return (
        <a
            href={whatsappBookingLink}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Book an appointment on WhatsApp"
            className="group fixed bottom-6 right-6 z-50 flex items-center gap-3"
        >
            <span className="hidden sm:inline-block whitespace-nowrap rounded-full bg-darkmode/90 text-white text-sm font-medium px-4 py-2 opacity-0 translate-x-2 shadow-hero-box transition-all duration-0.4s group-hover:opacity-100 group-hover:translate-x-0">
                Book on WhatsApp
            </span>
            <span className="relative flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-[#25D366] text-white text-3xl shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-0.4s hover:scale-110">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-60" />
                <Icon icon="mdi:whatsapp" className="relative" />
            </span>
        </a>
    );
};

export default WhatsAppButton;
