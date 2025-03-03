import React from "react";
import { Button } from './Button';

export const Header = () => {
  return (
    <header className="flex items-center justify-between px-8 py-4 w-full text-base max-md:max-w-full">
      <img
        src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/66109427f51d13b61bfcf5f51a0cc5377af2ea28b77ffdea345e1dfec9d3c541?placeholderIfAbsent=true"
        alt="Company Logo"
        className="object-contain w-[89px] h-auto"
      />
      <div className="flex items-center gap-16">
        <nav className="flex items-center">
          <div className="flex gap-12" style={{ color: 'var(--accent-200)' }}>
            <a
              href="#pricing"
              className="transition-colors duration-300 ease-in-out cursor-pointer"
              style={{
                '&:hover': {
                  color: 'var(--accent-500)'
                }
              }}
            >
              Pricing
            </a>
            <a
              href="#about"
              className="transition-colors duration-300 ease-in-out cursor-pointer"
              style={{
                '&:hover': {
                  color: 'var(--accent-500)'
                }
              }}
            >
              About
            </a>
            <a
              href="#technology"
              className="transition-colors duration-300 ease-in-out cursor-pointer"
              style={{
                '&:hover': {
                  color: 'var(--accent-500)'
                }
              }}
            >
              Technology
            </a>
          </div>
        </nav>
        <div className="flex gap-8 items-center">
          <button
            className="font-semibold transition-colors duration-300 ease-in-out cursor-pointer"
            style={{
              color: 'var(--accent-400)',
              '&:hover': {
                color: 'var(--accent-700)'
              }
            }}
          >
            Sign In
          </button>
          <Button variant="outline">Demo</Button>
        </div>
      </div>
    </header>
  );
};