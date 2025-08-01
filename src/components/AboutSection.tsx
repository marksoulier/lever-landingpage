import React from "react";
import { TeamMember } from "./TeamMember";
import { Button } from "./Button";
import mark_photo from '../assets/mark_photo.jpg';
import jared from '../assets/jared.jpg';
import cgLogo from '../assets/cgLogo.png';

export const AboutSection = () => {
  return (
    <section className="mt-16 sm:mt-24 px-4 sm:px-8 max-w-[1215px] mx-auto" id="about">
      <h2 className="text-4xl sm:text-5xl font-medium leading-none text-[var(--accent-950)] max-md:mt-10 text-center font-poppins">About</h2>
      <div className="mt-16 sm:mt-24 w-full max-w-[1215px] max-md:mt-10 mx-auto">
        <div className="flex gap-5 max-md:flex-col">
          <div className="w-[62%] max-md:w-full">
            <article className="text-base leading-8 text-[var(--accent-500)] text-opacity-80">
              <p>
                Lever is a personal financial planning tool built for people who want more clarity around their financial future. We help individuals model financial events over time so they can see how their choices play out. Rather than giving advice, we give people the tools to explore alternatives and make informed decisions about their money.
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
