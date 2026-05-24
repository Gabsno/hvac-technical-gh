import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPhone(p: string) {
  return p.replace(/(\d{4})(\d{3})(\d{3})/, "$1 $2 $3");
}
