import classNames from "classnames";
import React, { HTMLAttributes } from "react";
import { FC } from "react";

interface HeadingProps extends HTMLAttributes<HTMLHeadingElement> {
  as: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

export const Heading: FC<HeadingProps> = ({
  as = "h1",
  className,
  children,
  ...props
}) => {
  return React.createElement(
    as,
    {
      className: classNames(
        "text-black dark:text-white font-heading font-black uppercase",
        {
          "text-4xl lg:text-5xl": as === "h1",
          "text-2xl lg:text-3xl": as === "h2",
        },
        className,
      ),
      ...props,
    },
    children,
  );
};
