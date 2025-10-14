import { twMerge } from "tailwind-merge";
import { Link } from "../Link/Link";
import { MdNavigateBefore } from "react-icons/md";
import { MdNavigateNext } from "react-icons/md";

const Pagination = ({ className, ...props }: React.ComponentProps<"nav">) => {
  return <nav className={twMerge("", className)} {...props} />;
};

const PaginationContent = ({ ...props }: React.ComponentProps<"ul">) => {
  return (
    <ul
      className="flex flex-row w-full justify-center items-center gap-4"
      {...props}
    />
  );
};

const PaginationItem = ({ ...props }) => {
  return <li {...props} />;
};

const PaginationLink = ({ ...props }: React.ComponentProps<"a">) => {
  return <Link {...props} />;
};

const PaginationNext = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink {...props} className="ml-4 flex flex-row items-center">
      Next <MdNavigateNext />
    </PaginationLink>
  );
};

const PaginationPrevious = ({
  ...props
}: React.ComponentProps<typeof PaginationLink>) => {
  return (
    <PaginationLink {...props} className="mr-4 flex flex-row items-center">
      <MdNavigateBefore />
      Back
    </PaginationLink>
  );
};

export {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
};
