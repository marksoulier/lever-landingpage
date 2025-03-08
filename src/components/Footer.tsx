import React from "react";
import { useNavigate, useLocation } from 'react-router-dom';

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

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
    <footer className="flex flex-col sm:flex-row justify-between gap-8 px-6 sm:px-8 pt-10 pb-12 mt-10 w-full">
      <div className="flex flex-col items-center sm:items-start">
        <a href="/" onClick={scrollToTop} className="cursor-pointer">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/7cbfb130182046beab226ee58fb45705/66109427f51d13b61bfcf5f51a0cc5377af2ea28b77ffdea345e1dfec9d3c541?placeholderIfAbsent=true"
            alt="Company Logo"
            className="object-contain w-[100px] h-auto"
          />
        </a>
        <p className="mt-4 text-sm text-gray-400">©2025 Lever</p>
      </div>

      <nav className="flex flex-wrap justify-center sm:justify-end gap-8 sm:gap-12 w-full sm:w-auto">
        <div className="flex flex-col items-center sm:items-start min-w-[120px]">
          <h3 className="text-base font-medium text-black mb-3 font-['Poppins']">
            Product
          </h3>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a
              href="/#pricing"
              onClick={(e) => handleScroll(e, 'pricing')}
              className="text-sm text-gray-600 hover:text-[var(--primary-500)] transition-colors font-['Spline_Sans']"
            >
              Pricing
            </a>
            <a
              href="/#technology"
              onClick={(e) => handleScroll(e, 'technology')}
              className="text-sm text-gray-600 hover:text-[var(--primary-500)] transition-colors font-['Spline_Sans']"
            >
              Technology
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start min-w-[120px]">
          <h3 className="text-base font-medium text-black mb-3 font-['Poppins']">
            Engage
          </h3>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a
              href="/#faq"
              onClick={(e) => handleScroll(e, 'faq')}
              className="text-sm text-gray-600 hover:text-[var(--primary-500)] transition-colors font-['Spline_Sans']"
            >
              FAQ
            </a>
            <a
              href="/#about"
              onClick={(e) => handleScroll(e, 'about')}
              className="text-sm text-gray-600 hover:text-[var(--primary-500)] transition-colors font-['Spline_Sans']"
            >
              About Us
            </a>
            <a
              href="/#privacy"
              onClick={(e) => handleScroll(e, 'privacy')}
              className="text-sm text-gray-600 hover:text-[var(--primary-500)] transition-colors font-['Spline_Sans']"
            >
              Privacy Policy
            </a>
            <a
              href="/#terms"
              onClick={(e) => handleScroll(e, 'terms')}
              className="text-sm text-gray-600 hover:text-[var(--primary-500)] transition-colors font-['Spline_Sans']"
            >
              Terms of Service
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center sm:items-start min-w-[120px]">
          <h3 className="text-base font-medium text-black mb-3 font-['Poppins']">
            Partner
          </h3>
          <div className="flex flex-col items-center sm:items-start gap-2">
            <a
              href="/#partner"
              onClick={(e) => handleScroll(e, 'partner')}
              className="text-sm text-gray-600 hover:text-[var(--primary-500)] transition-colors font-['Spline_Sans']"
            >
              Become a Partner
            </a>
          </div>
        </div>
      </nav>
    </footer>
  );
};
