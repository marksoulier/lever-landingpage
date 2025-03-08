import React from "react";

interface TeamMemberProps {
  name: string;
  role: string;
  email: string;
  linkedin: string;
  image: string;
}

export const TeamMember: React.FC<TeamMemberProps> = ({
  name,
  role,
  email,
  linkedin,
  image,
}) => {
  const linkedinUrl = linkedin.startsWith('http') ? linkedin : `https://${linkedin}`;

  return (
    <article className="flex flex-col grow items-center text-base leading-8 text-black max-md:mt-10">
      <img
        src={image}
        alt={name}
        className="object-cover max-w-full rounded-full aspect-[1.09] w-[180px] h-[180px] object-center"
        style={{ objectPosition: 'top' }}
      />
      <h3 className="mt-5 text-2xl leading-tight">{name}</h3>
      <p className="mt-7">{role}</p>
      <a href={`mailto:${email}`} className="mt-2 underline hover:text-sky-600">
        {email}
      </a>
      <a
        href={linkedinUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="self-stretch mt-2 hover:text-sky-600"
      >
        {linkedin}
      </a>
    </article>
  );
};
