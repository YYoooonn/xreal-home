import { Vector3 } from "three";
import positionDataset from "./positionDataset.json";

const { positions } = positionDataset;

export default positions.map(([x, y, z]) => {
  return new Vector3(x, y, z);
});
