import { cn } from "@nuvra-ui/utils";

function Card({ children, className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      className={cn(
        "flex flex-col bg-secondary w-80 rounded-md border border-border shadow-xs",
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
    <p className={cn("pt-1 px-3 font-semibold text-2xl", className)} {...props}>
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
    <div className={cn("px-3", className)} {...props}>
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
    <div className={cn("p-1 px-3 text-sm", className)} {...props}>
      {children}
    </div>
  );
}

export { Card, CardContent, CardHeader, CardFooter };
