import React from "react";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const BookingBanner = () => {
    return (
        <>
            <section className="dark:bg-darkmode pt-0">
                <div className="container">
                    <div className="bg-primary relative md:mx-auto mx-0 overflow-hidden py-0 rounded-22 lg:-mb-48 dark:lg:-mb-48 md:mt-20 mt-10">
                        <Icon icon="mdi:flower-outline" className="text-white/10 text-[20rem] absolute -top-16 -left-16 rotate-12 md:block hidden" />
                        <Icon icon="mdi:content-cut" className="text-white/10 text-[14rem] absolute -bottom-10 right-10 -rotate-12 md:block hidden" />
                        <div className="flex flex-wrap items-center justify-between md:p-20 p-5 relative">
                            <div className="md:w-3/5 w-full lg:text-start text-center">
                                <p className="sm:text-4xl text-[28px] leading-[2.25rem] font-bold text-white lg:max-w-[28rem] max-w-full pb-9">
                                    Ready for a New You? Book Your Appointment Today.
                                </p>
                                <Link
                                    href="/contact"
                                    className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden before:bg-ElectricAqua"
                                >
                                    <span className="sm:!px-20 px-10 !border-ElectricAqua !text-white">
                                        Book Appointment
                                    </span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default BookingBanner;
