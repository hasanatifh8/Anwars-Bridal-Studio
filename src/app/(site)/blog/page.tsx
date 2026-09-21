import React from "react";
import BlogList from "@/components/Blog/BlogList";
import HeroSub from "@/components/SharedComponent/HeroSub";
import { Metadata } from "next";
import BookingBanner from "@/components/Home/BookingBanner";
export const metadata: Metadata = {
  title: "Blog | Anwar's Bridal Studio",
};

const BlogPage = () => {
    const breadcrumbLinks = [
        { href: "/", text: "Home" },
        { href: "/blog", text: "Blog" },
    ];
    return (
        <>
            <HeroSub
                title="Hair, Beauty & Wellness Blog"
                description="Tips, trends and expert advice from our stylists — everything you need to keep your hair, skin and confidence glowing between visits."
                breadcrumbLinks={breadcrumbLinks}
            />
            <BlogList />
            <BookingBanner/>
        </>
    );
};

export default BlogPage;