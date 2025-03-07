"use client";
import * as React from "react";
import { CheckListItem } from "./CheckListItem";
import { Button } from "./Button";

interface PricingCardProps {
  title: string;
  subtitle: string;
  price: React.ReactNode;
  description: string;
  features: string[];
  variant: "default" | "featured" | "enterprise";
  iconUrl?: string;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  subtitle,
  price,
  description,
  features,
  variant,
  iconUrl,
}) => {
  const borderColor =
    variant === "featured"
      ? "border-[color:var(--buttons-primary,#3CCADD)]"
      : "border-[color:var(--Neutral-300,#EFF0F6)]";

  return (
    <article
      className={`flex grow items-end px-1 py-14 w-full bg-white rounded-3xl border border-solid 
      ${variant === "featured"
          ? "shadow-[0_0_80px_rgba(0,0,0,0.15)] border-[color:var(--buttons-primary,#3CCADD)]"
          : "shadow-[0_0_30px_rgba(0,0,0,0.1)] border-[color:var(--Neutral-300,#EFF0F6)]"
        } max-md:mt-7
      transition-all duration-300 ease-in-out
      hover:translate-y-[-4px] hover:scale-[1.01]
      ${variant === "featured"
          ? "hover:shadow-[0_0_100px_rgba(0,0,0,0.2)]"
          : "hover:shadow-[0_0_50px_rgba(0,0,0,0.15)]"
        }`}
    >
      <div className="flex shrink-0 mt-44 w-10 bg-white bg-opacity-0 h-[352px] max-md:mt-10" />
      <div className="flex flex-col items-start self-stretch w-full">
        <header className="flex gap-5">
          {iconUrl ? (
            <img
              src={iconUrl}
              alt=""
              className="object-contain shrink-0 rounded-2xl aspect-square w-[72px]"
            />
          ) : (
            <div className="flex shrink-0 bg-cyan-50 rounded-2xl h-[72px] w-[72px]" />
          )}
          <div className="flex flex-col my-auto">
            <p className="text-base font-medium leading-none text-slate-500 font-['Spline_Sans']">
              {subtitle}
            </p>
            <h2 className="self-start text-2xl font-bold leading-none text-indigo-950 font-['Poppins']">
              {title}
            </h2>
          </div>
        </header>

        <p className="mt-5 text-sm leading-6 text-slate-500 font-['Spline_Sans']">{description}</p>

        <div className="mt-3.5">{price}</div>

        <h3 className="mt-4 text-base font-bold leading-none text-indigo-950 font-['Poppins']">
          What's included
        </h3>

        <div className="flex flex-col mt-6 text-sm leading-none text-indigo-950 gap-4 font-['Spline_Sans']">
          {features.map((feature, index) => (
            <CheckListItem key={index} text={feature} />
          ))}
        </div>

        <div className="flex items-center justify-center self-stretch mt-15">
          <a
            href="https://cal.com/lever-ai/lever-ai-demo"
            className={`h-[60px] w-[230px] text-lg rounded-[50px] font-medium transition-all duration-300 ease-in-out cursor-pointer flex items-center justify-center ${variant === "featured"
              ? "bg-[var(--primary-500)] text-white hover:bg-[var(--primary-600)]"
              : "border-2 border-[var(--primary-500)] text-[var(--primary-500)] hover:bg-[var(--primary-500)] hover:text-white"
              }`}
          >
            Get started
          </a>
        </div>
      </div>
      <div className="flex shrink-0 mt-44 w-10 bg-white bg-opacity-0 h-[352px] max-md:mt-10" />
    </article>
  );
};
