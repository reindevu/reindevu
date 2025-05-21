import { skills } from "@/shared/config/constants";
import { FC } from "react";

export const ResumeSkill: FC = () => {
  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {skills.map((key) => (
        <img key={key} src={key} alt="Навык" />
      ))}
    </div>
  );
};
