import { ResumeAboutMe, ResumeExperience, ResumeHeader, ResumeSkill, ResumeSocial } from "@/entities/resume";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Рейндеву",
  description: "Фронтенд-разработчик — Павел",
  keywords:
    "фронтенд, разработчик, портфолио, Middle+, лидер команды, веб-приложения, middle+ frontend, мидл фронтенд",
};
//437a7b 74aa9b
export default function Page() {
  return (
    <div className="container mx-auto px-4 py-5">
      <ResumeHeader />

      <div className="my-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="auto"
          height="auto"
          fill="none"
          viewBox="0 0 2151 389"
        >
          <path
            fill="#d8741f"
            d="M0 389V0h233v233H130.5v156zM1096 301v88h233v-87h-15L1282.22 0h-139.14L1111 301zM822 389V0h88v140.08h57V0h88v389h-88V267.564h-57V389zM1877 389h-233V0h192.17v206.672H1877zM274 389V0h233v218H362v83h145v88zM1370 389V0h233v218h-145v83h145v88zM2151 389V0h-233v218h145v83h-145v88zM548 389V0h88v208h57V0h88v389z"
          ></path>
        </svg>
      </div>

      <ResumeAboutMe />

      <ResumeExperience />

      <ResumeSkill />

      <ResumeSocial />
    </div>
  );
}
