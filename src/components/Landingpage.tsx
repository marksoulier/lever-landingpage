"use client";
import * as React from "react";
import { Header } from "./Header";
import { HeroSection } from "./Hero";
import { FeatureCard } from "./FeatureCard";
import { TechnologySection } from "./TechnologySection";
import { AboutSection } from "./AboutSection";
import { Footer } from "./Footer";
import { BusinessFeatures } from "./BusinessFeatures";
import { PageBreaker } from "./PageBreaker";
import BusinessBenefits from "./BusinessBenifits";
import Tables from "./Tables";

export default function Landingpage() {
  return (
    <main className="flex overflow-hidden flex-col items-center pt-12 bg-white">
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&family=Poppins:wght@500;600;700&family=Spline+Sans:wght@400;500;600&display=swap"
        rel="stylesheet"
      />
      <div className="px-5 py-0 mx-auto my-0 max-w-[1140px] z-1">
        <Header />
        <HeroSection />
        <FeatureCard />
        <BusinessFeatures />
        <PageBreaker className="my-20" />
        <BusinessBenefits />
        <Tables />
        <TechnologySection />
        <PageBreaker className="my-20" />
        <AboutSection />
        <PageBreaker className="my-20" />
        <Footer />
      </div>
    </main>
  );
}
