import React from "react";

export const Header = () => {
  return (
    <header className="flex flex-wrap gap-5 justify-between self-start ml-5 w-full text-base max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/66109427f51d13b61bfcf5f51a0cc5377af2ea28b77ffdea345e1dfec9d3c541?placeholderIfAbsent=true"
        alt="Company Logo"
        className="object-contain shrink-0 self-start mt-1.5 aspect-[2.28] w-[89px]"
      />
      <nav className="flex flex-wrap gap-10 max-md:max-w-full">
        <div className="flex gap-10 my-auto text-gray-600">
          <a href="#pricing" className="hover:text-gray-800">
            Pricing
          </a>
          <a href="#about" className="hover:text-gray-800">
            About
          </a>
          <a href="#technology" className="hover:text-gray-800">
            Technology
          </a>
        </div>
        <div className="flex gap-8 font-medium">
          <button className="my-auto text-black hover:text-gray-700">
            Sign In
          </button>
          <button className="px-11 py-3.5 text-sky-400 whitespace-nowrap border-2 border-sky-400 border-solid rounded-[50px] max-md:px-5 hover:bg-sky-50">
            Demo
          </button>
        </div>
      </nav>
    </header>
  );
};
