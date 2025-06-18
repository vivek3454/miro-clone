import { Camera, Color } from "@/types/canvas";
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

const COLORS = [
  "#FF5733", // Red-orange
  "#33C1FF", // Sky blue
  "#28A745", // Green
  "#FFC107", // Amber
  "#6F42C1", // Purple
  "#E83E8C", // Pink
  "#17A2B8", // Teal
  "#343A40", // Dark gray
  "#007BFF", // Blue
  "#DC3545", // Red
  "#20C997", // Mint
  "#6610F2", // Indigo
  "#FD7E14", // Orange
];


export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function connectionIdToColor(connectionId: number): string {
  return COLORS[connectionId % COLORS.length];
}

export function pointerEventToCanvasPoint(e: React.MouseEvent, camera: Camera) {
  if (!camera) return;
  
  return {
    x: Math.round(e.clientX) - camera.x,
    y: Math.round(e.clientY) - camera.y
  };
}

export function colorToCss(color: Color): string {
  return `#${color.r.toString(16).padStart(2, '0')}${color.g.toString(16).padStart(2, '0')}${color.b.toString(16).padStart(2, '0')}`;

}