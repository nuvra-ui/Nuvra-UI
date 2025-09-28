import type React from "react";

const Button = ({ children, ...props }: React.ComponentProps<"button">) => {
  return <button {...props}>{children}</button>;
};

export default Button;
