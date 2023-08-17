import { MeshStandardMaterial, DoubleSide, MeshNormalMaterial } from "three";

// TODO 임의로 설정
export const hoveredMat = new MeshStandardMaterial();
hoveredMat.color.set("hotpink");
hoveredMat.side = DoubleSide;

export const textMat = new MeshNormalMaterial();

export const invisibleMat = new MeshStandardMaterial({
  transparent: true,
  opacity: 0,
  side: DoubleSide,
});

export const projectTextMat = new MeshStandardMaterial({
  color: "#ffffff",
  side: DoubleSide,
});
