import type React from "react";
import { type VariantProps } from "class-variance-authority";
import { buttonTextVariants, buttonVariants } from "../variants/buttonVariants";
import Text from "./text";

interface ButtonProps
  extends
    Omit<React.ComponentProps<"button">, "size" | "disabled">,
    VariantProps<typeof buttonVariants> {}

export default function Button({
  variant,
  size,
  disabled,
  className,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={buttonVariants({
        className,
        disabled,
        size,
        variant,
      })}
      {...props}
    >
      <Text variant="title-sm-bold" className={buttonTextVariants({ variant })}>
        {children}
      </Text>
    </button>
  );
}
