import { cn } from "@nuvra-ui/utils";
import { IoIosArrowForward } from "react-icons/io";

function Breadcrumb({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-row items-center text-gray-600 gap-2",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function BreadcrumbItem({
  currentItem,
  children,
  className,
  ...props
}: React.ComponentProps<"a"> & { currentItem?: boolean }) {
  return (
    <a
      className={cn(
        "underline-offset-4 hover:underline flex flex-row items-center justify-center gap-1",
        currentItem ? "text-primary" : "",
        className,
      )}
      {...props}
    >
      {children}
    </a>
  );
}

function BreadcrumbSeparator({
  className,
  ...props
}: React.ComponentProps<"span">) {
  return (
    <span className={cn("", className)} {...props}>
      <IoIosArrowForward />
    </span>
  );
}

export { Breadcrumb, BreadcrumbItem, BreadcrumbSeparator };
