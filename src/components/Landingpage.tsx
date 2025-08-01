"use client";
import * as React from "react";
import { HeroSection } from "./Hero";
import { FeatureCard } from "./FeatureCard";
import { TechnologySection } from "./TechnologySection";
import { AboutSection } from "./AboutSection";
import { BusinessFeatures } from "./BusinessFeatures";
import { PageBreaker } from "./PageBreaker";
import BusinessBenefits from "./BusinessBenifits";
import Tables from "./Tables";
import { Layout } from "./Layout";
import { CaseStudy } from "./CaseStudy";
import VideoPlayer from "./VideoPlayer";
import demoVideo from '../data/landing_page.mp4';

export default function Landingpage() {
  return (
    <Layout>
      <HeroSection />
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-8 mt-20">
        <VideoPlayer
          src={demoVideo}
          className="rounded-2xl w-full aspect-video"
        />
      </div>
      <PageBreaker className="my-20" />
      <CaseStudy />
      <PageBreaker className="my-20" />
      <Tables />
      <TechnologySection />
      <PageBreaker className="my-20" />
    </Layout>
  );
}
