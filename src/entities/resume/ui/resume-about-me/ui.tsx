import Image from "next/image";
import { FC } from "react";
import Image1 from "./assets/image-1.png";

export const ResumeAboutMe: FC = () => {
  return (
    <>
      <div className="my-5 flex flex-col items-center gap-10 md:w-11/12 md:flex-row">
        <Image
          src="/me.png"
          alt="Me"
          width="220"
          height="550"
          className="shadow-2xl"
        />

        <p className="text:sm whitespace-pre-line text-justify font-black uppercase text-black dark:text-white lg:text-lg">
          Я — фронтенд-разработчик, реализующий системы учёта, интернет-магазины
          и лендинги под любые бизнес-задачи. В работе применяю React, Next.js,
          Tailwind CSS, TypeScript, Redux Toolkit и Zustand, а также гибко
          подбираю стек (Next.js или React + Vite) для обеспечения
          производительности и масштабируемости.{"\n\n"}
          Следую методологиям Scrum и Kanban, налаживая продуктивное
          взаимодействие с дизайнерами, бэкенд-разработчиками и другими
          участниками проекта. Постоянно совершенствую процессы разработки,
          отдавая приоритет качеству кода и эффективности команды.
        </p>
      </div>

      <Image
        src={Image1.src}
        width={Image1.width}
        height={Image1.height}
        alt="123"
        className="w-full"
      />
    </>
  );
};
