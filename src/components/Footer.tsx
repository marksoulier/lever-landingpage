import React from "react";

export const Footer = () => {
  return (
    <footer className="flex flex-wrap gap-10 self-stretch px-20 pt-14 pb-24 mt-10 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <div className="self-start text-base leading-8 text-center text-gray-400">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/66109427f51d13b61bfcf5f51a0cc5377af2ea28b77ffdea345e1dfec9d3c541?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain aspect-[2.28] w-[89px] max-md:mr-2"
        />
        <p className="mt-8 max-md:mt-4">©2025Lever</p>
      </div>
      <nav className="flex-auto max-md:max-w-full ml-auto">
        <div className="flex justify-end gap-6 max-md:flex-col">
          <div className="w-[15%] max-md:w-full">
            <div className="flex flex-col items-start text-base leading-8 text-gray-600 max-md:mt-10">
              <h3 className="text-lg font-medium leading-loose text-black font-['Poppins']">
                Product
              </h3>
              <a href="#pricing" className="mt-3 hover:text-[var(--primary-500)] hover:bg-white font-['Spline_Sans']">
                Pricing
              </a>
              <a href="#technology" className="mt-3 hover:text-[var(--primary-500)] hover:bg-white font-['Spline_Sans']">
                Technology
              </a>
            </div>
          </div>
          <div className="w-[15%] max-md:w-full">
            <div className="flex flex-col grow items-start text-base leading-8 text-gray-600 max-md:mt-10">
              <h3 className="text-lg font-medium leading-loose text-black">
                Engage
              </h3>
              <a href="#faq" className="mt-3 hover:text-[var(--primary-500)] hover:bg-white">
                FAQ
              </a>
              <a href="#about" className="mt-3 hover:text-[var(--primary-500)] hover:bg-white">
                About Us
              </a>
              <a href="#privacy" className="mt-3 hover:text-[var(--primary-500)] hover:bg-white">
                Privacy Policy
              </a>
              <a href="#terms" className="mt-3 hover:text-[var(--primary-500)] hover:bg-white">
                Terms of Service
              </a>
            </div>
          </div>
          <div className="w-[20%] max-md:w-full">
            <div className="flex flex-col max-md:mt-10">
              <h3 className="self-start text-lg font-medium leading-loose text-black">
                Partner
              </h3>
              <a
                href="#partner"
                className="mt-3 text-base leading-8 text-gray-600 hover:text-[var(--primary-500)] hover:bg-white"
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
