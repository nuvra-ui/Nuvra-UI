import { twMerge } from "tailwind-merge";
import Button from "../Button/Button";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => {
  return <nav className={twMerge("", className)} {...props} />;
};

const PaginationContent = ({ ...props }: React.ComponentProps<"ul">) => {
  return <ul className="flex flex-row w-full items-center gap-1" {...props} />;
};

const PaginationItem = ({ ...props }) => {
  return <li {...props} />;
};

const PaginationLink = ({ ...props }: React.ComponentProps<"button">) => {
  return <Button size="icon" {...props} />;
};

const PaginationNext = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  return <Button {...props}>{"Next >"}</Button>;
};

const PaginationPrevious = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  return <Button {...props}>{"< Previous"}</Button>;
};

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
