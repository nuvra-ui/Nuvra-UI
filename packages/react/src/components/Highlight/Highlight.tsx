import { cn } from "@nuvra-ui/utils";

export function Highlight({
  className,
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLSpanElement>) {
  return (
    <span
      className={cn(
        "px-2 py-1 rounded-sm bg-orange-500/35 text-orange-500 font-semibold",
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
