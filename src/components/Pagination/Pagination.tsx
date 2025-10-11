import { twMerge } from "tailwind-merge";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => {
  return <nav className={twMerge("", className)} {...props} />;
};

const PaginationContent = ({
  className,
  ...props
}: React.ComponentProps<"ul">) => {
  return <ul className={twMerge("", className)} {...props} />;
};

export { Pagination, PaginationContent };
