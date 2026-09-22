import React from "react";
import BoxSlider from "../../SharedComponent/BoxSlider";
import Image from "next/image";
import Link from "next/link";
import { offers } from "../../../app/api/data";

const SpecialOffers = () => {
  return (
    <>
      <section className="upcoming dark:bg-darkmode">
        <div className="max-w-1068 m-auto">
          <div className="container">
            <h2 data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000" className="text-center pb-10">This Month&apos;s Special Offers</h2>
            <div>
              <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000">
                <BoxSlider />
              </div>
              <div>
                <div className="flex items-center flex-wrap w-full border border-solid  dark:border-dark_border md:px-14 px-6 md:mt-14 mt-6 rounded-22">
                  {offers.map((offer, index) => (
                    <div
                      key={index}
                      data-aos="fade-up" data-aos-delay={`${index*150}`} data-aos-duration="1000"
                      className="flex items-center lg:gap-0 gap-4 flex-wrap justify-between w-full md:py-12 py-5 border-b border-solid  dark:border-dark_border last:border-b-0"
                    >
                      <div className="flex items-center gap-6">
                        <Image
                          src={offer.image}
                          alt={offer.title}
                          width={0}
                          height={0}
                          quality={100}
                          layout="responsive"
                          sizes="100vh"
                          className="!w-20 !h-20 rounded-22 object-cover"
                        />
                        <div>
                          <h6 className="text-[26px] leading-[2.1rem] font-bold text-secondary dark:text-white max-w-286">
                            {offer.title}
                          </h6>
                          <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80">
                            {offer.description}
                          </p>
                        </div>
                      </div>
                      <div>
                        <Link
                          href={offer.buttonLink}
                          className="btn_outline btn-2 btn_outline hover-outline-slide-down"
                        >
                          <span>{offer.buttonText}</span>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SpecialOffers;
