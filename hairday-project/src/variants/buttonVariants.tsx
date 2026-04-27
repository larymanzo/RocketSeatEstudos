import { cva } from "class-variance-authority";

export const buttonVariants = cva(
  "flex items-center justify-center cursor-pointer transition rounded-lg group gap-2 w-96",
  {
    variants: {
      variant: {
        primary: "bg-yellow hover:border-yellow-light",
      },
      size: {
        md: "h-16 py-4 px-5",
      },
      disabled: {
        true: "opacity-30 pointer-events-none",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      disabled: false,
    },
  },
);

export const buttonTextVariants = cva("", {
  variants: {
    variant: {
      primary: "text-gray-900",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});