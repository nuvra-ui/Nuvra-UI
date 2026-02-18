import { twMerge } from "tailwind-merge";

const Label = ({
  children,
  className,
  ...props
}: React.ComponentProps<"label">) => {
  return (
    <label
      className={twMerge("text-sm text-primary flex", className)}
      {...props}
    >
      {children}
    </label>
  );
};

export { Label };
