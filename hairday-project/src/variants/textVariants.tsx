import { cva } from "class-variance-authority";

export const textVariants = cva("font-sans", {
  variants: {
    variant: {
      "title-lg": "tex-[32px] leading-6 font-bold",
      "title-md-bold": "text-base leading-6 font-bold",
      "title-sm-bold": "text-sm leading-5 font-bold",
      "title-md-regular": "text-base leading-6 font-regular",
      "title-sm-regular": "text-sm leading-5 font-regular",
    },
  },
  defaultVariants: {
    variant: "title-md-bold",
  },
});
