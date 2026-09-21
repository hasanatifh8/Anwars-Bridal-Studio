import Testimonials from "@/components/Home/Testimonials";
import BookingBanner from "@/components/Home/BookingBanner";
import OurTeam from "@/components/Home/OurTeam";
import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Our Team | Anwar's Bridal Studio",
};

const page = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/team", text: "Our Team" },
      ];
  return (
    <>
      <HeroSub
        title="Meet Our Expert Team"
        description="Trained, certified and passionate — our stylists bring years of experience across hair, colour, makeup, nails and spa."
        breadcrumbLinks={breadcrumbLinks}
      />
      <OurTeam showTitle={false} />
      <Testimonials/>
      <BookingBanner/>
    </>
  );
};

export default page;
