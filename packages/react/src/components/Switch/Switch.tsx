import { cn } from "@nuvra-ui/utils";

export function Switch({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <label className="inline-flex cursor-pointer">
      <input type="checkbox" className="appearance-none peer" {...props} />
      <div
        className={cn(
          "relative w-9 h-5 bg-gray-500 rounded-full flex peer-checked:bg-success peer-checked:after:translate-x-full after:transition-all after:absolute after:top-[2px] after:start-[2px] after:bg-white after:rounded-full after:h-4 after:w-4",
          className
        )}
      />
    </label>
  );
}
