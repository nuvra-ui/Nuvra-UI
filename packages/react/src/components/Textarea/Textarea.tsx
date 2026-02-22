import { cn } from "@nuvra-ui/utils";

export function Textarea({
  className,
  ...props
}: React.TextareaHTMLAttributes<HTMLTextAreaElement>) {
  return (
    <textarea
      className={cn(
        "text-sm block rounded-md border border-primary/40 bg-secondary focus:outline-none p-1 focus:ring-2 focus:ring-primary/40 focus:border-none",
        className
      )}
      {...props}
    ></textarea>
  );
}
