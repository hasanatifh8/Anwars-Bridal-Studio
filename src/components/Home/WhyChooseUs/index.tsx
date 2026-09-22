"use client";
import React from "react";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const WhyChooseUs = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    centerMode: false,
                },
            },
        ],
    };

    const gallery = [
        "/images/gallery/skin-transformation.jpg",
        "/images/gallery/bridal-06.jpg",
        "/images/gallery/party-makeup-01.jpg",
    ];

    return (
        <>
            <section className="bg-IcyBreeze dark:bg-darklight">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-center max-w-[125rem] mx-auto">
                        <div
                            className="col-span-5 py-0 px-7"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <h2>Why Choose Anwar's Bridal Studio</h2>
                            <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-404 pt-7 pb-11">
                                Trained stylists, premium products and a welcoming space &mdash; we&apos;ve been helping clients look and feel their best for years.
                            </p>
                            <div className="flex items-center flex-wrap gap-30">
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">4.7&#9733;</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Google rating
                                    </p>
                                </div>
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">1,146+</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Google reviews
                                    </p>
                                </div>
                                <div className="text-start sm:pb-0 pb-5">
                                    <h2 className="text-primary">8</h2>
                                    <p className="text-lg font-medium text-secondary dark:text-darktext">
                                        Services offered
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div
                            className="col-span-7 year_slider px-7"
                            data-aos="fade-left"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <Slider {...settings}>
                                {gallery.map((src, index) => (
                                    <div className="mt-14 relative" key={index}>
                                        <Image
                                            src={src}
                                            alt="Anwar's Bridal Studio salon"
                                            width={0}
                                            height={0}
                                            layout="responsive"
                                            quality={100}
                                            sizes="100vh"
                                            className="rounded-22"
                                        />
                                    </div>
                                ))}
                            </Slider>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default WhyChooseUs;
