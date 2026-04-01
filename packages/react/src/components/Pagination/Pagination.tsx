import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { cn } from "@nuvra-ui/utils";

function Pagination({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-row jusitfy-center items-center gap-8",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}
function PaginationItem({
  children,
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "flex hover:bg-gray-200 size-8 items-center justify-center rounded-sm cursor-pointer",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

function PaginationNextTrigger({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "flex hover:bg-gray-200 size-8 items-center justify-center rounded-sm cursor-pointer",
        className,
      )}
      {...props}
    >
      <IoIosArrowForward />
    </a>
  );
}

function PaginationPrevTrigger({
  className,
  ...props
}: React.ComponentProps<"a">) {
  return (
    <a
      className={cn(
        "flex hover:bg-gray-200 size-8 items-center justify-center rounded-sm cursor-pointer",
        className,
      )}
      {...props}
    >
      <IoIosArrowBack />
    </a>
  );
}

export {
  Pagination,
  PaginationItem,
  PaginationNextTrigger,
  PaginationPrevTrigger,
};
