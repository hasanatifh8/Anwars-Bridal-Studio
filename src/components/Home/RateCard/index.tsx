import React from "react";
import { Icon } from "@iconify/react/dist/iconify.js";
import { rateCard } from "../../../app/api/data";

const RateCard = () => {
    return (
        <>
            <div className="grid lg:grid-cols-2 grid-cols-1 gap-6 pt-6">
                {rateCard.map((category, index) => (
                    <div
                        key={category.title}
                        data-aos="fade-up"
                        data-aos-delay={`${index * 100}`}
                        data-aos-duration="1000"
                        className="rounded-22 border border-solid border-border dark:border-dark_border bg-white dark:bg-darklight p-8"
                    >
                        <div className="flex items-center gap-3 pb-5">
                            <div className="bg-primary/10 w-12 h-12 shrink-0 flex items-center justify-center rounded-full">
                                <Icon icon={category.icon} className="text-primary text-2xl" />
                            </div>
                            <h6 className="text-[22px] font-bold text-secondary dark:text-white">
                                {category.title}
                            </h6>
                        </div>
                        <ul>
                            {category.items.map((item) => (
                                <li
                                    key={item.service}
                                    className="flex items-baseline gap-2 py-2.5 border-b border-dashed border-border dark:border-dark_border last:border-none"
                                >
                                    <span className="text-base text-secondary dark:text-white whitespace-nowrap">
                                        {item.service}
                                    </span>
                                    <span className="flex-1 border-b border-dotted border-SlateBlueText/40 dark:border-darktext/30 translate-y-[-4px]" />
                                    <span className="text-base font-bold text-primary dark:text-ElectricAqua whitespace-nowrap">
                                        &#8377;{item.rate}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
            <p className="text-sm text-SlateBlueText dark:text-opacity-70 pt-8 text-center">
                * Rates are indicative and may vary based on skin/hair type and products used. Taxes as applicable.
            </p>
        </>
    );
};

export default RateCard;
