import React from "react";

export const TechnologySection = () => {
  return (
    <section className="flex flex-col self-stretch px-20 mt-16 w-full max-md:px-5 max-md:mt-10 max-md:max-w-full">
      <h2 className="text-4xl font-medium leading-none text-center text-black">
        Technology
      </h2>
      <h3 className="self-start ml-3 text-3xl leading-loose text-center text-black max-md:ml-2.5">
        Business Knowledge Graph
      </h3>
      <div className="self-center mt-24 w-full max-w-[1208px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[37%] max-md:w-full">
            <article className="text-base leading-8 text-black">
              <p>
                The knowledge graph is a relationship graph that relates all the
                information business.
              </p>
              <p className="mt-4">
                <strong>Subject</strong> - An entity in your business system
                such as a Customer, Product, or Employee.
              </p>
              <p className="mt-4">
                <strong>Object</strong> - An entity in your business system that
                can be related to a subject such as a Transaction, Email, or
                Calendar Event
              </p>
              <p className="mt-4">
                <strong>Predicate</strong> - The relationship that exists
                between subject and Object.
              </p>
              <p className="mt-4">
                With this structure a human can understand the relationships
                between these business resources as well as an AI Agent. Working
                in cohesion the AI Agent can give tailored responses to a
                specific business.
              </p>
              <a href="#" className="mt-4 block text-sky-400 hover:underline">
                Learn more by reading our article
              </a>
            </article>
          </div>
          <div className="ml-5 w-[63%] max-md:ml-0 max-md:w-full">
            {/* Knowledge Graph Visualization */}
            <div className="flex flex-col gap-8">
              <div className="flex justify-between items-center">
                <div className="relative px-16 py-24 text-2xl font-bold text-white bg-sky-400 rounded-xl">
                  Subject
                </div>
                <div className="text-2xl font-bold">Predicate</div>
                <div className="relative px-16 py-24 text-2xl font-bold text-white bg-sky-400 rounded-xl">
                  Object
                </div>
              </div>
              <div className="flex justify-between items-center mt-8">
                <div className="relative px-16 py-20 text-xl font-bold text-white bg-amber-400 rounded-xl">
                  Jim (Customer)
                </div>
                <div className="text-2xl font-bold">Bought</div>
                <div className="relative px-14 py-24 text-2xl font-bold text-white bg-green-400 rounded-xl">
                  Product B
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="px-10 py-4 mt-16 ml-8 max-w-full text-base font-bold text-white bg-stone-300 rounded-3xl w-[177px] hover:bg-stone-400">
        Learn More
      </button>
    </section>
  );
};
