import { assets } from "@/shared/config/images";
import Image from "next/image";

export default function Page() {
    const classesP = 'text-md text-[#dfdfdf]';
    const classesH2 = 'text-[30px] text-[#dfdfdf] font-medium';

    return (
        <main className="container m-auto max-w-[500px] pb-[50px] h-full">
            <h1 className="text-[60px] text-[#dfdfdf] font-bold text-center mb-[50px]">Резюме</h1>
            <div className="flex flex-col items-center gap-[50px] mb-[30px]">
                <Image src={assets.me} alt="" width="650" height="456" className="rounded-full w-[150px] h-[150px] object-cover" />
                <h1 className="text-[40px] text-[#dfdfdf] font-bold">Яковлев Павел</h1>
            </div>

            <div className="mb-[30px]">
                <h2 className={classesH2}>💼 Профессиональный профиль:</h2>
                <p className={classesP}>
                    Я опытный фронтенд-разработчик, специализирующийся на создании высококачественных веб-приложений с использованием технологий React. С опытом работы более 3 лет, я продвинулся от уровня джуна до среднего уровня и в начале 2023 года был назначен тимлидом в команде из 9 человек.
                </p>
            </div>
            <div className="mb-[30px]">
                <h2 className={classesH2}>🛠️ Навыки и технологии:</h2>
                <div className="flex flex-col gap-y-[10px]">
                    <p className={classesP}>
                        <span className="font-medium">Фронтенд разработка: </span>
                        ReactJS, Next.js, Redux Toolkit, WebSocket, Tailwind CSS, Featured Sliced Design.
                    </p>
                    <p className={classesP}>
                        <span className="font-medium">Работа с формами: </span>
                        Formik, Yup.
                    </p>
                    <p className={classesP}>
                        <span className="font-medium">Аутентификация: </span>
                        Next-Auth.
                    </p>
                    <p className={classesP}>
                        <span className="font-medium">Серверная разработка: </span>
                        Node.js, Express.
                    </p>
                    <p className={classesP}>
                        <span className="font-medium">Node.js, Express: </span>
                        MongoDB (Mongoose), небольшой опыт работы с Prisma для MongoDB
                    </p>
                </div>
            </div>
            <div className="mb-[30px]">
                <h2 className={classesH2}>🧑‍💻 Опыт работы:</h2>
                <p className="text-md text-[#dfdfdf] mb-[15px]">
                    Тимлид и фрондент-разработчик уровня middle
                </p>

                <p className="text-md text-[#dfdfdf] mb-[15px]">
                    ООО "Экспа софтвар" - Россия, Чебоксары
                    <br />
                    📅 Март 2021 - Июль 2023
                </p>
                <div className="flex flex-col gap-y-[10px]">
                    <p className={classesP}>⚪ Работал как фронтенд-разработчик, специализирующийся на React и ванильном Javascript, и быстро продвигался по карьерной лестнице от джуна до мидл уровня.</p>
                    <p className={classesP}>⚪ Разрабатывал и поддерживал фронтенд-часть веб-приложений, используя технологии React, Next.js и Redux Toolkit.</p>
                    <p className={classesP}>⚪ Работал в тесном взаимодействии с бэкенд-разработчиками для интеграции фронтенда и бэкенда.</p>
                    <p className={classesP}>⚪ Назначен тимлидом в команде из 9 человек, ответственным за координацию работы и развитие проектов</p>
                    <p className={classesP}>⚪ Проводил код-ревью, обеспечивал соблюдение стандартов кодирования и высокого качества кода</p>
                    <p className={classesP}>⚪ Брал на себя сложные задачи и работал над ними, если кто-то из членов команды не мог справиться или требовалось быстрое решение.</p>
                    <p className={classesP}>⚪ Общался с членами команды, помогая решать технические задачи и поддерживая их профессиональное развитие.</p>
                    <p className={classesP}>⚪ В основном занимался разработкой MES-систем и учетных систем</p>
                </div>
            </div>
            <div className="mb-[30px]">
                <h2 className={classesH2}>📚 Образование:</h2>
                <div className="flex flex-col gap-y-[10px]">
                    <p className="text-md text-[#dfdfdf] font-medium text-lg">Чебоксарский электромеханический колледж</p>
                    <p className={classesP}>📅 Сентябрь 2017 - Июнь 2021</p>
                    <p className={classesP}>Специальность: Информационные технологии</p>
                    <p className={classesP}>Квалификация: Разработчик веб и мультимедийных приложений</p>
                    <p className={classesP}>Окончил с красным дипломом 🎓🟥</p>
                </div>
            </div>
            <div className="mb-[30px]">
                <h2 className={classesH2}>📞📧 Контактная информация:</h2>
                <div className="flex flex-col gap-y-[10px]">
                    <p className={classesP}>Телеграм: https://t.me/thrnrhhl</p>
                    <p className={classesP}>Электронная почта: thrnrhhl@gmail.com</p>
                </div>
            </div>
        </main>
    );
}