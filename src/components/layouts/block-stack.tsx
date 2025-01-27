import { getResponsiveProps } from "@/lib/breakpoints/breakpoints";
import { ResponsiveProp } from "@/lib/breakpoints/types";
import { cn } from "@/lib/utils";

import React from "react";

type AlignHorizontal =
  | "start"
  | "center"
  | "end"
  | "around"
  | "between"
  | "evenly";

type AlignVertical =
  | "start"
  | "center"
  | "end"
  | "baseline"
  | "stretch"
  | "between"
  | "evenly";

type Element = "div" | "span" | "ul" | "ol" | "li" | "fieldset";

interface BlockStackProps extends React.AriaAttributes {
  children?: React.ReactNode;
  /** HTML Element type
   * @default 'div'
   */
  as?: Element;
  alignHorizontal?: AlignHorizontal;
  alignVertical?: AlignVertical;
  gap?: ResponsiveProp<number>;
  id?: string;
  /** Reverse the render order of child items
   * @default false
   */
  reverseOrder?: boolean;
  fullHeight?: boolean;
  className?: string;
}

const BlockStack: React.FC<BlockStackProps> = ({
  as: Element = "div",
  alignHorizontal,
  alignVertical,
  gap = undefined,
  id,
  children,
  reverseOrder = false,
  fullHeight = false,
  className,
  ...restProps
}) => (
  <Element
    id={id}
    className={cn(
      "flex flex-col",
      alignHorizontal && `justify-${alignHorizontal}`,
      alignVertical && `items-${alignVertical}`,
      getResponsiveProps("gap", gap),
      reverseOrder && "flex-col-reverse",
      fullHeight && "h-full",
      className
    )}
    {...restProps}
  >
    {children}
  </Element>
);

export default BlockStack;
