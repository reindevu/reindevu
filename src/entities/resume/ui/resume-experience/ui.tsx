import { experiences } from "@/shared/config/constants";
import { FC } from "react";

export const ResumeExperience: FC = () => {
  const borderLeftColors = ["#74AA9B", "#D8741F", "#087EA4", "#00D359"];

  return (
    <div className="mt-5 flex flex-col gap-5">
      {experiences.map((exp, index) => (
        <div
          key={index}
          className="border-l-[0.5rem] border-l-black px-4 pb-0 text-black dark:border-l-white dark:text-white lg:border-l-[1rem]"
          style={{ borderLeftColor: borderLeftColors[index] }}
        >
          <h3
            className="font-heading text-xs font-black uppercase lg:text-xl"
            style={{ color: borderLeftColors[index] }}
          >
            {exp.company}
          </h3>

          <p className="font-heading text-xs font-black uppercase lg:text-base">
            {exp.position}
          </p>

          <p className="font-heading text-xs font-black uppercase lg:text-base">
            {exp.duration}
          </p>

          <p className="mt-2 whitespace-pre-line text-xs uppercase lg:text-sm">
            {exp.responsibilities}
          </p>
        </div>
      ))}
    </div>
  );
};
