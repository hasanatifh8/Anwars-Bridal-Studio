import React from "react";
import { services } from "../../../app/api/data";
import { Icon } from "@iconify/react/dist/iconify.js";

const ServicesList = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 grid-cols-1 gap-8 pt-6">
        {services.map((category, index) => (
          <div
            key={category.category}
            data-aos="fade-up"
            data-aos-delay={`${index * 150}`}
            data-aos-duration="1000"
            className="border border-solid border-border dark:border-dark_border rounded-22 p-8"
          >
            <div className="flex items-center gap-4 pb-6">
              <div className="bg-primary/10 w-14 h-14 flex items-center justify-center rounded-full">
                <Icon icon={category.icon} className="text-primary text-3xl" />
              </div>
              <h6 className="text-[26px] leading-[2.1rem] font-bold text-secondary dark:text-white">
                {category.category}
              </h6>
            </div>
            <div className="space-y-4">
              {category.items.map((item) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between flex-wrap gap-2 border-b border-solid border-border dark:border-dark_border last:border-b-0 pb-4 last:pb-0"
                >
                  <div>
                    <p className="text-lg font-medium text-secondary dark:text-white">
                      {item.name}
                    </p>
                    <p className="text-sm font-normal text-SlateBlueText dark:text-opacity-80">
                      {item.duration}
                    </p>
                  </div>
                  <span className="text-xl font-bold text-primary">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ServicesList;
