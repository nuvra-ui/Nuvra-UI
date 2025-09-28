import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "rounded-lg text-base flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-black text-white hover:bg-black/85",
        link: "bg-transparent text-black hover:underline underline-offset-3",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 py-1 text-sm rounded-md",
        lg: "h-11 px-6 py-3 text-xl font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

const Button = ({
  className,
  variant,
  size,
  children,
  ...props
}: React.ComponentProps<"button"> & VariantProps<typeof buttonVariants>) => {
  return (
    <button
      className={twMerge(buttonVariants({ variant, size }), className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
