import { MeshStandardMaterial, DoubleSide, MeshNormalMaterial } from "three";

// TODO 임의로 설정
export const hoveredMaterial = new MeshStandardMaterial();
hoveredMaterial.color.set("hotpink");
hoveredMaterial.side = DoubleSide;

export const textMat = new MeshNormalMaterial();
