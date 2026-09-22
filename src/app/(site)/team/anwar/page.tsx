import HeroSub from "@/components/SharedComponent/HeroSub";
import TeamProfile from "@/components/Team/Profile";
import BookingBanner from "@/components/Home/BookingBanner";
import React from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mohammad Anwar | Hair Specialist | Anwar's Bridal Studio",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/team/anwar", text: "Anwar" },
  ];

  return (
    <>
      <HeroSub
        title="Mohammad Anwar"
        description="Co-Founder & Hair Specialist at Anwar's Bridal Studio, Prayagraj."
        breadcrumbLinks={breadcrumbLinks}
      />
      <TeamProfile
        name="Mohammad Anwar"
        role="Co-Founder & Hair Specialist"
        photo="/images/team/anwar.jpg"
        bio={[
          "Anwar is the co-founder of Anwar's Bridal Studio and its lead hair specialist, working with both men and women across cuts, colour and advanced hair treatments.",
          "He's known for combining hair colour with hair botox treatments to fix dull, frizzy hair in a single sitting — restoring both shade and shine without harsh chemical processes.",
          "Anwar recently hosted a 45-day Transformation Masterclass in Prayagraj, training aspiring stylists in advanced hair techniques as an educator and mentor.",
        ]}
        specialties={[
          { label: "Hair Styling", icon: "mdi:content-cut" },
          { label: "Hair Colour", icon: "mdi:palette-outline" },
          { label: "Hair Botox", icon: "mdi:water-outline" },
          { label: "Men's & Women's Hair", icon: "mdi:account-group-outline" },
        ]}
        quote={{
          text: "I recently visited Anwar's Bridal Studio to treat my dull and frizzy hair. Mr. Anwar performed a combination of treatments including colour and botox which made my hair so soft and luxurious. I would say this salon is the best in terms of service in Allahabad.",
          author: "Medha Jalota",
          source: "Google review · 5 stars",
        }}
        gallery={[
          { src: "/images/team/anwar-with-guest.jpg", caption: "At Anwar's Bridal Studio" },
          { src: "/images/team/anwar-team-event.jpg", caption: "Celebrating with the team" },
        ]}
      />
      <BookingBanner />
    </>
  );
};

export default page;
