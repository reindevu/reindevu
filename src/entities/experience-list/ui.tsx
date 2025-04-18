import { experiences } from "@/shared/config/constants";
import { FC } from "react";

export const ExperienceList: FC = () => {
  return (
    <div className="mt-10 flex flex-col gap-4">
      {experiences.map((exp, index) => (
        <div key={index} className="border-l-[3px] border-l-black px-4 pb-0 dark:text-white">
          <h3 className="text-base font-bold uppercase">{exp.company}</h3>

          <p className="text-sm font-bold uppercase">{exp.position}</p>

          <p className="text-sm font-bold uppercase">{exp.duration}</p>

          <p className="mt-2 whitespace-pre-line text-sm uppercase">
            {exp.responsibilities}
          </p>
        </div>
      ))}
    </div>
  );
};
