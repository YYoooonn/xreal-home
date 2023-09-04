import { Vector3 } from "three";
import positionDataset from "./positionDataset.json";

const { positions4, positions3 } = positionDataset;

export const projects4 = positions4.map(([x, y, z]) => {
  return new Vector3(x, y, z);
});
export const projects3 = positions3.map(([x, y, z]) => {
  return new Vector3(x, y, z);
});

export const borderX = [-5, -4, 14, 15];
