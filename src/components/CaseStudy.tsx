import React from "react";

interface CaseStudyItemProps {
    title: string;
    description: string;
    details: string;
    emoji: string;
    isReversed?: boolean;
}

const CaseStudyItem: React.FC<CaseStudyItemProps> = ({ title, description, details, emoji, isReversed = false }) => {
    const contentSection = (
        <div className="flex-1">
            <article className="text-base leading-8 text-[var(--accent-500)] text-opacity-80">
                <h3 className="text-3xl max-sm:text-2xl font-medium mb-6 text-center text-[var(--accent-800)]">{title}</h3>
                <p className="mb-6">{description}</p>
                <p>{details}</p>
            </article>
        </div>
    );

    const imageSection = (
        <div className="w-full max-w-[400px] max-md:w-full">
            <div className="bg-gradient-to-br from-[var(--primary-100)] to-[var(--secondary-100)] rounded-2xl p-8 flex items-center justify-center h-64">
                <div className="text-6xl">{emoji}</div>
            </div>
        </div>
    );

    return (
        <div className="mt-16 sm:mt-24 w-full max-md:mt-10">
            <div className={`flex gap-12 items-center max-md:flex-col ${isReversed ? 'flex-row-reverse' : ''}`}>
                {contentSection}
                {imageSection}
            </div>
        </div>
    );
};

export const CaseStudy = () => {
    const cases = [
        {
            title: "Rent vs. Buy Decision",
            description: "Sarah is deciding whether to rent for three years or buy a home now. Using Lever, she models both paths with real mortgage rates, rent growth projections, and home appreciation estimates.",
            details: "She also accounts for opportunity cost—how much her unused down payment could grow if invested instead. After comparing the long-term impact on her net worth, she can make a decision based on full financial tradeoffs, not just monthly payments.",
            emoji: "🏠"
        },
        {
            title: "Early Retirement Planning",
            description: "Michael wants to retire by 55 but isn't sure if it's realistic. With Lever, he maps out his income, savings rate, investment returns, and projected expenses over the next 20 years.",
            details: "By simulating different scenarios with varying investment returns and spending patterns, he discovers he needs to increase his savings rate by 8% or push his retirement date back by two years to maintain his desired lifestyle.",
            emoji: "🌴"
        },
        {
            title: "Retirement Account Strategy",
            description: "Emma is weighing whether to contribute more to her 401(k) or a Roth IRA. She uses Lever to model both options using her current tax bracket, expected future tax rates, and contribution limits.",
            details: "The timeline comparison shows that while the 401(k) offers immediate tax benefits, the Roth IRA's tax-free withdrawals would give her more usable money in retirement given her expected income growth.",
            emoji: "📊"
        }
    ];

    return (
        <section className="mt-16 sm:mt-24 px-4 sm:px-8 max-w-[1215px] mx-auto" id="case-study">
            <h2 className="text-4xl sm:text-5xl font-medium leading-none text-[var(--accent-950)] max-md:mt-10 text-center font-poppins">Real Use Cases</h2>
            {cases.map((caseStudy, index) => (
                <CaseStudyItem
                    key={caseStudy.title}
                    {...caseStudy}
                    isReversed={index % 2 === 1}
                />
            ))}
        </section>
    );
}; 