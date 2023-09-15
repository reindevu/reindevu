import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

interface ContactLinkProps extends HTMLAttributes<HTMLAnchorElement> {
  source: string;
  type: "1" | "2" | "3" | "4";
}

export const ContactLink: FC<ContactLinkProps> = ({
  children,
  className,
  source,
  type,
  ...props
}) => {
  return (
    <a
      href={source}
      target="_blank"
      className={classNames(
        "block border-l border-l-4 pl-2.5 text-xs font-bold uppercase text-black dark:text-white lg:text-sm",
        {
          "border-l-[#2ea6d9]": type === "1",
          "border-l-[#fc3234]": type === "2",
          "border-l-[#242424]": type === "3",
          "border-l-[orange]": type === "4",
        },
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};
