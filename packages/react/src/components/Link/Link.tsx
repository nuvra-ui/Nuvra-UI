import { cn } from "@nuvra-ui/utils";

export function Link({
  className,
  children,
  ...props
}: React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  return (
    <a className={cn("", className)} {...props}>
      {children}
    </a>
  );
}
