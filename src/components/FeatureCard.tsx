import React from "react";

export const FeatureCard = () => {
  return (
    <section className="flex flex-wrap gap-5 justify-between items-center self-stretch px-20 py-9 mt-28 w-full text-2xl font-bold leading-tight text-black bg-white rounded-xl shadow-[0px_4px_4px_rgba(0,0,0,0.25)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="flex gap-8 self-stretch my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/5fe88bf25489b5d209322a629eb2259734eb0d8ed76c77cb55b71f6c3efa6baa?placeholderIfAbsent=true"
          alt="CRM Icon"
          className="object-contain shrink-0 rounded-none aspect-square w-[55px]"
        />
        <h2 className="my-auto">CRM</h2>
      </div>
      <div className="w-0.5 h-full bg-gray-200" />
      <div className="flex gap-9 self-stretch my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/8acddbeaf93b47b1f69dc55dd8f94fdb911479de56c19f8fa4898f8f94dffe72?placeholderIfAbsent=true"
          alt="Logistics Icon"
          className="object-contain shrink-0 rounded-none aspect-square w-[55px]"
        />
        <h2 className="my-auto basis-auto">Logistics</h2>
      </div>
      <div className="w-0.5 h-full bg-gray-200" />
      <div className="flex gap-9 self-stretch my-auto">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/157771c15302c97226bf5c2fc42a353ca8b971e719474604969f48357104185d?placeholderIfAbsent=true"
          alt="Assets Icon"
          className="object-contain shrink-0 rounded-none aspect-square w-[55px]"
        />
        <h2 className="my-auto">Assets</h2>
      </div>
    </section>
  );
};
