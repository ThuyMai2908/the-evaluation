import { getResponsiveProps } from "@/lib/breakpoints/breakpoints";
import { ResponsiveProp } from "@/lib/breakpoints/types";
import { cn } from "@/lib/utils";

type AlignHorizontal =
  | "start"
  | "center"
  | "end"
  | "around"
  | "between"
  | "evenly";

type AlignVertical = "start" | "center" | "end" | "baseline" | "stretch";

type Element = "div" | "span" | "li" | "ol" | "ul";

interface FlexRowProps extends React.AriaAttributes {
  /** The content to be displayed within the row */
  children?: React.ReactNode;

  /** The HTML tag to use for the container
   * @default 'div'
   */
  as?: Element;

  /** Horizontal alignment of child elements */
  alignHorizontal?: AlignHorizontal;

  /** Vertical alignment of child elements */
  alignVertical?: AlignVertical;

  /** Spacing between child elements (responsive) */
  gap?: ResponsiveProp<number>;

  /** The unique id for the component */
  id?: string;

  /** Whether child elements should wrap onto multiple rows */
  wrap?: boolean; // Default: true

  /** Whether the row should take full width */
  fullWidth?: boolean; // Default: false

  /** Additional custom classes for styling */
  className?: string;
}

const FlexRow: React.FC<FlexRowProps> = ({
  children,
  as: Element = "div",
  alignHorizontal,
  alignVertical,
  gap,
  id,
  wrap = true,
  fullWidth = false,
  className,
}) => (
  <Element
    id={id}
    className={cn(
      "flex",
      alignHorizontal && `justify-${alignHorizontal}`,
      alignVertical && `items-${alignVertical}`,
      getResponsiveProps("gap", gap),
      wrap ? "flex-wrap" : "flex-nowrap",
      fullWidth && "w-full",
      className
    )}
  >
    {children}
  </Element>
);

export default FlexRow;
