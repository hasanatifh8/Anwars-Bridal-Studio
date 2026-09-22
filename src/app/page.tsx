import React from 'react'
import { Metadata } from "next";
import Hero from '@/components/Home/Hero';
import Gallery from '@/components/Home/Gallery';
import VideoShowcase from '@/components/Home/VideoShowcase';
import SignatureOffer from '@/components/Home/SignatureOffer';
import WhyChooseUs from '@/components/Home/WhyChooseUs';
import SpecialOffers from '@/components/Home/SpecialOffers';
import Testimonials from '@/components/Home/Testimonials';
import BookingBanner from '@/components/Home/BookingBanner';
import LatestBlog from '@/components/SharedComponent/Blog';
export const metadata: Metadata = {
  title: "Anwar's Bridal Studio | Where Beauty Meets Perfection",
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Gallery/>
      <VideoShowcase/>
      <SignatureOffer/>
      <WhyChooseUs/>
      <SpecialOffers/>
      <Testimonials/>
      <LatestBlog/>
      <BookingBanner/>
    </main>
  )
}
