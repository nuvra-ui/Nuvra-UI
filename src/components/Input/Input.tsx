import { twMerge } from "tailwind-merge";

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <input
      className={twMerge(
        "w-full h-11 p-3 text-sm border placeholder:text-gray-700 border-gray-400 focus:border-gray-800 outline-none rounded-sm",
        className
      )}
      type={type}
      {...props}
    />
  );
};

export { Input };
