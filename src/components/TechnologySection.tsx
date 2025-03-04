"use client";
import * as React from "react";
import Example from "../assets/Example.png";
import Example2 from "../assets/Example2.png";
import { Button } from "./Button";

const KnowledgeGraphExplanation: React.FC = () => {
  return (
    <article className="max-w-[408px]">
      <h2 className="mb-8 text-3xl text-center max-sm:text-2xl text-[var(--accent-800)]">
        Business Knowledge Graph
      </h2>
      <div className="mb-10 text-base leading-8 text-[var(--accent-500)] text-opacity-80">
        <p>
          The knowledge graph is a relationship graph that relates all the
          information business.
        </p>
        <p className="mt-4">
          <strong className="font-extrabold">Subject</strong> - An entity in your business system such as a
          Customer, Product, or Employee.
        </p>
        <p className="mt-4">
          <strong className="font-extrabold">Object</strong> - An entity in your business system that can
          be related to a subject such as a Transaction, Email, or Calendar
          Event
        </p>
        <p className="mt-4">
          <strong className="font-extrabold">Predicate</strong> - The relationship that exists between
          subject and Object.
        </p>
        <p className="mt-4">
          With this structure a human can understand the relationships between
          these business resources as well as an AI Agent. Working in cohesion
          the AI Agent can give tailored responses to a specific business.
        </p>
        <p className="mt-4">Learn more by reading our article</p>
      </div>
      <div className="flex justify-center mt-10">
        <Button variant="outline" href="https://cal.com/lever-ai/lever-ai-demo">Learn More</Button>
      </div>
    </article>
  );
};

const GraphVisualization: React.FC = () => {
  return (
    <section className="flex-1 max-md:mt-12">
      <div className="flex flex-col items-center gap-8 w-full mt-20">
        <img
          src={Example}
          alt="Customer"
          className="w-full h-auto object-contain mb-5"
        />
        <img
          src={Example2}
          alt="Product"
          className="w-full h-auto object-contain"
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
      <section className="px-5 py-10 mx-auto my-0 max-w-[1400px] mt-60" id="technology">
        <h1 className="mb-16 text-4xl font-medium text-center max-sm:text-3xl text-[var(--accent-950)] font-['Poppins']">
          Technology
        </h1>
        <div className="flex gap-24 max-md:flex-col">
          <KnowledgeGraphExplanation />
          <GraphVisualization />
        </div>
      </section>
    </>
  );
};