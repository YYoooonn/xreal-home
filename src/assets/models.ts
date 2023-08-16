import { useGLTF } from "@react-three/drei";
import type { Group, Mesh } from "three";

export const urlEvent = "/assets/models/Cate_Event_Model.glb";
export const urlJoinUs = "/assets/models/Cate_Joinus_Model.glb";
export const urlMagazine = "/assets/models/Cate_Magazine_Model.glb";
export const urlProject = "/assets/models/Cate_Project_Model.glb";
export const urlXreal = "/assets/models/Cate_XREAL_Model.glb";
export const urlButton = "/assets/models/Button.glb";
export const urlArrow = "/assets/models/Arrow.glb";
export const urlProjectTile = "/assets/models/projects/Tile_Project.glb";
export const urlProjectImoji = "/assets/models/projects/Imoji_Fire.glb";
export const urlTile = "/assets/models/Tile.glb";
useGLTF.preload(urlEvent);
useGLTF.preload(urlJoinUs);
useGLTF.preload(urlMagazine);
useGLTF.preload(urlProject);
useGLTF.preload(urlXreal);
useGLTF.preload(urlButton);
useGLTF.preload(urlArrow);
useGLTF.preload(urlProjectImoji);
useGLTF.preload(urlProjectTile);
useGLTF.preload(urlTile);

declare module "three-stdlib" {
  interface GLTF {
    nodes: {
      Cate_Event_Model?: Mesh;
      Cate_Joinus_Model?: Mesh;
      Cate_Magazine_Model?: Mesh;
      Cate_Project_Model?: Mesh;
      Cate_XREAL_Model?: Mesh;
      Button001: Mesh;
      Arrow: Mesh;
      Emoji_Fire: Mesh;
      Tile_Project: Group;
      Tile: Group;
    };
  }
}
