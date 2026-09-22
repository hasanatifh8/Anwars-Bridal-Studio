"use client";
import React, { useRef, useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

const galleryImages = [
    "/images/gallery/bridal-02.jpg",
    "/images/gallery/mehendi-01.jpg",
    "/images/gallery/party-makeup-02.jpg",
    "/images/gallery/skin-transformation.jpg",
    "/images/gallery/bridal-05.jpg",
];

const ThumbnailCarousel: React.FC = () => {
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const mainSliderRef = useRef<Slider | null>(null);
    const navSliderRef = useRef<Slider | null>(null);

    const settingsFor = {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: navSliderRef.current as Slider, // Ensure proper typing
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: navSliderRef.current as Slider,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    arrows: false,
                    fade: true,
                    asNavFor: navSliderRef.current as Slider,
                },
            },
        ],
    };

    const settingsNav = {
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: mainSliderRef.current as Slider, // Ensure proper typing
        dots: true,
        centerMode: true,
        focusOnSelect: true,
        beforeChange: (oldIndex: number, newIndex: number) =>
            setActiveIndex(newIndex),
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    centerMode: true,
                    focusOnSelect: true,
                },
            },
        ],
    };

    useEffect(() => {
        if (mainSliderRef.current) {
            mainSliderRef.current.slickGoTo(activeIndex);
        }
    }, [activeIndex]);

    return (
        <>
            <div>
                <Slider {...settingsFor} ref={mainSliderRef} className="pb-3">
                    {galleryImages.map((src, index) => (
                        <div key={index}>
                            <Image
                                src={src}
                                alt="Anwar's Bridal Studio work"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </Slider>
                <Slider {...settingsNav} ref={navSliderRef} className="thumb">
                    {galleryImages.map((src, index) => (
                        <div key={index}>
                            <Image
                                src={src}
                                alt="Anwar's Bridal Studio work thumbnail"
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-lg object-cover"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
};

export default ThumbnailCarousel;
