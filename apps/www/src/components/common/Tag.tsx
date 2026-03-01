import { twMerge } from "tailwind-merge";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Tag = ({ children, className }: Props) => {
  return (
    <div
      className={twMerge(
        "h-10 px-6 flex flex-row justify-center items-center rounded-full bg-gray-200 border border-gray-300 text-sm font-medium text-gray-700",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Tag;
