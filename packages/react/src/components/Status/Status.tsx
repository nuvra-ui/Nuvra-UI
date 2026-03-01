import { cn } from "@nuvra-ui/utils";

export function Status({
  className,
  children,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div className={cn("rounded-full w-[6px] h-[6px] bg-success", className)} />
  );
}
