import React from "react";

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  imageSrc: string;
  isPopular?: boolean;
}

export const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  imageSrc,
  isPopular = false,
}) => {
  return (
    <article
      className={`flex flex-col items-center px-14 py-14 mx-auto w-full text-sm text-gray-600 bg-white rounded-xl border-2 ${
        isPopular ? "border-sky-400" : "border-zinc-300"
      } max-md:px-5 max-md:mt-10`}
    >
      <img
        src={imageSrc}
        alt={`${title} Plan`}
        className="object-contain max-w-full aspect-[1.12] w-[207px]"
      />
      <h3 className="mt-9 text-lg font-medium leading-loose text-center text-black">
        {title}
      </h3>
      {features.map((feature, index) => (
        <div key={index} className="flex gap-5 mt-2.5 leading-8">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/5c818b28732162f47a84034eadfa61f7d344259435066d7b99b9b3a280bb5650?placeholderIfAbsent=true"
            alt="Check Icon"
            className="object-contain shrink-0 my-auto w-6 aspect-square"
          />
          <p className="basis-auto">{feature}</p>
        </div>
      ))}
      <p className="mt-36 text-2xl font-medium leading-tight text-center text-black max-md:mt-10">
        {price}
      </p>
      <button
        className={`px-16 py-3.5 mt-4 max-w-full text-base font-bold whitespace-nowrap rounded-[50px] w-[178px] max-md:px-5 ${
          isPopular
            ? "text-white bg-sky-400 hover:bg-sky-500"
            : "text-sky-400 border-2 border-sky-400 hover:bg-sky-50"
        }`}
      >
        Select
      </button>
    </article>
  );
};
