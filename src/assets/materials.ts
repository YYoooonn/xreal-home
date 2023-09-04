import { MeshStandardMaterial, DoubleSide } from "three";

export const hoveredMat = new MeshStandardMaterial({
  emissive: "#7AF7B5",
  emissiveIntensity: 1,
  side: DoubleSide,
});

// TODO 임의로 설정
export const textMat = new MeshStandardMaterial({ color: "#FFFFFF" });

export const invisibleMat = new MeshStandardMaterial({
  transparent: true,
  opacity: 0,
  side: DoubleSide,
});

export const projectTextMat = new MeshStandardMaterial({
  color: "#ffffff",
  side: DoubleSide,
});

export const borderMat = new MeshStandardMaterial({
  color: "#1C2F27",
  side: DoubleSide,
});
