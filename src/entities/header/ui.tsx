import { FC } from "react";

export const Header: FC = () => {
  return (
    <div className="flex w-full items-center gap-4 md:gap-10">
      <div className="h-12 w-full rounded-l-full bg-black shadow-2xl md:h-16" />

      <h1 className="font-heading text-lg font-black uppercase md:text-2xl">
        Рейндеву
      </h1>

      <div className="h-12 w-full rounded-r-full bg-black shadow-2xl md:h-16" />
    </div>
  );
};
