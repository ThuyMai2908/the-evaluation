import { ResponsiveProp } from "@/lib/breakpoints/types";

/**
 * Generates responsive class names for a given property and its values.
 * @param property - The CSS property to be applied (e.g., 'gap', 'margin').
 * @param value - A responsive prop value or a single value.
 * @returns A string with responsive class names.
 */
export const getResponsiveProps = (
  property: string,
  value?: ResponsiveProp<number>
): string | undefined => {
  if (!value) return undefined;

  if (typeof value === "number") {
    return `${property}-${value}`;
  }

  if (typeof value === "object") {
    return Object.entries(value)
      .map(([breakpoint, val]) => {
        if (val == null) return null;
        return breakpoint === "default"
          ? `${property}-${val}`
          : `${breakpoint}:${property}-${val}`;
      })
      .filter(Boolean)
      .join(" ");
  }

  return undefined;
};
