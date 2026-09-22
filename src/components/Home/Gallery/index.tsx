import React from "react";
import Link from "next/link";
import ThumbnailCarousel from "../ThumbnailCarousel";
import { Icon } from "@iconify/react/dist/iconify.js";

const Gallery = () => {
  return (
    <>
      <section className="bg-IcyBreeze dark:bg-darklight relative overflow-hidden before:absolute before:content-[''] before:bg-PaleSkyBlu before:dark:bg-secondary before:w-687 before:h-687 before:-bottom-1/2 before:rounded-full before:xl:inline-block before:hidden">
        <div className="container">
          <div className="grid md:grid-cols-2 grid-cols-1 items-center lg:gap-24 gap-5">
            <div
              data-aos="fade-right"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <ThumbnailCarousel />
            </div>
            <div
              className="md:pt-0 pt-6"
              data-aos="fade-left"
              data-aos-delay="200"
              data-aos-duration="1000"
            >
              <h2>Real Transformations, Real Confidence</h2>
              <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 max-w-506 md:pt-9 pt-5 md:pb-14 pb-6">
                Every cut, colour and style tells a story. Take a look at the moments our clients walk out feeling like the best version of themselves.
              </p>
              <div className="flex items-center flex-wrap gap-4">
                <Link
                  href="/services"
                  className="btn_outline btn-2 hover-outline-slide-down"
                >
                  <span>Explore Our Services</span>
                </Link>
                <Link
                  href="https://www.instagram.com/anwars_bridal_studio00/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-lg font-medium text-secondary dark:text-white hover:text-primary dark:hover:text-primary"
                >
                  <Icon icon="mdi:instagram" className="text-2xl" />
                  More photos on Instagram
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Gallery;
