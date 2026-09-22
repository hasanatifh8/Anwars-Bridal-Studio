import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

const Hero = () => {
    return (
        <section className="dark:bg-darkmode">
            <div className="container">
                <div className="grid lg:grid-cols-12 grid-cols-1 items-center gap-30">
                    <div className="col-span-6">
                        <p
                            data-aos="fade-up"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                            className="relative z-0  inline-block text-primary text-lg font-bold before:absolute before:content-[''] before:bg-primary/20  before:w-full before:h-2 before:-z-1 dark:before:-z-1 before:bottom-0"
                        >
                            Be Your Own Kind of Beautiful
                        </p>
                        <h1
                            className="py-4"
                            data-aos="fade-up"
                            data-aos-delay="300"
                            data-aos-duration="1000"
                        >
                            Look Good. Feel Confident.
                        </h1>
                        <p
                            data-aos="fade-up"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            className="text-xl text-SlateBlueText dark:text-opacity-80 font-normal md:pb-14 pb-6"
                        >
                            From bridal makeup and hair styling to mehendi and nail art &mdash; Anwar's Bridal Studio brings expert care to your every special occasion.
                        </p>
                        <div className="flex items-center md:justify-normal lg:justify-center justify-start flex-wrap gap-4">
                            <Link
                                href="/contact"
                                data-aos="fade-up"
                                data-aos-delay="500"
                                data-aos-duration="1000"
                                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
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
                        </div>
                    </div>
                    <div
                        data-aos="fade-left"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                        className="col-span-6  lg:flex hidden items-center gap-3"
                    >
                        <div className="bg-ElectricAqua relative rounded-tl-166 rounded-br-166 w-full">
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
                            <div className="bg-LightYellow rounded-22 shadow-hero-box py-4 px-5 absolute top-16 -left-20">
                                <p className="text-lg font-bold text-secondary">4.7 &#9733;</p>
                                <p className="text-base font-medium text-secondary text-center">
                                    Google rating
                                </p>
                            </div>
                        </div>
                        <div className="bg-primary relative rounded-tr-166 rounded-bl-166 w-full mt-32">
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
                            <div className="bg-Aquamarine rounded-22 shadow-hero-box py-4 px-5 absolute top-24 -right-20 xl:inline-block hidden">
                                <p className="text-lg font-bold text-secondary">1,146+</p>
                                <p className="text-base font-medium text-secondary text-center">
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
