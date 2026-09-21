import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const SignatureOffer = () => {
    return (
        <>
            <section className="dark:bg-darkmode pt-0">
                <div className="container">
                    <div className="text-center md:pb-20 pb-8">
                        <h2 className="pb-8" data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">Where Beauty Meets Perfection</h2>
                        <p data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className="text-SlateBlueText dark:text-opacity-80 text-lg font-normal max-w-920 m-auto">
                            Your bridal day, planned end to end &mdash; makeup, hair styling, saree draping and mehendi, all under one roof. Be your own kind of beautiful.
                        </p>
                    </div>
                    <div className="flex flex-wrap items-stretch" data-aos="fade-up" data-aos-delay="400" data-aos-duration="1000">
                        <div className="bg-primary flex flex-col items-center justify-center text-center lg:px-16 px-8 lg:py-0 py-10 lg:rounded-l-22 rounded-t-22 md:rounded-tr-none md:rounded-bl-22 rounded-bl-none md:w-2/4 w-full gap-4">
                            <Icon icon="mdi:crown-outline" className="text-white text-6xl" />
                            <p className="text-white text-2xl font-bold">Bridal Day Package</p>
                            <p className="text-white/80 text-lg">Makeup &bull; Hair &bull; Draping &bull; Mehendi</p>
                        </div>
                        <div className="bg-ElectricAqua lg:py-14 py-6 lg:px-16 px-8 lg:rounded-r-22 rounded-b-22 md:rounded-bl-none md:rounded-tr-22 rounded-tr-none md:md:w-2/4 w-full">
                            <div className="bg-white dark:bg-darklight rounded-22 lg:px-11 px-4 pt-8 pb-10">
                                <h6 className="text-[26px] leading-[2.1rem] font-bold text-secondary dark:text-white pb-5">
                                    Personalised Pricing
                                </h6>
                                <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 pb-7">
                                    Every bridal package is tailored to your look, outfit and occasion. Get in touch and we&apos;ll put together a package and quote just for you.
                                </p>
                                <Link
                                    href="/contact"
                                    className="btn btn-1 hover-filled-slide-down w-full text-center rounded-lg overflow-hidden"
                                >
                                    <span>Get a Quote</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SignatureOffer;
