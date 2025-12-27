<script setup lang="ts">
import { twMerge } from "tailwind-merge";
import { cva, type VariantProps } from "class-variance-authority";

const buttonVariants = cva(
  "rounded-lg text-base flex items-center justify-center",
  {
    variants: {
      variant: {
        default: "bg-primary text-secondary hover:bg-primary/85",
        ghost: "bg-transparent hover:bg-primary/5",
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 px-3 py-1 text-sm rounded-md",
        lg: "h-11 px-6 py-3 text-xl font-semibold",
        icon: "size-9 p-1",
      },
    },
  },
);

type ButtonProps = VariantProps<typeof buttonVariants>;

withDefaults(
  defineProps<{
    variant: ButtonProps["variant"];
    size: ButtonProps["size"];
  }>(),
  {
    variant: "default",
    size: "default",
  },
);
</script>

<template>
  <button :class="twMerge(buttonVariants({ variant, size }), '')">
    <slot />
  </button>
</template>
