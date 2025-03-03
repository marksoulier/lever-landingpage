import React from "react";

export const Hero = () => {
  return (
    <section className="self-start mt-32 ml-7 max-w-full w-[577px] max-md:mt-10">
      <div className="flex gap-5 max-md:flex-col">
        <div className="w-[83%] max-md:ml-0 max-md:w-full">
          <h1 className="text-4xl font-medium text-black leading-[70px] max-md:mt-10">
            AI forward business intelligence
          </h1>
        </div>
        <div className="ml-5 w-[17%] max-md:ml-0 max-md:w-full">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/437342849afd7de7f31dc4fabfcb011cbe7062e32169b3e7661bf1aea0506127?placeholderIfAbsent=true"
            alt="AI Intelligence"
            className="object-contain grow shrink-0 mt-28 aspect-[2.96] w-[71px] max-md:mt-10"
          />
        </div>
      </div>
      <p className="mt-10 ml-8 text-base leading-8 text-black max-md:ml-2.5">
        All your business data together for understanding and optimizing
      </p>
      <button className="px-14 py-5 mt-16 ml-7 max-w-full text-base font-bold leading-loose text-white bg-sky-400 rounded-3xl w-[250px] max-md:px-5 max-md:mt-10 max-md:ml-2.5 hover:bg-sky-500">
        Request a Demo
      </button>
    </section>
  );
};
