import Image from "next/image";
import Link from "next/link";
import { FC } from "react";

export const SocialList: FC = () => {
  return (
    <div className="mt-12 flex flex-col items-center md:mt-16">
      <p className="text-xs font-medium uppercase text-neutral-400">
        Социальные сети
      </p>

      <div className="mx-auto mt-2 flex w-full items-center justify-center gap-2">
        <Link href="https://github.com/reindevu">
          <Image src="/social/github.png" alt="GitHub" width="40" height="40" />
        </Link>

        <Link href="https://hh.ru/resume/3c558fa1ff0c3a15480039ed1f7366624c547a">
          <Image src="/social/hh.png" alt="HH" width="40" height="40" />
        </Link>

        <Link href="https://set.ki/N8BhFXx">
          <Image src="/social/setka.png" alt="Setka" width="40" height="40" />
        </Link>

        <Link href="https://tenchat.ru/reindevu">
          <Image src="/social/tenchat.webp" alt="Tenchat" width="40" height="40" />
        </Link>

        <Link href="https://t.me/reindevu">
          <Image src="/social/telegram.png" alt="Telegram" width="40" height="40" />
        </Link>
      </div>
    </div>
  );
};
