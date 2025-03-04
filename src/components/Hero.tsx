import React from "react";
import { DemoParticles } from "./ParticleDemo";

export const HeroSection: React.FC = () => {
  return (
    <section className="px-8 py-20 flex items-stretch gap-8">
      {/* Left content section - fixed width */}
      <div className="w-[411px] flex-shrink-0">
        <h1 className="mb-5 text-4xl font-medium text-black leading-[70px] max-md:text-3xl max-md:leading-[50px] max-sm:text-2xl max-sm:leading-10">
          AI forward business intelligence
        </h1>
        <p className="mb-6 text-base leading-8 text-black text-opacity-60">
          All your business data together for understanding and optimizing
        </p>
        <button
          className="bg-[var(--primary-500)] text-white font-bold h-[60px] w-[250px] rounded-[50px] 
                     shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out
                     hover:bg-[var(--primary-600)] cursor-pointer"
        >
          Request a Demo
        </button>
      </div>

      {/* Right section - takes remaining space */}
      <div className="flex-1 min-h-[400px] flex">
        <div className="flex-1 relative bg-white/80 backdrop-blur-sm rounded-xl">
          <DemoParticles className="flex-1" />
        </div>
      </div>
    </section>
  );
};
