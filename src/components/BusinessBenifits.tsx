"use client";

import * as React from "react";
import revenue from "../assets/revenue.png";
import time from "../assets/time.png";

export const MaximizeRevenue: React.FC = () => {
    return (
        <section className="flex gap-5 max-md:flex-col">
            <div className="w-2/5 max-md:ml-0 max-md:w-full">
                <div className="flex flex-col mt-14 max-md:mt-10">
                    <h2 className="self-start text-3xl text-center text-black leading-[70px]">
                        Maximize Revenue
                    </h2>
                    <p className="mt-7 text-base leading-8 text-black">
                        Plan your business decisions around your current business systems
                        for maximum revenue.{" "}
                    </p>
                </div>
            </div>
            <div className="ml-5 w-3/5 max-md:ml-0 max-md:w-full">
                <div className="flex justify-center w-full">
                    <div className="relative inline-block">
                        <div className="rounded-2xl shadow-[5px_6px_40px_rgba(0,0,0,0.1)] bg-white absolute w-full h-full -z-10 scale-[0.95] origin-top-left translate-x-[5px] translate-y-[5px]" />
                        <img
                            src={revenue}
                            alt="Revenue Maximization Illustration"
                            className="object-contain h-auto max-h-[300px]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export const SaveTime: React.FC = () => {
    return (
        <section className="flex gap-5 max-md:flex-col mb-30">
            <div className="w-[58%] max-md:ml-0 max-md:w-full">
                <div className="relative inline-block">
                    <div className="rounded-2xl shadow-[5px_6px_40px_rgba(0,0,0,0.1)] bg-white absolute w-full h-full -z-10 scale-[0.95] origin-top-left translate-x-[5px] translate-y-[5px]" />
                    <img
                        src={time}
                        alt="Time Saving Illustration"
                        className="object-contain h-auto max-h-[300px]"
                    />
                </div>
            </div>
            <div className="ml-5 w-[42%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col self-stretch my-auto max-md:mt-10">
                    <h2 className="self-start text-3xl text-center text-black leading-[70px]">
                        Save Time
                    </h2>
                    <p className="mt-6 text-base leading-8 text-black">
                        Make your business systems more efficient to save time and money{" "}
                    </p>
                </div>
            </div>
        </section>
    );
};

export const BusinessBenefits: React.FC = () => {
    return (
        <article className="flex flex-col">
            <div className="self-end w-full max-w-[1066px] max-md:max-w-full mt-20 z-10">
                <MaximizeRevenue />
            </div>
            <div className="mt-16 w-full max-w-[1043px] max-md:mt-10 max-md:max-w-full">
                <SaveTime />
            </div>
        </article>
    );
};

export default BusinessBenefits;