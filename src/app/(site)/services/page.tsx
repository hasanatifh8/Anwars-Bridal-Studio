import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import '@/Style/style.css'
import ServicesList from "@/components/Home/ServicesList";
import BookingBanner from "@/components/Home/BookingBanner";
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";
export const metadata: Metadata = {
  title: "Services & Pricing | Anwar's Bridal Studio",
};

const page = () => {
  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/services", text: "Services" },
  ];
  return (
    <>
      <HeroSub
        title="Our Services & Pricing"
        description="From bridal makeup to mehendi, hair styling and nail art — explore every service Anwar's Bridal Studio offers."
        breadcrumbLinks={breadcrumbLinks}
      />
      <section className="dark:bg-darkmode">
        <div className="container">
          <ServicesList/>
        </div>
      </section>
      <div>
        <Testimonials />
        <BookingBanner/>
      </div>
    </>
  );
};

export default page;
