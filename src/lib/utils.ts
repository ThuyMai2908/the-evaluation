import { NEXT_PUBLIC_APP_ENV } from "@/config/common";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function isProduction(): boolean {
  return NEXT_PUBLIC_APP_ENV === "production";
}
