"use client";
import * as React from "react";

export const BusinessFeatures: React.FC = () => {
    return (
        <>
            <link
                rel="stylesheet"
                href="https://cdn.jsdelivr.net/npm/@tabler/icons-webfont@latest/dist/tabler-icons.min.css"
            />
            <link
                href="https://fonts.googleapis.com/css2?family=Rubik:wght@400;500&display=swap"
                rel="stylesheet"
            />
            <section className="flex gap-20 px-5 py-10 mx-auto my-0 mt-24 max-w-[1200px] max-md:flex-col max-md:gap-10 max-md:items-center max-sm:p-5">
                <div className="flex-1">
                    <img
                        src="https://cdn.builder.io/api/v1/image/assets/TEMP/e365d5c797403a00f5fa6422e97b6b8ad85479b5"
                        className="w-full h-auto max-w-[428px]"
                        alt="Business diagram showing connected systems"
                    />
                </div>
                <article className="flex-1 max-w-[429px] max-md:max-w-full">
                    <h2 className="mb-6 text-4xl font-medium text-black leading-[50px] max-md:text-3xl max-md:leading-10 max-sm:text-2xl max-sm:leading-9">
                        Your business your way
                    </h2>
                    <p className="mb-8 text-base leading-8 text-gray-600 max-sm:text-sm max-sm:leading-7">
                        Lever software molds around your business systems to give you a
                        single point of data retrieval and AI business understanding.
                    </p>
                    <FeatureList />
                </article>
            </section>
        </>
    );
};

const features = [
    "Connect to all your systems",
    "Gain visibility of your businesses moving parts",
    "Make informed decisions",
    "Brainstorm ideas with AI analysis of your business",
];

export const FeatureList: React.FC = () => (
    <section className="flex flex-col gap-4">
        {features.map((feature, index) => (
            <FeatureItem key={index} text={feature} />
        ))}
    </section>
);

interface FeatureItemProps {
    text: string;
}

export const FeatureItem: React.FC<FeatureItemProps> = ({ text }) => (
    <article className="flex gap-2.5 items-center">
        <CheckIcon />
        <p className="text-sm leading-8 text-gray-600 max-sm:text-sm max-sm:leading-6">
            {text}
        </p>
    </article>
);

export const CheckIcon: React.FC = () => (
    <svg
        width="25"
        height="25"
        viewBox="0 0 25 25"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="check-icon"
        style={{ width: "24px", height: "24px" }}
    >
        <path
            d="M12.1215 2.54932C6.60746 2.54932 2.12146 7.03532 2.12146 12.5493C2.12146 18.0633 6.60746 22.5493 12.1215 22.5493C17.6355 22.5493 22.1215 18.0633 22.1215 12.5493C22.1215 7.03532 17.6355 2.54932 12.1215 2.54932ZM10.1225 16.9623L7.11691 13.9632C6.72616 13.5733 6.72537 12.9405 7.11515 12.5496C7.50517 12.1585 8.13847 12.1578 8.52939 12.548L10.1205 14.1363L14.7075 9.54932C15.0979 9.15885 15.731 9.15885 16.1215 9.54932C16.5119 9.93978 16.5119 10.5729 16.1215 10.9633L10.1225 16.9623Z"
            fill="#3CCADD"
        />
    </svg>
);



export default BusinessFeatures;
