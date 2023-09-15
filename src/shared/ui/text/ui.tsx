import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

export const Text: FC<HTMLAttributes<HTMLParagraphElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <p
      className={classNames(
        "text-xs font-bold uppercase text-black dark:text-white lg:text-sm",
        className,
      )}
      {...props}
    >
      {children}
    </p>
  );
};
