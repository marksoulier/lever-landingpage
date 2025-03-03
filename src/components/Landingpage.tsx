"use client";
import * as React from "react";
import { Header } from "./Header";
import { HeroSection } from "./Hero";
import { FeatureCard } from "./FeatureCard";
import { PricingSection } from "./PricingSection";
import { TechnologySection } from "./TechnologySection";
import { AboutSection } from "./AboutSection";
import { Footer } from "./Footer";

export default function Landingpage() {
  return (
    <main className="flex overflow-hidden flex-col items-center pt-12 bg-white">
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&family=Poppins:wght@500&display=swap"
        rel="stylesheet"
      />
      <div className="px-5 py-0 mx-auto my-0 max-w-[1140px]">
        <Header />
        <HeroSection />
        <FeatureCard />
        <PricingSection />
        <TechnologySection />
        <AboutSection />
        <Footer />
      </div>
    </main>
  );
}
