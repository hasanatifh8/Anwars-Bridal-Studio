import ContactForm from "@/components/Contact/Form";
import ContactInfo from "@/components/Contact/ContactInfo";
import Location from "@/components/Contact/OfficeLocation";
import React from "react";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import BookingBanner from "@/components/Home/BookingBanner";
export const metadata: Metadata = {
    title: "Contact & Book Appointment | Anwar's Bridal Studio",
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
      <ContactInfo />
      <ContactForm />
      <Location />
      <BookingBanner/>
    </>
  );
};

export default page;
