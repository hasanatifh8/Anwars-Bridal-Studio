import React from "react";
import Link from "next/link";
import { services } from "../../../app/api/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const ServicesList = () => {
  return (
    <>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-6 pt-6">
        {services.map((service, index) => (
          <div
            key={service.name}
            data-aos="fade-up"
            data-aos-delay={`${index * 100}`}
            data-aos-duration="1000"
            className="border border-solid border-border dark:border-dark_border rounded-22 p-8 text-center flex flex-col items-center"
          >
            <div className="bg-primary/10 w-16 h-16 flex items-center justify-center rounded-full mb-5">
              <Icon icon={service.icon} className="text-primary text-3xl" />
            </div>
            <h6 className="text-[22px] leading-[1.8rem] font-bold text-secondary dark:text-white pb-3">
              {service.name}
            </h6>
            <p className="text-sm font-normal text-SlateBlueText dark:text-opacity-80">
              {service.description}
            </p>
          </div>
        ))}
      </div>
      <div className="text-center pt-14">
        <p className="text-lg font-normal text-SlateBlueText dark:text-opacity-80 pb-6">
          Pricing is tailored to your package and occasion &mdash; get in touch for a personalised quote.
        </p>
        <Link
          href="/contact"
          className="btn btn-1 hover-filled-slide-down rounded-lg overflow-hidden"
        >
          <span>Get a Quote</span>
        </Link>
      </div>
    </>
  );
};

export default ServicesList;
