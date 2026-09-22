import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";
import { whatsappBookingLink } from "@/utils/whatsapp";

const Hero = () => {
    return (
        <section className="relative overflow-hidden bg-IcyBreeze dark:bg-darkmode !py-0">
            {/* Ambient glow accents */}
            <div className="pointer-events-none absolute -top-32 -left-24 h-96 w-96 rounded-full bg-primary/30 dark:bg-primary/25 blur-3xl" />
            <div className="pointer-events-none absolute top-1/3 -right-32 h-[28rem] w-[28rem] rounded-full bg-ElectricAqua/20 dark:bg-ElectricAqua/15 blur-3xl" />
            <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-RegalBlue/20 dark:bg-RegalBlue/25 blur-3xl" />

            <div className="container relative py-16 md:py-24">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
                    <div className="col-span-6">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="relative z-0 inline-flex items-center gap-2 rounded-full border border-ElectricAqua/50 bg-white/60 dark:bg-darklight/60 backdrop-blur-md px-5 py-2 text-primary dark:text-ElectricAqua text-sm md:text-base font-bold tracking-wide"
                        >
                            <Icon icon="mdi:sparkles" className="text-lg" />
                            Prayagraj&rsquo;s Premier Bridal Studio
                        </p>
                        <h1
                            className="py-5 leading-[1.1]"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            Look Good.{" "}
                            <span className="bg-gradient-to-r from-primary via-RegalBlue to-ElectricAqua bg-clip-text text-transparent">
                                Feel Confident.
                            </span>
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            className="text-xl text-SlateBlueText dark:text-darktext md:pb-10 pb-6 max-w-[32rem]"
                        >
                            From bridal makeup and hair styling to mehendi and nail art &mdash; Anwar&rsquo;s Bridal Studio brings expert care to your every special occasion.
                        </p>
                        <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">
                            <Link
                                href="/contact"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden shadow-[0_10px_40px_-10px_rgba(230,0,126,0.55)]"
                            >
                                <span className="!flex !items-center gap-14">
                                    <Icon icon="mdi:calendar-check-outline" className="text-xl" />
                                    Book Appointment
                                </span>
                            </Link>
                            <Link
                                href="/services"
                                data-aos="fade-up"
                                data-aos-delay="600"
                                data-aos-duration="1000"
                                className="btn_outline btn-2 hover-outline-slide-down group"
                            >
                                <span className="!flex !items-center gap-14">
                                    <Icon icon="mdi:content-cut" className="text-xl" />
                                    Our Services
                                </span>
                            </Link>
                            <a
                                href={whatsappBookingLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                data-aos="fade-up"
                                data-aos-delay="650"
                                data-aos-duration="1000"
                                className="inline-flex items-center gap-2 rounded-lg border border-[#25D366]/60 bg-[#25D366]/10 px-6 py-3.5 text-[#25D366] font-medium transition-all duration-0.4s hover:bg-[#25D366] hover:text-white"
                            >
                                <Icon icon="mdi:whatsapp" className="text-xl" />
                                Book on WhatsApp
                            </a>
                        </div>
                        <div
                            data-aos="fade-up"
                            data-aos-delay="700"
                            data-aos-duration="1000"
                            className="flex items-center flex-wrap gap-6 mt-10 pt-8 border-t border-PeriwinkleBorder/40 dark:border-dark_border"
                        >
                            <div className="flex items-center gap-2">
                                <div className="flex text-ElectricAqua text-lg">
                                    <Icon icon="mdi:star" />
                                    <Icon icon="mdi:star" />
                                    <Icon icon="mdi:star" />
                                    <Icon icon="mdi:star" />
                                    <Icon icon="mdi:star-half-full" />
                                </div>
                                <span className="text-secondary dark:text-white font-bold">4.7</span>
                                <span className="text-SlateBlueText dark:text-darktext text-sm">
                                    (1,146+ Google reviews)
                                </span>
                            </div>
                            <a
                                href="https://www.instagram.com/anwars_bridal_studio00/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 text-secondary dark:text-white font-medium hover:text-primary dark:hover:text-ElectricAqua transition-all duration-0.4s"
                            >
                                <Icon icon="mdi:instagram" className="text-xl text-primary dark:text-ElectricAqua" />
                                @anwars_bridal_studio00
                            </a>
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="col-span-6 lg:flex hidden items-center gap-3"
                    >
                        <div className="relative w-full rounded-tl-166 rounded-br-166 bg-gradient-to-br from-ElectricAqua via-primary to-RegalBlue p-[3px] shadow-[0_20px_60px_-15px_rgba(139,10,80,0.5)]">
                            <div className="relative overflow-hidden rounded-tl-166 rounded-br-166">
                                <Image
                                    src="/images/gallery/bridal-01.jpg"
                                    alt="Bridal makeup by Anwar's Bridal Studio"
                                    width={0}
                                    height={0}
                                    quality={100}
                                    layout="responsive"
                                    sizes="100vh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-22 shadow-hero-box py-4 px-5 absolute top-16 -left-20 bg-darkmode/80 backdrop-blur-md border border-ElectricAqua/40">
                                <p className="text-lg font-bold text-ElectricAqua">4.7 &#9733;</p>
                                <p className="text-base font-medium text-white text-center">
                                    Google rating
                                </p>
                            </div>
                        </div>
                        <div className="relative w-full mt-32 rounded-tr-166 rounded-bl-166 bg-gradient-to-br from-primary via-RegalBlue to-ElectricAqua p-[3px] shadow-[0_20px_60px_-15px_rgba(230,0,126,0.5)]">
                            <div className="relative overflow-hidden rounded-tr-166 rounded-bl-166">
                                <Image
                                    src="/images/gallery/bridal-04.jpg"
                                    alt="Bridal look by Anwar's Bridal Studio"
                                    width={0}
                                    height={0}
                                    quality={100}
                                    layout="responsive"
                                    sizes="100vh"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="rounded-22 shadow-hero-box py-4 px-5 absolute top-24 -right-20 xl:inline-block hidden bg-darkmode/80 backdrop-blur-md border border-ElectricAqua/40">
                                <p className="text-lg font-bold text-ElectricAqua">1,146+</p>
                                <p className="text-base font-medium text-white text-center">
                                    Happy clients
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
