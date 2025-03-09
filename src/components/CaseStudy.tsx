import React from "react";
import cgLogo from '../assets/cgLogo.png';

export const CaseStudy = () => {
    return (
        <section className="mt-16 sm:mt-24 px-4 sm:px-8 max-w-[1215px] mx-auto" id="case-study">
            <h2 className="text-4xl sm:text-5xl font-medium leading-none text-[var(--accent-950)] max-md:mt-10 text-center font-poppins">Case Study</h2>
            <div className="mt-16 sm:mt-24 w-full max-md:mt-10">
                <div className="flex gap-12 items-center max-md:flex-col">
                    <div className="flex-1">
                        <article className="text-base leading-8 text-[var(--accent-500)] text-opacity-80">
                            <h3 className="text-3xl max-sm:text-2xl font-medium mb-6 text-center text-[var(--accent-800)]">Common Grounds</h3>
                            <p className="mb-6">
                                Our journey began with a nonprofit called Common Grounds, whose mission is to enrich the lives of youth and adults with disabilities through quality outdoor recreation.
                            </p>
                            <p>
                                They sought a way to better understand their data to enhance the experiences they provide. By improving data accessibility, they gained deeper insights, allowing them to tailor programs more effectively to the individuals they serve.
                            </p>
                        </article>
                    </div>
                    <div className="w-full max-w-[400px] max-md:w-full">
                        <img
                            src={cgLogo}
                            alt="Common Ground Logo"
                            className="object-contain w-full aspect-[3.66]"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}; 