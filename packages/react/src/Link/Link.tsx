import React from "react";
import { twMerge } from "tailwind-merge";

const Link = ({ className, children, ...props }: React.ComponentProps<"a">) => {
  return (
    <a
      className={twMerge(
        "bg-transparent text-primary hover:underline underline-offset-3",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
};

export { Link };
