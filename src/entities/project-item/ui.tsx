import { Text } from "@/shared/ui";
import { FC } from "react";

interface ProjectItemProps {
  img: string;
  name: string;
  description: string;
}

export const ProjectItem: FC<ProjectItemProps> = ({
  img,
  name,
  description,
}) => {
  return (
    <div className="flex flex-col items-center lg:flex-row">
      <img src={img} alt="karnast" className="w-full max-w-156.25" />
      <div>
        <Text className="mb-2.5">{name}</Text>
        <Text>{description}</Text>
      </div>
    </div>
  );
};
