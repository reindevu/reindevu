import { FC } from "react";

export const ResumeHeader: FC = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="flex w-full justify-between">
        <div className="font-heading text-[1.375rem] font-black uppercase leading-4 text-[#087ea4] lg:text-6xl">
          Фронтенд
        </div>

        <div className="font-heading text-[1.375rem] font-black uppercase leading-4 text-[#00D359] lg:text-6xl">
          Фуллстак
        </div>
      </div>
    </div>
  );
};
