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
        alt: "Spa Therapist",
        name: "Meera Iyer",
        designation: "Spa & Skin Therapist",
    },
];

export type ServiceItem = {
    name: string;
    duration: string;
    price: string;
};

export type ServiceCategory = {
    category: string;
    icon: string;
    items: ServiceItem[];
};

export const services: ServiceCategory[] = [
    {
        category: "Hair",
        icon: "mdi:content-cut",
        items: [
            { name: "Haircut & Styling", duration: "45 min", price: "₹499" },
            { name: "Global Hair Colour", duration: "90 min", price: "₹2,499" },
            { name: "Keratin Smoothening", duration: "150 min", price: "₹4,999" },
            { name: "Hair Spa & Treatment", duration: "60 min", price: "₹1,299" },
        ],
    },
    {
        category: "Skin & Face",
        icon: "mdi:face-woman-shimmer",
        items: [
            { name: "Signature Facial", duration: "60 min", price: "₹1,499" },
            { name: "De-Tan Treatment", duration: "30 min", price: "₹799" },
            { name: "Clean-up & Polish", duration: "40 min", price: "₹699" },
            { name: "Anti-Ageing Facial", duration: "75 min", price: "₹2,199" },
        ],
    },
    {
        category: "Nails",
        icon: "mdi:hand-back-right-outline",
        items: [
            { name: "Classic Manicure", duration: "30 min", price: "₹499" },
            { name: "Classic Pedicure", duration: "45 min", price: "₹599" },
            { name: "Gel Polish", duration: "45 min", price: "₹899" },
            { name: "Nail Art (per hand)", duration: "30 min", price: "₹399" },
        ],
    },
    {
        category: "Bridal & Makeup",
        icon: "mdi:lipstick",
        items: [
            { name: "Party Makeup", duration: "60 min", price: "₹2,999" },
            { name: "Bridal Makeup", duration: "180 min", price: "₹14,999" },
            { name: "Pre-Bridal Package", duration: "3 sessions", price: "₹9,999" },
            { name: "Saree/Hair Draping", duration: "30 min", price: "₹999" },
        ],
    },
    {
        category: "Spa & Massage",
        icon: "mdi:spa-outline",
        items: [
            { name: "Swedish Body Massage", duration: "60 min", price: "₹1,999" },
            { name: "Head & Shoulder Massage", duration: "30 min", price: "₹799" },
            { name: "Foot Reflexology", duration: "45 min", price: "₹999" },
            { name: "Aroma Therapy", duration: "60 min", price: "₹2,299" },
        ],
    },
    {
        category: "Grooming (Men)",
        icon: "mdi:razor-double-edge",
        items: [
            { name: "Beard Trim & Shape", duration: "20 min", price: "₹299" },
            { name: "Hot Towel Shave", duration: "30 min", price: "₹399" },
            { name: "Head Massage", duration: "20 min", price: "₹349" },
            { name: "Complete Grooming Package", duration: "90 min", price: "₹1,799" },
        ],
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
        title: "Monsoon Hair Spa Special",
        profiles: [
            "/images/upcoming/profile-2.png"
        ],
        stylist: "Priya Nair",
        buttonText: "Book Now",
        buttonLink: "/contact"
    },
    {
        title: "Men's Grooming Combo",
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
        title: "Rejuvenating Spa Day",
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
