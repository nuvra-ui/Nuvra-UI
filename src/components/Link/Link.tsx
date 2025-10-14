import React from "react";

const Link = ({ children }: React.ComponentProps<"button">) => {
  return (
    <a className="bg-transparent text-primary hover:underline underline-offset-3">
      {children}
    </a>
  );
};

export { Link };
