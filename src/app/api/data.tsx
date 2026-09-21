export const stylists = [
    {
        id: 1,
        src: "/images/world-class-speakers/speakers_1.png",
        alt: "Founder & Master Stylist",
        name: "Anwar",
        designation: "Founder & Master Stylist",
    },
    {
        id: 2,
        src: "/images/world-class-speakers/speakers_2.png",
        alt: "Colour Specialist",
        name: "Priya Nair",
        designation: "Colour Specialist",
    },
    {
        id: 3,
        src: "/images/world-class-speakers/speakers_3.png",
        alt: "Bridal Makeup Artist",
        name: "Sanya Kapoor",
        designation: "Bridal Makeup Artist",
    },
    {
        id: 4,
        src: "/images/world-class-speakers/speakers_4.png",
        alt: "Nail Art Expert",
        name: "Ritu Sharma",
        designation: "Nail Art Expert",
    },
    {
        id: 5,
        src: "/images/world-class-speakers/speakers_5.png",
        alt: "Skin Specialist & Mehendi Artist",
        name: "Meera Iyer",
        designation: "Skin Specialist & Mehendi Artist",
    },
];

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
        profiles: [
            "/images/upcoming/profile-1.png",
            "/images/upcoming/profile-3.png"
        ],
        stylist: "Sanya Kapoor & Team",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Monsoon Hair Care Special",
        profiles: [
            "/images/upcoming/profile-2.png"
        ],
        stylist: "Priya Nair",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Hair Colour & Botox Special",
        profiles: [
            "/images/upcoming/profile-4.png"
        ],
        stylist: "Anwar",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Festive Nail Art Package",
        profiles: [
            "/images/upcoming/profile-7.png"
        ],
        stylist: "Ritu Sharma",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Mehendi & Skin Glow Combo",
        profiles: [
            "/images/upcoming/profile-6.png",
            "/images/upcoming/profile-5.png",
        ],
        stylist: "Meera Iyer & Team",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Skin Brightening Combo",
        profiles: [
            "/images/upcoming/profile-2.png"
        ],
        stylist: "Meera Iyer",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
];
