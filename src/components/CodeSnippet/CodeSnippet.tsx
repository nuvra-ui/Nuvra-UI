import { cva, type VariantProps } from "class-variance-authority";
import { twMerge } from "tailwind-merge";

const codeSnippetVariants = cva(
  "px-1 rounded-sm flex w-full justify-center items-center",
  {
    variants: {
      variant: {
        default: "bg-secondary text-primary border border-border",
        dark: "bg-primary text-secondary",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

const CodeSnippet = ({
  className,
  variant,
  ...props
}: React.ComponentProps<"pre"> & VariantProps<typeof codeSnippetVariants>) => {
  return (
    <pre
      className={twMerge(codeSnippetVariants({ variant }), className)}
      {...props}
    >
      console.log("Hello, world!")
    </pre>
  );
};

export { CodeSnippet };
