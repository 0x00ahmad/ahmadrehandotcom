import Root from "./button.svelte";
import { tv, type VariantProps } from "tailwind-variants";
import type { Button as ButtonPrimitive } from "bits-ui";
import { cn } from "$lib/ui.utils";
import { TRANSITION_ALL } from "$lib/utils/theme.constants";

const buttonVariants = tv({
  base: cn(
    "inline-flex items-center justify-center rounded-md whitespace-nowrap ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
    TRANSITION_ALL,
  ),
  variants: {
    variant: {
      default:
        "bg-vviolet-950 text-brussian-200 drop-shadow-sm shadow-[inset_0_0_14px_0_rgba(72,33,178,1)] hover:shadow-[inset_0_0_14px_0_rgba(89,37,221,1)] active:shadow-[inset_0_0_14px_0_rgba(89,37,221,1)]",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
      tertiary:
        "bg-white bg-opacity-10 text-slate-50 drop-shadow-sm shadow-[inset_0_0_14px_0_rgba(255,255,255,0.3)] hover:shadow-[inset_0_0_14px_0_rgba(255,255,255,0.4)] active:shadow-[inset_0_0_14px_0_rgba(255,255,255,0.4)]",
      destructive:
        "bg-destructive text-destructive-foreground hover:bg-destructive/90",
      outline:
        "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
      ghost: "hover:bg-accent hover:text-accent-foreground",
      link: "text-primary underline-offset-4 hover:underline",
    },
    size: {
      default: "h-10 px-4 py-2",
      sm: "h-9 rounded-md px-3",
      lg: "h-11 rounded-md px-8",
      icon: "h-10 w-10",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

type Variant = VariantProps<typeof buttonVariants>["variant"];
type Size = VariantProps<typeof buttonVariants>["size"];

type Props = ButtonPrimitive.Props & {
  variant?: Variant;
  size?: Size;
};

type Events = ButtonPrimitive.Events;

export {
  Root,
  type Props,
  type Events,
  //
  Root as Button,
  type Props as ButtonProps,
  type Events as ButtonEvents,
  buttonVariants,
};
