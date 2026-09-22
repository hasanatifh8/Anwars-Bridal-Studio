const WHATSAPP_NUMBER = "919919050844";
const WHATSAPP_MESSAGE =
    "Hi Anwar's Bridal Studio! I'd like to book an appointment. Could you please help me with the available slots?";

export const whatsappBookingLink = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    WHATSAPP_MESSAGE
)}`;
