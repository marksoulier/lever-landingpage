import React from "react";
import { DemoParticles } from "./ParticleDemo";

export const HeroSection: React.FC = () => {
  return (
    <section className="px-4 sm:px-8 py-8 sm:py-20 mt-12 sm:mt-20 flex flex-col lg:flex-row items-center lg:items-stretch gap-8">
      {/* Left content section */}
      <div className="w-full lg:w-[411px] lg:flex-shrink-0 text-center lg:text-left">
        <h1 className="mb-5 text-5xl sm:text-5xl lg:text-7xl font-medium text-black leading-tight lg:leading-[80px] font-['Poppins']">
          Your personal private{" "}
          <span className="bg-gradient-to-r from-[var(--primary-400)] to-[var(--secondary-400)] bg-clip-text text-transparent">
            business
          </span>{" "}
          AI
        </h1>
        <p className="mb-6 text-sm sm:text-lg leading-6 sm:leading-9 text-black text-opacity-60 font-['Spline_Sans'] max-w-[600px] lg:max-w-none mx-auto lg:mx-0 px-2 sm:px-0">
          All your business data in one place for understanding and optimizing decisions
        </p>
        <a
          href="https://cal.com/lever-ai/lever-ai-demo"
          className="inline-flex bg-gradient-to-br from-[var(--primary-400)] to-[var(--primary-400)] text-white font-bold 
                     h-[45px] sm:h-[60px] w-full sm:w-[250px] rounded-[50px] 
                     shadow-[0_4px_15px_rgba(0,0,0,0.2)] hover:shadow-[0_8px_25px_rgba(0,0,0,0.1)]
                     transition-all duration-300 ease-in-out text-sm sm:text-base
                     hover:translate-y-[-1px] hover:bg-gradient-to-br hover:from-[var(--primary-400)] hover:to-[var(--primary-500)]
                     active:translate-y-[1px] active:shadow-[0_2px_8px_rgba(0,0,0,0.15)]
                     cursor-pointer items-center justify-center"
        >
          Request a Demo
        </a>
      </div>

      {/* Right section - takes remaining space */}
      <div className="w-full lg:flex-1 h-[350px] sm:h-[400px] flex mt-8 lg:mt-0">
        <div className="flex-1 relative bg-white/80 backdrop-blur-sm rounded-xl overflow-hidden">
          <DemoParticles className="flex-1" />
        </div>
      </div>
    </section>
  );
};
