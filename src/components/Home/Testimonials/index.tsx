"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Testimonials = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <>
            <section className="bg-IcyBreeze dark:bg-darklight testimonial">
                <div className="container">
                    <Slider {...settings}>
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000" className="col-span-4 bg-LightSkyBlue sm:rounded-br-214 rounded-br-182 sm:rounded-tl-214 rounded-tl-182 relative before:content-[''] before:absolute before:bg-[url('/images/testimonials/quotes.png')] before:w-109 before:h-109 before:-right-10 before:top-32 lg:inline-block hidden">
                                    <Image
                                        src="/images/world-class-speakers/speakers_2.png"
                                        alt="testimonials"
                                        width={0}
                                        height={0}
                                        quality={100}
                                        layout="responsive"
                                        sizes="100vh"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div data-aos="fade-left" data-aos-delay="300" data-aos-duration="1000" className="col-span-8 md:ml-28 ml-0">
                                    <h2 className="max-w-72">What Our Clients Say</h2>
                                    <p className="text-primary text-lg font-semibold pt-3">
                                        4.7 &#9733; &middot; 1,146 Google reviews
                                    </p>
                                    <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 py-10 max-w-632">
                                        I recently visited Anwar&apos;s Bridal Studio to treat my dull and frizzy hair.
                                        Mr. Anwar performed a combination of treatments including colour and botox
                                        which made my hair so soft and luxurious. I would say this salon is the
                                        best in terms of service in Allahabad and would highly recommend you all
                                        to visit them if you are struggling with hair problems. Thank you so much
                                        for your beautiful service and hospitality.
                                    </p>
                                    <div className="flex items-center gap-8">
                                        <div>
                                            <Image
                                                src="/images/upcoming/profile-1.png"
                                                alt="testimonials-profile"
                                                width={0}
                                                height={0}
                                                quality={100}
                                                layout="responsive"
                                                sizes="100vh"
                                                className="!w-16 !h-16 rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xl font-medium text-secondary dark:text-white pb-1">
                                                Medha Jalota
                                            </p>
                                            <p className="text-sm font-normal text-SlateBlueText dark:text-opacity-80 pb-1">
                                                Google review
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="grid md:grid-cols-12 grid-cols-1 items-center">
                                <div className="col-span-4 bg-LightSkyBlue sm:rounded-br-214 rounded-br-182 sm:rounded-tl-214 rounded-tl-182 relative before:content-[''] before:absolute before:bg-[url('/images/testimonials/quotes.png')] before:w-109 before:h-109 before:-right-10 before:top-32 lg:inline-block hidden">
                                    <Image
                                        src="/images/world-class-speakers/speakers_1.png"
                                        alt="testimonials"
                                        width={0}
                                        height={0}
                                        quality={100}
                                        layout="responsive"
                                        sizes="100vh"
                                        className="w-full h-full"
                                    />
                                </div>
                                <div className="col-span-8 md:ml-28 ml-0">
                                    <h2 className="max-w-72">What Our Clients Say</h2>
                                    <p className="text-[22px] leading-[2rem] font-normal text-SlateBlueText dark:text-opacity-80 py-10 max-w-632">
                                        Got my engagement makeup and mehendi done here and couldn&apos;t
                                        have asked for better. The team understood exactly the look
                                        I wanted and the mehendi design was stunning.
                                    </p>
                                    <div className="flex items-center gap-8">
                                        <div>
                                            <Image
                                                src="/images/upcoming/profile-3.png"
                                                alt="testimonials-profile"
                                                width={0}
                                                height={0}
                                                quality={100}
                                                layout="responsive"
                                                sizes="100vh"
                                                className="!w-16 !h-16 rounded-full"
                                            />
                                        </div>
                                        <div>
                                            <p className="text-xl font-medium text-secondary dark:text-darktext pb-1">
                                                Priyanka Singh
                                            </p>
                                            <div className="flex items-center">
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                                <svg
                                                    className="w-4 h-4 text-yellow-500 ms-1"
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Slider>
                </div>
            </section>
        </>
    );
};

export default Testimonials;
