import React, { useState } from "react";
import { Button } from './Button';
import { useNavigate, useLocation } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = async (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      await navigate('/');
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
    setIsMenuOpen(false);
  };

  const scrollToTop = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <header className="flex items-center justify-between px-4 w-full text-md relative">
      <a href="/" onClick={scrollToTop} className="cursor-pointer">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/66109427f51d13b61bfcf5f51a0cc5377af2ea28b77ffdea345e1dfec9d3c541?placeholderIfAbsent=true"
          alt="Company Logo"
          className="object-contain w-[90px] sm:w-[80px] md:w-[90px] h-auto"
        />
      </a>

      {/* Mobile Menu Button */}
      <button
        className="md:hidden z-50 p-1.5 sm:p-2 hover:bg-white/10 rounded-lg transition-colors"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle menu"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          {isMenuOpen ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M4 6h16M4 12h16M4 18h16" />
          )}
        </svg>
      </button>

      {/* Mobile Side Menu */}
      <div
        className={`
          fixed top-0 right-0 h-full w-[280px] bg-gray-100/95 backdrop-blur-sm transform transition-transform duration-300 ease-in-out
          ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}
          md:hidden
          flex flex-col items-start pt-16 px-4 gap-4
          z-40
        `}
        style={{ maxWidth: 'calc(100vw - 32px)' }}
      >
        <a
          href="/#pricing"
          onClick={(e) => handleScroll(e, 'pricing')}
          className="w-full px-4 py-2 text-gray-700 hover:text-[var(--primary-500)] hover:bg-white/50 rounded-lg transition-all duration-300"
        >
          Pricing
        </a>
        <a
          href="/#about"
          onClick={(e) => handleScroll(e, 'about')}
          className="w-full px-4 py-2 text-gray-700 hover:text-[var(--primary-500)] hover:bg-white/50 rounded-lg transition-all duration-300"
        >
          About
        </a>
        <a
          href="/#technology"
          onClick={(e) => handleScroll(e, 'technology')}
          className="w-full px-4 py-2 text-gray-700 hover:text-[var(--primary-500)] hover:bg-white/50 rounded-lg transition-all duration-300"
        >
          Technology
        </a>
        <div className="mt-4 w-full flex flex-col gap-4">
          <a
            href="https://app.lever-ai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-full px-4 py-2 text-center font-semibold bg-white/20 hover:bg-white/40 rounded-lg transition-all duration-300 text-gray-700"
          >
            Sign In
          </a>
          <Button variant="outline" href="https://cal.com/lever-ai/financial-planner-ux-tester">Demo</Button>
        </div>
      </div>

      {/* Desktop Menu */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex items-center">
          <div className="flex gap-4 text-gray-300 mr-3">
            <a
              href="/#pricing"
              onClick={(e) => handleScroll(e, 'pricing')}
              className="px-5 py-1.5 transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-white/20 backdrop-blur-sm hover:text-[var(--primary-500)] hover:bg-white"
            >
              Pricing
            </a>
            <a
              href="/#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="px-5 py-1.5 transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-white/20 backdrop-blur-sm hover:text-[var(--primary-500)] hover:bg-white"
            >
              About
            </a>
            <a
              href="/#technology"
              onClick={(e) => handleScroll(e, 'technology')}
              className="px-5 py-1.5 transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-white/20 backdrop-blur-sm hover:text-[var(--primary-500)] hover:bg-white"
            >
              Technology
            </a>
          </div>
        </nav>
        <div className="flex gap-4 items-center">
          <a
            href="https://app.lever-ai.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 font-semibold transition-all duration-300 ease-in-out cursor-pointer rounded-lg bg-white/20 backdrop-blur-sm hover:bg-white"
          >
            Sign In
          </a>
          <Button variant="outline" href="https://cal.com/lever-ai/financial-planner-ux-tester">Demo</Button>
        </div>
      </div>
    </header>
  );
};