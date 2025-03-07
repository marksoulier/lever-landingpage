import React from "react";
import { Button } from './Button';

export const Header = () => {
  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="flex items-center justify-between px-8 py-4 w-full text-lg max-md:max-w-full">
      <a href="/" onClick={scrollToTop} className="cursor-pointer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/66109427f51d13b61bfcf5f51a0cc5377af2ea28b77ffdea345e1dfec9d3c541?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain w-[89px] h-auto"
        />
      </a>
      <div className="flex items-center gap-8">
        <nav className="flex items-center">
          <div className="flex gap-4 text-gray-300 mr-3">
            <a
              href="#pricing"
              onClick={(e) => handleScroll(e, 'pricing')}
              className="px-5 py-1.5 transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-white/20 backdrop-blur-sm hover:text-[var(--primary-500)] hover:bg-white"
            >
              Pricing
            </a>
            <a
              href="#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="px-5 py-1.5 transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-white/20 backdrop-blur-sm hover:text-[var(--primary-500)] hover:bg-white"
            >
              About
            </a>
            <a
              href="#technology"
              onClick={(e) => handleScroll(e, 'technology')}
              className="px-5 py-1.5 transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-white/20 backdrop-blur-sm hover:text-[var(--primary-500)] hover:bg-white"
            >
              Technology
            </a>
          </div>
        </nav>
        <div className="flex gap-4 items-center">
          <a
            href="http://localhost:5173/dynamic-frontend/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 font-semibold transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white"
          >
            Sign In
          </a>
          <Button variant="outline" href="https://cal.com/lever-ai/lever-ai-demo">Demo</Button>
        </div>
      </div>
    </header>
  );
};