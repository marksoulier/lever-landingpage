import React from "react";
import { PricingCard } from "./PricingCard";

export const PricingSection = () => {
  const pricingPlans = [
    {
      title: "Explore the Technology",
      price: "Free",
      features: [
        "One Data Connection",
        "Secure Connections",
        "10 Language Requests / Day",
        "Login from any browser",
      ],
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/79ed129f1acfa01cdc968c93e83ffe3e57fc2caeceafa7f5ab686f21ceaf57e2?placeholderIfAbsent=true",
    },
    {
      title: "Design Partner",
      price: "$300 / mo",
      features: [
        "Ten Data Connections",
        "Secure Connections",
        "Unlimited Queries",
        "Agentic Data Analysis",
      ],
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/fe625719b5e9559829648206ef6027e728bb9e114a4afb186a39574b536b6916?placeholderIfAbsent=true",
      isPopular: true,
    },
    {
      title: "Full Power",
      price: "Contact Us",
      features: [
        "Unlimited Connections",
        "Secure Connections",
        "Unlimited Queries",
        "Multiple Accounts",
        "AI Business Consulting",
        "Agentic Data Analysis",
      ],
      imageSrc:
        "https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/f2f663b9bb9ee4afcd57307dced0c9e60e62649eb06c6ebaff7ec0486ea01b65?placeholderIfAbsent=true",
    },
  ];

  return (
    <section className="mt-16 w-full max-w-[1084px] max-md:mt-10 max-md:max-w-full">
      <h2 className="text-6xl font-medium leading-none text-center text-black mb-5">
        Choose Your Plan
      </h2>
      <p className="mt-5 text-base leading-8 text-center text-gray-600 w-[555px] mx-auto max-md:max-w-full">
        Let's choose the package that is best for you and explore it happily and
        cheerfully.
      </p>
      <div className="flex gap-5 mt-16 max-md:flex-col">
        {pricingPlans.map((plan, index) => (
          <div key={index} className="w-[33%] max-md:w-full">
            <PricingCard {...plan} />
          </div>
        ))}
      </div>
    </section>
  );
};
