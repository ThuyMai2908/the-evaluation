import localFont from "next/font/local";

export const neueMontrealFont = localFont({
  display: "swap",
  src: [
    {
      path: "./fonts/neue-montreal/NeueMontreal-Regular.otf",
      weight: "400",
    },
  ],
  variable: "--font-body",
});
export const neueMontrealFontMedium = localFont({
  display: "swap",
  src: [
    {
      path: "./fonts/neue-montreal/PPNeueMontreal-Medium.otf",
      weight: "500",
    },
  ],
  variable: "--font-medium",
});
