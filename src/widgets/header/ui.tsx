import Image from "next/image";

export const Header = () => {
  return (
    <header className="sticky top-4 flex h-fit flex-shrink-0 justify-center gap-5 lg:top-1/2 lg:-translate-y-1/2 lg:flex-col">
      <div className="mb-5 flex justify-center">
        <Image
          src="/logo_black.svg"
          alt="me"
          width="118"
          height="96"
          className="h-17 w-20 dark:hidden lg:h-24 lg:w-29.5"
        />

        <Image
          src="/logo_white.svg"
          alt="me"
          width="118"
          height="96"
          className="hidden h-17 w-20 dark:block lg:h-24 lg:w-29.5"
        />
      </div>

      <Image
        src="/me.png"
        alt="me"
        width="208"
        height="404"
        className="h-20 object-contain lg:h-auto"
      />

      <div className="flex flex-shrink-0 justify-center lg:mt-5">
        <Image
          src="/pepa_v_ahue.gif"
          alt="me"
          width="128"
          height="128"
          className="h-20 w-20 lg:h-32 lg:w-32"
        />
      </div>
    </header>
  );
};
