import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react/dist/iconify.js";

type Quote = {
    text: string;
    author: string;
    source: string;
};

type GalleryPhoto = {
    src: string;
    caption: string;
};

type TeamProfileProps = {
    name: string;
    role: string;
    photo: string;
    bio: string[];
    specialties: { label: string; icon: string }[];
    quote?: Quote;
    gallery?: GalleryPhoto[];
};

const TeamProfile: React.FC<TeamProfileProps> = ({
    name,
    role,
    photo,
    bio,
    specialties,
    quote,
    gallery,
}) => {
    return (
        <>
            <section className="dark:bg-darkmode">
                <div className="container">
                    <div className="grid md:grid-cols-12 grid-cols-1 items-start gap-10">
                        <div className="md:col-span-5" data-aos="fade-right" data-aos-delay="200" data-aos-duration="1000">
                            <Image
                                src={photo}
                                alt={name}
                                width={0}
                                height={0}
                                quality={100}
                                layout="responsive"
                                sizes="100vh"
                                className="rounded-22 object-cover w-full"
                            />
                        </div>
                        <div className="md:col-span-7" data-aos="fade-left" data-aos-delay="200" data-aos-duration="1000">
                            <h2 className="pb-2">{name}</h2>
                            <p className="text-primary text-xl font-semibold pb-6">{role}</p>
                            {bio.map((para, index) => (
                                <p
                                    key={index}
                                    className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 pb-5"
                                >
                                    {para}
                                </p>
                            ))}
                            <div className="flex flex-wrap gap-4 pt-2 pb-8">
                                {specialties.map((s) => (
                                    <div
                                        key={s.label}
                                        className="flex items-center gap-2 bg-primary/10 rounded-full px-5 py-2"
                                    >
                                        <Icon icon={s.icon} className="text-primary text-xl" />
                                        <span className="text-secondary dark:text-white font-medium">
                                            {s.label}
                                        </span>
                                    </div>
                                ))}
                            </div>
                            <Link
                                href="/contact"
                                className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
                            >
                                <span className="!flex !items-center gap-14">
                                    <Icon icon="mdi:calendar-check-outline" className="text-xl" />
                                    Book with {name.split(" ")[0]}
                                </span>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {quote && (
                <section className="bg-IcyBreeze dark:bg-darklight">
                    <div className="container">
                        <div className="max-w-920 m-auto text-center">
                            <Icon icon="mdi:format-quote-open" className="text-primary text-5xl mx-auto" />
                            <p className="text-xl font-normal text-secondary dark:text-white py-6">
                                {quote.text}
                            </p>
                            <p className="text-lg font-medium text-primary">{quote.author}</p>
                            <p className="text-sm font-normal text-SlateBlueText dark:text-opacity-80">
                                {quote.source}
                            </p>
                        </div>
                    </div>
                </section>
            )}

            {gallery && gallery.length > 0 && (
                <section className="dark:bg-darkmode">
                    <div className="container">
                        <h2 className="text-center pb-12">Moments &amp; Milestones</h2>
                        <div className="grid md:grid-cols-3 grid-cols-1 gap-8">
                            {gallery.map((g, index) => (
                                <div
                                    key={index}
                                    data-aos="fade-up"
                                    data-aos-delay={`${index * 150}`}
                                    data-aos-duration="1000"
                                >
                                    <div className="overflow-hidden rounded-lg">
                                        <Image
                                            src={g.src}
                                            alt={g.caption}
                                            width={0}
                                            height={0}
                                            quality={100}
                                            layout="responsive"
                                            sizes="100vh"
                                            className="object-cover w-full h-full"
                                        />
                                    </div>
                                    <p className="text-base font-normal text-SlateBlueText dark:text-opacity-80 pt-3 text-center">
                                        {g.caption}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </>
    );
};

export default TeamProfile;
