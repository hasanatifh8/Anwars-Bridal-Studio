import HeroSub from "@/components/SharedComponent/HeroSub";
import TeamProfile from "@/components/Team/Profile";
import BookingBanner from "@/components/Home/BookingBanner";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Afreen Anwar | Bridal Makeup Artist | Anwar's Bridal Studio",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/team/afreen", text: "Afreen Anwar" },
  ];

  return (
    <>
      <HeroSub
        title="Afreen Anwar"
        description="Co-Founder & Bridal Makeup Artist at Anwar's Bridal Studio, Prayagraj."
        breadcrumbLinks={breadcrumbLinks}
      />
      <TeamProfile
        name="Afreen Anwar"
        role="Co-Founder & Bridal Makeup Artist"
        photo="/images/team/afreen-anwar.jpg"
        bio={[
          "Afreen is the co-founder of Anwar's Bridal Studio and leads bridal and party makeup for women, crafting looks tailored to each client's features, outfit and the occasion.",
          "From soft, natural bridal looks to bold festive glam, she works closely with every client starting well before the big day to make sure the final look feels personal, not generic.",
          "Alongside makeup, Afreen also oversees skin treatments and pre-bridal packages, helping clients build a skincare routine in the weeks leading up to their event.",
        ]}
        specialties={[
          { label: "Bridal Makeup", icon: "mdi:crown-outline" },
          { label: "Party Makeup", icon: "mdi:lipstick" },
          { label: "Skin Treatment", icon: "mdi:face-woman-shimmer" },
          { label: "Pre-Bridal Packages", icon: "mdi:calendar-heart" },
        ]}
        gallery={[
          { src: "/images/gallery/bridal-01.jpg", caption: "Bridal makeup by Afreen" },
          { src: "/images/gallery/party-makeup-02.jpg", caption: "Party makeup by Afreen" },
          { src: "/images/team/afreen-with-guest-2.jpg", caption: "At an industry event" },
        ]}
      />
      <BookingBanner />
    </>
  );
};

export default page;
