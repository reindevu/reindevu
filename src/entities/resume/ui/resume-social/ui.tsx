import { Github } from "lucide-react";
import Link from "next/link";
import { FC } from "react";

export const ResumeSocial: FC = () => {
  return (
    <div className="mx-auto mt-10 flex w-full items-center justify-center gap-2">
      <Link href="https://github.com/reindevu">
        <Github className="h-10 w-10 text-black dark:text-white" />
      </Link>
    </div>
  );
};
