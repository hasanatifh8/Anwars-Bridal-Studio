
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

export type RateCategory = {
    title: string;
    icon: string;
    items: { service: string; rate: string }[];
};

export const rateCard: RateCategory[] = [
    {
        title: "Face Masque",
        icon: "mdi:face-woman-shimmer-outline",
        items: [
            { service: "Insta Glow", rate: "300*" },
            { service: "Skin Lightening, Radiance", rate: "500*" },
            { service: "Power Masque", rate: "500*" },
            { service: "Summer Spl Mineral De-tan", rate: "1500*" },
        ],
    },
    {
        title: "De-Tan",
        icon: "mdi:white-balance-sunny",
        items: [
            { service: "Face De-tan", rate: "350*" },
            { service: "Full Hand", rate: "400*" },
            { service: "Face + Front", rate: "450*" },
            { service: "Face + Blouse Line", rate: "450*" },
            { service: "Full Body", rate: "2000*" },
        ],
    },
    {
        title: "Rica Waxing",
        icon: "mdi:leaf",
        items: [
            { service: "Under Arms", rate: "150*" },
            { service: "Half Arms", rate: "300*" },
            { service: "Full Arms", rate: "450*" },
            { service: "Half Leg", rate: "400*" },
            { service: "Full Leg", rate: "650*" },
            { service: "Full Back", rate: "900*" },
            { service: "Full Front", rate: "1000*" },
            { service: "Bikini", rate: "1000*" },
            { service: "Full Body", rate: "3000*" },
        ],
    },
    {
        title: "Chocolate Waxing",
        icon: "mdi:coffee-outline",
        items: [
            { service: "Under Arms", rate: "100*" },
            { service: "Half Arms", rate: "200*" },
            { service: "Full Arms", rate: "350*" },
            { service: "Half Leg", rate: "250*" },
            { service: "Full Leg", rate: "450*" },
            { service: "Full Back", rate: "750*" },
            { service: "Full Front", rate: "800*" },
            { service: "Full Body", rate: "2000*" },
        ],
    },
    {
        title: "Face Wax",
        icon: "mdi:razor-double-edge",
        items: [
            { service: "Upper Lip", rate: "50*" },
            { service: "Chin", rate: "50*" },
            { service: "Jawline", rate: "100*" },
            { service: "Face", rate: "200*" },
            { service: "Face Wax + Face Pack", rate: "350*" },
        ],
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
