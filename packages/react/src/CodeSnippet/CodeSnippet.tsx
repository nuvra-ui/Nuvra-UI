import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const codeSnippetVariants = cva("flex w-full justify-center items-center", {
  variants: {
    variant: {
      default: "bg-secondary text-primary border border-border",
      dark: "bg-primary text-secondary",
    },
    size: {
      default: "px-1 rounded-sm",
      sm: "px-1 rounded-xs text-xs",
      lg: "px-2 py-1 rounded-md text-xl",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

const CodeSnippet = ({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<"pre"> & VariantProps<typeof codeSnippetVariants>) => {
  return (
    <pre
      className={twMerge(codeSnippetVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </pre>
  );
};

export { CodeSnippet };
