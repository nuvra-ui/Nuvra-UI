import type React from "react";
import { twMerge } from "tailwind-merge";

const Button = ({
  className,
  children,
  ...props
}: React.ComponentProps<"button">) => {
  return (
    <button className={twMerge(className)} {...props}>
      {children}
    </button>
  );
};

export default Button;
