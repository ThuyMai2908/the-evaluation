import React from "react";
import type { ReactNode } from "react";
import { VariantProps, cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
import { getResponsiveProps } from "@/lib/breakpoints/breakpoints";
import { ResponsiveProp } from "@/lib/breakpoints/types";

const typographyVariants = cva("m-0 text-inherit whitespace-pre-wrap", {
  variants: {
    variant: {
      pageHeading:
        "text-beige text-[32px] md:text-[64px] leading-1.2 font-medium font-fontNeueMedium",
      titleSection:
        "text-brown text-[48px] md:text-[64px] leading-1.2 font-normal font-body",
      titleSm: "text-beige text-[24px] leading-1.2 font-medium font-body",
      bodyLg: "text-brown text-[32px] xl:text-[48px] leading-1.2 font-body",
      body: "text-brown text-[18px] leading-1.5 font-body",
      bodySm:
        "text-brown text-[18px] md:text-[24px] font-medium leading-1.2 font-body",
      menu: "text-beige text-[30px] lg:text-[32px] font-medium leading-1.2 font-body",
      tag: "text-beige text-[10px] font-medium font-body",
    },
    alignment: {
      default: "",
      start: "text-start",
      center: "text-center",
      end: "text-end",
      justify: "text-justify",
    },
    fontWeight: {
      default: "",
      light: "font-light",
      normal: "font-normal",
      medium: "font-medium",
      semibold: "font-semibold",
      bold: "font-bold",
    },
    tone: {
      default: "",
      accent: "text-grey",
      primary: "text-brown",
      secondary: "text-beige",
    },
    textDecorationLine: {
      default: "",
      lineThrough: "line-through",
    },
    textTransform: {
      default: "",
      uppercase: "uppercase",
      capitalize: "capitalize",
      lowercase: "lowercase",
    },
  },
  defaultVariants: {
    variant: "body",
    fontWeight: "default",
    alignment: "default",
    tone: "default",
    textDecorationLine: "default",
  },
});

export interface TextProps extends VariantProps<typeof typographyVariants> {
  /** The element type */
  as?:
    | "dt"
    | "dd"
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "p"
    | "span"
    | "strong"
    | "legend";
  /** Prevent text from overflowing */
  breakWord?: boolean;
  /** Text to display */
  children?: ReactNode;
  /** HTML id attribute */
  id?: string;
  /** Use a numeric font variant with monospace appearance */
  numeric?: boolean;
  /** Truncate text overflow with ellipsis */
  truncate?: boolean;
  /** Visually hide the text */
  visuallyHidden?: boolean;
  lineClamp?: ResponsiveProp<number>;
}

export const Typography: React.FC<TextProps> = ({
  alignment,
  as = "span",
  breakWord,
  children,
  tone,
  fontWeight,
  id,
  numeric = false,
  truncate = false,
  variant,
  visuallyHidden = false,
  textDecorationLine,
  textTransform,
  lineClamp,
}) => {
  const Component = as || (visuallyHidden ? "span" : "p");

  return (
    <Component
      className={cn(
        typographyVariants({
          variant,
          fontWeight,
          alignment,
          tone,
          textDecorationLine,
          textTransform,
        }),
        breakWord && "break-words",
        numeric && "tabular-nums lining-nums",
        truncate && "text-ellipsis overflow-hidden whitespace-nowrap",
        visuallyHidden && "hidden",
        lineClamp && getResponsiveProps("line-clamp", lineClamp)
      )}
      {...(id && { id })}
    >
      {children}
    </Component>
  );
};
