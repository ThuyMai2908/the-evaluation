import { getResponsiveProps } from "@/lib/breakpoints/breakpoints";
import { ResponsiveProp } from "@/lib/breakpoints/types";
import { cn } from "@/lib/utils";
import { HTMLProps } from "react";

interface SectionProps extends HTMLProps<HTMLDivElement> {
  children?: React.ReactNode;
  background?: string;
  className?: string;
  marginBottom?: ResponsiveProp<number>;
  gap?: ResponsiveProp<number>;
  container?: boolean;
}

const Section: React.FC<SectionProps> = ({
  children,
  background,
  className,
  //   marginBottom = { base: 16, xl: 28 },
  gap,
  container = false,
  ...restProps
}) => {
  return (
    <section
      className={cn(
        "flex flex-col w-full",
        container && "container",
        // getResponsiveProps("mb", marginBottom),
        getResponsiveProps("gap", gap),
        className
      )}
      {...restProps}
    >
      {children}
    </section>
  );
};

export default Section;
