import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-10 self-stretch px-20 pt-14 pb-24 mt-28 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-start text-base leading-8 text-center text-gray-400">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/66109427f51d13b61bfcf5f51a0cc5377af2ea28b77ffdea345e1dfec9d3c541?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain aspect-[2.28] w-[89px] max-md:mr-2"
        />
        <p className="mt-28 max-md:mt-10">©2025Lever</p>
      </div>
      <nav className="flex-auto max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-3/12 max-md:w-full">
            <div className="flex flex-col items-start text-base leading-8 text-gray-600 max-md:mt-10">
              <h3 className="text-lg font-medium leading-loose text-black">
                Product
              </h3>
              <a href="#pricing" className="mt-5 hover:text-gray-800">
                Pricing
              </a>
              <a href="#technology" className="mt-2.5 hover:text-gray-800">
                Technology
              </a>
            </div>
          </div>
          <div className="ml-5 w-[36%] max-md:w-full">
            <div className="flex flex-col grow items-start text-base leading-8 text-gray-600 max-md:mt-10">
              <h3 className="text-lg font-medium leading-loose text-black">
                Engage
              </h3>
              <a href="#faq" className="mt-5 hover:text-gray-800">
                FAQ
              </a>
              <a href="#about" className="mt-5 hover:text-gray-800">
                About Us
              </a>
              <a href="#privacy" className="mt-5 hover:text-gray-800">
                Privacy Policy
              </a>
              <a href="#terms" className="mt-5 hover:text-gray-800">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="ml-5 w-[39%] max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <h3 className="self-start text-lg font-medium leading-loose text-black">
                Partner
              </h3>
              <a
                href="#partner"
                className="mt-6 text-base leading-8 text-gray-600 hover:text-gray-800"
              >
                Become a Partner
              </a>
            </div>
          </div>
        </div>
      </nav>
    </footer>
  );
};
