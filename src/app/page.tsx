import { AboutMe } from "@/entities/about-me";
import { ExperienceList } from "@/entities/experience-list";
import { Header } from "@/entities/header";
import { SkillList } from "@/entities/skill-list";
import { SocialList } from "@/entities/social-list";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Рейндеву",
  description: "Фронтенд-разработчик — Павел",
  keywords:
    "фронтенд, разработчик, портфолио, Middle+, лидер команды, веб-приложения, middle+ frontend, мидл фронтенд",
};

export default function Page() {
  return (
    <div className="container mx-auto px-4 py-5">
      <Header />

      <AboutMe />

      <ExperienceList />

      <SkillList />

      <SocialList />
    </div>
  );
}
