import React from "react";
import { TeamMember } from "./TeamMember";
import { Button } from "./Button";
import mark_photo from '../assets/mark_photo.jpg';
import jared from '../assets/jared.jpg';
import cgLogo from '../assets/cgLogo.png';

export const AboutSection = () => {
  return (
    <section className="mt-16 sm:mt-24 px-4 sm:px-8 text-3xl sm:text-5xl font-medium leading-none text-center text-black max-md:mt-10" id="about">
      <h2>About</h2>
      <div className="mt-16 sm:mt-24 w-full max-w-[1215px] max-md:mt-10 mx-auto">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[62%] max-md:w-full">
            <article className="text-sm sm:text-base leading-6 sm:leading-8 text-[var(--accent-700)]">
              <p>
                Lever is a startup dedicated to helping small and medium-sized businesses stay competitive in a data-driven economy. With advancements in technology, the same data collection and analytics once exclusive to large enterprises are now accessible to smaller companies. We bring big data insights to SMBs, making data-driven decision-making easier than ever.
              </p>
              <p className="mt-4 sm:mt-8">
                Our journey began with a nonprofit called Common Grounds, whose mission is to enrich the lives of youth and adults with disabilities through quality outdoor recreation. They sought a way to better understand their data to enhance the experiences they provide. By improving data accessibility, they gained deeper insights, allowing them to tailor programs more effectively to the individuals they serve.
              </p>
            </article>
          </div>
          <div className="w-[38%] max-md:w-full mt-10 sm:mt-20">
            <img
              src={cgLogo}
              alt="Common Ground Logo"
              className="object-contain w-full max-w-[280px] mx-auto aspect-[3.66]"
            />
          </div>
        </div>
      </div>
      <div className="mt-24 sm:mt-48 max-w-full w-[676px] max-md:mt-10 mx-auto px-4">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-6/12 max-md:w-full">
            <TeamMember
              name="Mark Soulier"
              role="Data Analyst"
              email="mark.soulier@usu.com"
              linkedin="www.linkedin.com/in/marksoulier"
              image={mark_photo}
            />
          </div>
          <div className="w-6/12 max-md:w-full">
            <TeamMember
              name="Jared Smith"
              role="Developer"
              email="smithvjared@gmail.com"
              linkedin="www.linkedin.com/in/jared-smith-07baab229"
              image={jared}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-12 sm:mt-20">
        <Button variant="outline" href="https://cal.com/lever-ai/lever-ai-demo">Contact Us</Button>
      </div>
    </section>
  );
};
