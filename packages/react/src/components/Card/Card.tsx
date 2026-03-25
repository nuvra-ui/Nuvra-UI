import { cn } from "@nuvra-ui/utils";

function Card({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col bg-secondary w-80 rounded-md border border-secondary-foreground",
        className,
      )}
      {...props}
    >
      {children}
    </div>
  );
}

function CardHeader({
  children,
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p className={cn("pt-3 px-3 font-semibold text-2xl", className)} {...props}>
      {children}
    </p>
  );
}

function CardContent({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("py-3 px-3 text-justify", className)} {...props}>
      {children}
    </div>
  );
}

function CardFooter({
  children,
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div className={cn("pb-3 px-3 text-sm", className)} {...props}>
      {children}
    </div>
  );
}

export { Card, CardContent, CardHeader, CardFooter };
