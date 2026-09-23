import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import BookingBanner from "@/components/Home/BookingBanner";
const description = "Visit or call Anwar's Bridal Studio at Tashkent Marg, Civil Lines, Prayagraj, or book your bridal, party makeup, hair or mehendi appointment online.";

export const metadata: Metadata = {
    title: "Contact & Book Appointment",
    description,
    alternates: { canonical: "/contact/" },
    openGraph: {
        title: "Contact & Book Appointment | Anwar's Bridal Studio",
        description,
        url: "/contact/",
        images: ["/images/gallery/bridal-10.jpg"],
    },
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/contact", text: "Contact" },
  ];
  return (
    <>
      <HeroSub
        title="Contact & Book Appointment"
        description="Walk in, call us, or book your slot online — our team is ready to help you look and feel your best."
        breadcrumbLinks={breadcrumbLinks}
      />
      <ContactForm />
      <ContactInfo />
      <Location />
      <BookingBanner/>
    </>
  );
};

export default page;
