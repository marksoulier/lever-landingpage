"use client";
import * as React from "react";
import { PricingCard } from "./PricingCard";

const Tables: React.FC = () => {
  return (
    <section className="rounded-3xl" id="pricing">
      <h2 className="text-7xl font-medium text-center text-black leading-[50px] mb-25 mt-25 font-['Poppins']">
        Choose your plan
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[35%] max-md:ml-0 max-md:w-full">
          <PricingCard
            title="Discover"
            subtitle="For individuals"
            price={
              <div className="gap-2.5 self-stretch text-4xl font-bold leading-none whitespace-nowrap text-indigo-950 max-md:text-4xl font-['Poppins']">
                Free
              </div>
            }
            description="Discover the leading edge of technology with business."
            features={[
              "One Data Connection",
              "Secure Connections",
              "10 Language Requests / Day",
              "Login from Anywhere",
            ]}
            variant="default"
            iconUrl="data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='72' height='72' rx='16' fill='%23E0F7FA'/%3E%3Ccircle cx='36' cy='36' r='20' stroke='%233CCADD' stroke-width='4'/%3E%3C/svg%3E"
          />
        </div>

        <div className="ml-5 w-[40%] max-md:ml-0 max-md:w-full">
          <PricingCard
            title="Design Partner"
            subtitle="For innovators"
            price={
              <div className="flex gap-2.5 items-center text-black whitespace-nowrap">
                <span className="self-stretch my-auto text-5xl font-bold leading-none max-md:text-4xl font-['Poppins']">
                  $300
                </span>
                <span className="self-stretch pt-5 my-auto text-xl font-medium leading-none w-[86px] font-['Poppins']">
                  /monthly
                </span>
              </div>
            }
            description="Utilize the forefront of technology to grow your business."
            features={[
              "Ten Data Connections",
              "Secure Connections",
              "Unlimited Queries",
              "Agentic Data Analysis",
            ]}
            variant="featured"
            iconUrl="data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='72' height='72' rx='16' fill='%23E0F7FA'/%3E%3Crect x='16' y='16' width='40' height='40' rx='8' stroke='%233CCADD' stroke-width='4'/%3E%3C/svg%3E"
          />
        </div>

        <div className="ml-5 w-[35%] max-md:ml-0 max-md:w-full">
          <PricingCard
            title="Enterprise"
            subtitle="For big companies"
            price={
              <div className="text-4xl font-bold leading-none text-black max-md:text-4xl">
                Contact Us
              </div>
            }
            description="Discover the power of integrated AI for your business efficiency."
            features={[
              "Unlimited Connections",
              "Secure Connections",
              "Multiple Accounts",
              "24hr Business Support",
            ]}
            variant="default"
            iconUrl="data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='72' height='72' rx='16' fill='%23E0F7FA'/%3E%3Cpath d='M36 16L56 36L36 56L16 36L36 16Z' stroke='%233CCADD' stroke-width='4'/%3E%3C/svg%3E"
          />
        </div>
      </div>
    </section>
  );
};

export default Tables;
