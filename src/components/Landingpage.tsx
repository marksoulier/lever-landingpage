"use client";
import * as React from "react";
import { Header } from "./Header";
import { Hero } from "./Hero";
import { FeatureCard } from "./FeatureCard";
import { PricingSection } from "./PricingSection";
import { TechnologySection } from "./TechnologySection";
import { AboutSection } from "./AboutSection";
import { Footer } from "./Footer";

export default function Landingpage() {
  return (
    <main className="flex overflow-hidden flex-col items-center pt-12 bg-white">
      <div className="flex flex-col items-end ml-6 w-full max-w-[1140px] max-md:max-w-full">
        <Header />
        <Hero />
        <FeatureCard />
        <PricingSection />
        <TechnologySection />
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}
