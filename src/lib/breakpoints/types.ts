/**
 * A type representing responsive properties for various breakpoints.
 * Example usage:
 * - Single value: 4
 * - Responsive object: { default: 4, md: 6, lg: 8 }
 */
export type ResponsiveProp<BreakpointValue> =
  | BreakpointValue
  | {
      default?: BreakpointValue;
      sm?: BreakpointValue;
      md?: BreakpointValue;
      lg?: BreakpointValue;
      xl?: BreakpointValue;
      "2xl"?: BreakpointValue;
    };
