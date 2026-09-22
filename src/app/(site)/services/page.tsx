import HeroSub from "@/components/SharedComponent/HeroSub";
import React from "react";
import '@/Style/style.css'
import ServicesList from "@/components/Home/ServicesList";
import BookingBanner from "@/components/Home/BookingBanner";
import Testimonials from "@/components/Home/Testimonials";
import { Metadata } from "next";
const description = "Bridal makeup, party makeup, hair styling, skin treatment, nail art, mehendi design, saree draping and makeup classes at Anwar's Bridal Studio, Prayagraj.";

export const metadata: Metadata = {
  title: "Services & Pricing",
  description,
  alternates: { canonical: "/services/" },
  openGraph: {
    title: "Services & Pricing | Anwar's Bridal Studio",
    description,
    url: "/services/",
    images: ["/images/gallery/bridal-01.jpg"],
  },
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
