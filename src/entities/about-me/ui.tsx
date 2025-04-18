import Image from "next/image";
import { FC } from "react";

export const AboutMe: FC = () => {
  return (
    <div className="mt-16 flex flex-col items-center gap-10 md:w-11/12 md:flex-row">
      <Image
        src="/me.png"
        alt="Me"
        width="150"
        height="480"
        className="shadow-2xl"
      />

      <p className="whitespace-pre-line text-sm uppercase text-black dark:text-white">
        Я — фронтенд-разработчик, начавший карьеру после обучения в колледже по
        специальности «Разработчик веб и мультимедийных приложений». Имею опыт
        создания систем учета, интернет-магазинов, лендингов.
        {"\n\n"} Использую современные технологии: React, Next.js, Tailwind CSS,
        TypeScript, Redux Toolkit, Zustand. Гибко подбираю инструменты (Next.js
        или React + Vite) для создания эффективных и масштабируемых
        веб-приложений.
        {"\n\n "}Работаю по методологиям Scrum и Kanban, обеспечивая
        продуктивное взаимодействие с дизайнерами, бэкенд-разработчиками и
        другими специалистами. Стремлюсь к постоянному развитию, внося вклад в
        улучшение бизнес-процессов и эффективности команды.
      </p>
    </div>
  );
};
