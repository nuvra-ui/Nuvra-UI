import { cn } from "@nuvra-ui/utils";

export function Badge({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "bg-primary text-primary-foreground text-sm px-3 py-1 rounded-full",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
