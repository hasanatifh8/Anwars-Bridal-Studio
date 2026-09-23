import React, { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import { Icon } from "@iconify/react/dist/iconify.js";
import { whatsappBookingLink } from "@/utils/whatsapp";

const Footer: FC = () => {
    return (
        <footer className="bg-secondary">
            <div className="container">
                <div className="flex items-center justify-between flex-wrap md:pt-44 pt-16 md:pb-20 pb-6 border-b border-solid border-dark_border">
                    <div>
                        <Link href="/">
                            <Image
                                src="/images/logo/anwars-logo.webp"
                                alt="Anwar's Bridal Studio"
                                width={80}
                                height={80}
                                quality={100}
                                className="rounded-full"
                            />
                        </Link>
                        <p className="text-PaleCerulean text-base font-normal max-w-286 pt-5">
                            Bridal makeup, hair styling and beauty services crafted for your special day.
                        </p>
                    </div>
                    <div>
                        <ul className="flex items-center flex-wrap md:gap-30 gap-3 md:py-0 py-5">
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/">Home</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/services">Services</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/team/anwar">Anwar</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/team/afreen">Afreen Anwar</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/blog">Blog</Link>
                            </li>
                            <li className="text-PaleCerulean sm:text-xl text-lg font-normal transition-all duration-0.4s hover:text-primary">
                                <Link href="/contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <ul className="flex items-center gap-5">
                            <li>
                                <Link href="https://www.facebook.com/anwarsthepersonalitymaker/" target="_blank" rel="noopener noreferrer" className="group" aria-label="Facebook">
                                    <Icon icon="mdi:facebook" className="text-2xl text-white group-hover:text-ElectricAqua" />
                                </Link>
                            </li>
                            <li>
                                <Link href="https://www.instagram.com/anwars_bridal_studio00/" target="_blank" rel="noopener noreferrer" className="group" aria-label="Instagram">
                                    <Icon icon="mdi:instagram" className="text-2xl text-white group-hover:text-ElectricAqua" />
                                </Link>
                            </li>
                            <li>
                                <Link href={whatsappBookingLink} target="_blank" rel="noopener noreferrer" className="group" aria-label="WhatsApp">
                                    <Icon icon="mdi:whatsapp" className="text-2xl text-white group-hover:text-ElectricAqua" />
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="grid md:grid-cols-12 grid-cols-1 items-center py-8">
                    <div className="col-span-5">
                        <p className="text-base font-normal text-PaleCerulean">
                            &copy; {new Date().getFullYear()} Anwar's Bridal Studio. All rights reserved.
                        </p>
                        <p className="text-base font-normal text-PaleCerulean flex items-center gap-2 pt-2">
                            <Icon icon="mdi:map-marker" className="text-primary" />
                            Tashkent Marg, Civil Lines, Prayagraj, Uttar Pradesh 211001
                        </p>
                        <p className="text-base font-normal text-PaleCerulean flex items-center gap-2 pt-2">
                            <Icon icon="mdi:phone" className="text-primary" />
                            <Link href="tel:+917081500010" className="hover:text-white">+91 70815 00010</Link>
                        </p>
                    </div>
                    <div className="col-span-7 grid md:grid-cols-12 grid-cols-1 items-center gap-6">
                        <p className="text-xl text-PaleCerulean font-normal col-span-4">
                            Subscribe Newsletter
                        </p>
                        <div className="w-full col-span-8">
                            <form className="newsletter-form bg-white dark:bg-transparent flex rounded-md justify-end overflow-hidden rounded-tl-lg rounded-bl-lg">
                                <input
                                    type="email"
                                    placeholder="Email address*"
                                    className="p-4 text-base border-0 rounded-md outline-0 w-[calc(100%_-_137px)] flex dark:bg-midnight_text dark:text-white dark:rounded-none dark:w-full dark:bg-darkmode"
                                />
                                <button
                                    type="submit"
                                    className="btn btn-1 hover-filled-slide-down bg-RegalBlue"
                                >
                                    <span className="!border-0 !text-white">Subscribe</span>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
