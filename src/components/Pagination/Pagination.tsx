import { twMerge } from "tailwind-merge";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => {
  return <nav className={twMerge("", className)} {...props} />;
};

const PaginationContent = ({ ...props }: React.ComponentProps<"ul">) => {
  return <ul className="flex flex-row items-center gap-1" {...props} />;
};

const PaginationItem = ({ ...props }) => {
  return <li {...props} />;
};

const PaginationNext = ({ ...props }: React.ComponentProps<"a">) => {
  return <a {...props}>Pagination Next</a>;
};

const PaginationPrevious = ({ ...props }: React.ComponentProps<"a">) => {
  return <a {...props}>Pagination Previous</a>;
};

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious,
};
