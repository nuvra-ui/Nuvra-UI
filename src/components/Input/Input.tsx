import { twMerge } from "tailwind-merge";

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <input
      className={twMerge(
        "bg-secondary w-full h-11 p-3 text-sm border placeholder:text-primary-foreground border-border focus:border-primary outline-none rounded-sm",
        className
      )}
      type={type}
      {...props}
    />
  );
};

export { Input };
