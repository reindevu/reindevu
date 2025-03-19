import { ExperienceItem } from "@/entities/experience-item";
import { ProjectItem } from "@/entities/project-item";
import {
  aboutMe,
  experience,
  myEducation,
  projects,
  skills,
} from "@/shared/config/constants";
import { ContactLink, Heading, LeftBorder, Text } from "@/shared/ui";
import { Header } from "@/widgets/header";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "THRNRHHL",
  description: "Фронтенд-разработчик — Яковлев Павел",
  keywords:
    "фронтенд, разработчик, портфолио, Middle, лидер команды, веб-приложения, middle frontend, мидл фронтенд",
};

export default function Page() {
  return (
    <main className="container m-auto flex h-full min-h-screen flex-col gap-12 bg-white px-4 py-5 dark:bg-black lg:flex-row lg:px-0 lg:py-10 ">
      <Header />

      <div>
        <Heading as="h1" className="mb-2 flex flex-col text-right">
          Меня зовут Павел <br /> я фронтенд-разработчик
        </Heading>

        <section className="mt-7.5 lg:mt-12.5" aria-label="Опыт работы">
          <Heading as="h2">
            Опыт работы
            <br />3 года 2 месяца
          </Heading>

          {experience.map((key) => (
            <ExperienceItem key={key.company} {...key} />
          ))}
        </section>

        <section className="mt-7.5 lg:mt-12.5" aria-label="Навыки">
          <Heading as="h2">Навыки</Heading>

          <div className="mt-5 flex flex-wrap gap-2.5">
            {skills.map((key) => (
              <img key={key} src={key} alt="Навык" />
            ))}
          </div>
        </section>

        <section className="mt-7.5 lg:mt-12.5" aria-label="Образование">
          <Heading as="h2">Образование</Heading>

          <LeftBorder className="mt-5">
            <Text className="whitespace-break-spaces">{myEducation}</Text>
          </LeftBorder>
        </section>

        <section className="mt-7.5 lg:mt-12.5" aria-label="Обо мне">
          <Heading as="h2">Обо мне</Heading>

          <LeftBorder className="mt-5">
            <Text className="whitespace-break-spaces">{aboutMe}</Text>
          </LeftBorder>
        </section>

        <section className="mt-7.5 lg:mt-12.5" aria-label="Проекты">
          <Heading as="h2">Проекты</Heading>

          <div className="flex flex-col gap-5">
            {projects.map((key) => (
              <ProjectItem key={key.name} {...key} />
            ))}
          </div>
        </section>

        <section className="mt-7.5 lg:mt-12.5" aria-label="Контакты">
          <Heading as="h2">Контакты</Heading>

          <div className="mt-5 flex flex-col gap-5">
            <ContactLink source="https://t.me/thrnrhhl" type="1">
              Telegram
            </ContactLink>

            <ContactLink source="https://tenchat.ru/thrnrhhl" type="2">
              TenChat
            </ContactLink>

            <ContactLink source="https://github.com/thrnrhhl" type="3">
              GitHub
            </ContactLink>

            <ContactLink source="" type="4">
              thrnrhhl@yandex.ru
            </ContactLink>
          </div>
        </section>
      </div>
    </main>
  );
}
