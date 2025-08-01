"use client";
import * as React from "react";
import { Button } from "./Button";
import VideoPlayer from "./VideoPlayer";
import technologyVideo from "../data/journey.mp4";

const KnowledgeGraphExplanation: React.FC = () => {
  return (
    <article className="max-w-[408px]">
      <h2 className="mb-8 text-3xl text-center max-sm:text-2xl text-[var(--accent-800)]">
        Timeline-Based Financial Modeling
      </h2>
      <div className="mb-10 text-base leading-8 text-[var(--accent-500)] text-opacity-80">
        <p>
          Lever models your financial life as a timeline of events, showing how decisions play out over time.
        </p>
        <p className="mt-4">
          <strong className="font-extrabold">Income Events</strong> - Salary changes, bonuses, or career transitions mapped to specific timeframes.
        </p>
        <p className="mt-4">
          <strong className="font-extrabold">Expense Events</strong> - Major purchases, rent increases, or lifestyle changes with their timing and impact.
        </p>
        <p className="mt-4">
          <strong className="font-extrabold">Investment Scenarios</strong> - Different saving strategies, account types, and growth assumptions compared side-by-side.
        </p>
        <p className="mt-4">
          This approach lets you see the full picture of how choices compound over time, helping you make decisions based on long-term outcomes rather than short-term impacts.
        </p>
        <p className="mt-4">Learn more about our modeling approach</p>
      </div>
      <div className="flex justify-center mt-10">
        <Button variant="outline" href="/articles/financial-modeling">Learn More</Button>
      </div>
    </article>
  );
};

const TechnologyVideo: React.FC = () => {
  return (
    <section className="flex-1 max-md:mt-0">
      <div className="flex items-center justify-center w-full h-full">
        <VideoPlayer
          src={technologyVideo}
          className="rounded-2xl w-full aspect-video shadow-lg"
        />
      </div>
    </section>
  );
};

export const TechnologySection: React.FC = () => {
  return (
    <>
      <link
        href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500;700&family=Poppins:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <section className="px-5 py-10 mx-auto my-0 max-w-[1400px] mt-60 max-md:mt-32" id="technology">
        <h1 className="mb-16 text-5xl max-md:text-6xl font-medium text-center max-sm:text-4xl text-[var(--accent-950)] font-['Poppins']">
          How it works
        </h1>
        <div className="flex gap-24 max-md:flex-col max-md:gap-12">
          <KnowledgeGraphExplanation />
          <TechnologyVideo />
        </div>
      </section>
    </>
  );
};