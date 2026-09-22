
export type ServiceItem = {
    name: string;
    icon: string;
    description: string;
};

export const services: ServiceItem[] = [
    {
        name: "Bridal Makeup",
        icon: "mdi:crown-outline",
        description: "Complete bridal transformation for your big day, tailored to your outfit and skin tone.",
    },
    {
        name: "Party Makeup",
        icon: "mdi:lipstick",
        description: "Event-ready glam for engagements, receptions and every celebration in between.",
    },
    {
        name: "Hair Styling",
        icon: "mdi:content-cut",
        description: "Cuts, updos and styling for everyday looks and special occasions alike.",
    },
    {
        name: "Skin Treatment",
        icon: "mdi:face-woman-shimmer",
        description: "Facials and skin care treatments to help you glow before the big day.",
    },
    {
        name: "Nail Art",
        icon: "mdi:hand-back-right-outline",
        description: "Manicures, pedicures and custom nail art to match your outfit and mood.",
    },
    {
        name: "Mehendi Design",
        icon: "mdi:flower-outline",
        description: "Intricate, custom mehendi designs for brides and guests.",
    },
    {
        name: "Saree Draping",
        icon: "mdi:human-female",
        description: "Elegant saree and dupatta draping in classic and contemporary styles.",
    },
    {
        name: "Makeup Classes",
        icon: "mdi:school-outline",
        description: "Learn professional makeup techniques directly from our team.",
    },
];

export const offers = [
    {
        title: "Bridal Glow Package",
        image: "/images/gallery/bridal-07.jpg",
        description: "Makeup, hair and draping bundled for your big day.",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Hair Colour & Botox Special",
        image: "/images/gallery/bridal-09.jpg",
        description: "Anwar's signature combo for smooth, glossy hair.",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Festive Nail Art Package",
        image: "/images/gallery/party-makeup-01.jpg",
        description: "Custom nail art to match your festive outfit.",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Mehendi & Skin Glow Combo",
        image: "/images/gallery/mehendi-02.jpg",
        description: "Intricate mehendi paired with a pre-event facial.",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
];
