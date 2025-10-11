import { twMerge } from "tailwind-merge";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => {
  return <nav className={twMerge("", className)} {...props} />;
};

const PaginationContent = ({ ...props }: React.ComponentProps<"ul">) => {
  return <ul {...props} />;
};

const PaginationItem = ({ ...props }) => {
  return <li {...props} />;
};

export { Pagination, PaginationContent, PaginationItem };
