import { cva, type VariantProps } from "class-variance-authority";
import type React from "react";
import { twMerge } from "tailwind-merge";

const buttonVariants = cva(
  "rounded-lg text-base flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-secondary hover:bg-primary/85",
        link: "bg-transparent text-primary hover:underline underline-offset-3",
        ghost: "bg-transparent hover:bg-primary/5",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 py-1 text-sm rounded-md",
        lg: "h-11 px-6 py-3 text-xl font-semibold",
        icon: "size-9 p-1",
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
