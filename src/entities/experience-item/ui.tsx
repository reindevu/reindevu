import { LeftBorder, Text } from "@/shared/ui";
import { FC } from "react";

interface ExperienceItemProps {
  company: string;
  city: string;
  position: string;
  date: string;
  description: string;
}

export const ExperienceItem: FC<ExperienceItemProps> = ({
  company,
  city,
  position,
  date,
  description,
}) => {
  return (
    <LeftBorder className="mt-4 lg:mt-5">
      <Text>{company}</Text>
      <Text>{city}</Text>
      <Text>{position}</Text>
      <Text>{date}</Text>
      <Text className="mt-4 whitespace-break-spaces">{description}</Text>
    </LeftBorder>
  );
};
