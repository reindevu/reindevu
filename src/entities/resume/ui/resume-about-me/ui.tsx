import Image from "next/image";
import { FC } from "react";
import Image1 from "./assets/image-1.png";
import Image2 from "./assets/image-2.png";
import Image3 from "./assets/image-3.png";

export const ResumeAboutMe: FC = () => {
  return (
    <>
      <div className="my-5 flex flex-col gap-5 items-center w-full md:flex-row">
        <Image
          src={Image2.src}
          alt="Me"
          width={Image2.width/4}
          height={Image2.height/4}
          className="shadow-2xl w-full lg:w-auto lg:h-auto object-cover hidden lg:block"
        />

        <Image
          src={Image3.src}
          alt="Me"
          width={Image3.width}
          height={Image3.height}
          className="w-full object-cover block lg:hidden"
        />

        <p className="text-xs whitespace-pre-line text-justify font-black uppercase text-black dark:text-white lg:text-lg">
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
