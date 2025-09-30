import { twMerge } from "tailwind-merge";

const Input = ({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) => {
  return (
    <input
      className={twMerge(
        "w-full h-11 p-3 text-sm border placeholder:text-black bg-gray-50 border-gray-400 focus:ring-2 focus:ring-gray-600 focus:border-none outline-none rounded-sm",
        className
      )}
      type={type}
      {...props}
    />
  );
};

export { Input };
