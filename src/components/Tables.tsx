"use client";
import * as React from "react";
import { PricingCard } from "./PricingCard";

const Tables: React.FC = () => {
  return (
    <section className="rounded-3xl" id="pricing">
      <h2 className="text-7xl max-md:text-5xl font-medium text-center text-black leading-[50px] mb-25 mt-25 font-['Poppins']">
        Start modeling your finances
      </h2>
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[35%] max-md:ml-0 max-md:w-full">
          <PricingCard
            title="Explore"
            subtitle="For individuals"
            price={
              <div className="gap-2.5 self-stretch text-4xl font-bold leading-none whitespace-nowrap text-indigo-950 max-md:text-4xl font-['Poppins']">
                Free
              </div>
            }
            description="Start exploring financial scenarios with basic modeling tools."
            features={[
              "Basic timeline modeling",
              "Simple what-if scenarios",
              "Core financial calculations",
              "Personal use only",
            ]}
            variant="default"
            iconUrl="data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='72' height='72' rx='16' fill='%23E0F7FA'/%3E%3Ccircle cx='36' cy='36' r='20' stroke='%233CCADD' stroke-width='4'/%3E%3C/svg%3E"
          />
        </div>

        <div className="ml-5 w-[40%] max-md:ml-0 max-md:w-full">
          <PricingCard
            title="Personal Planner"
            subtitle="For serious planners"
            price={
              <div className="flex gap-2.5 items-center text-black whitespace-nowrap">
                <span className="self-stretch my-auto text-4xl font-bold leading-none max-md:text-4xl font-['Poppins']">
                  $25
                </span>
                <span className="self-stretch font-bold my-auto text-2xl font-medium leading-none w-[86px] font-['Poppins']">
                  /month
                </span>
              </div>
            }
            description="Advanced modeling tools for comprehensive financial planning."
            features={[
              "Advanced scenario modeling",
              "Multiple timeline comparisons",
              "Detailed investment projections",
              "Priority support",
            ]}
            variant="featured"
            iconUrl="data:image/svg+xml,%3Csvg width='72' height='72' viewBox='0 0 72 72' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Crect width='72' height='72' rx='16' fill='%23E0F7FA'/%3E%3Crect x='16' y='16' width='40' height='40' rx='8' stroke='%233CCADD' stroke-width='4'/%3E%3C/svg%3E"
          />
        </div>

        <div className="ml-5 w-[35%] max-md:ml-0 max-md:w-full">
          <PricingCard
            title="Professional"
            subtitle="For financial advisors"
            price={
              <div className="text-4xl font-bold leading-none text-black max-md:text-4xl">
                Contact Us
              </div>
            }
            description="Tools for financial professionals to model client scenarios."
            features={[
              "Client scenario modeling",
              "Professional reporting",
              "Multiple client accounts",
              "Dedicated support",
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
