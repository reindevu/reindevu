import classNames from "classnames";
import { FC, HTMLAttributes } from "react";

export const LeftBorder: FC<HTMLAttributes<HTMLDivElement>> = ({
  children,
  className,
  ...props
}) => {
  return (
    <div
      className={classNames(
        "border-l border-l-4 border-l-black pl-2.5 dark:border-l-white",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
};
