import { skills } from "@/shared/config/constants";
import { FC } from "react";

export const SkillList: FC = () => {
  return (
    <div className="mt-12 flex flex-wrap gap-2 md:mt-16">
      {skills.map((key) => (
        <img key={key} src={key} alt="Навык" />
      ))}
    </div>
  );
};
