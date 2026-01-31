import { cn } from "@nuvra-ui/utils";

export function Button({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      className={cn(
        "bg-primary hover:bg-primary/90 text-primary-foreground px-3 py-1 rounded-md flex justify-center items-center",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
