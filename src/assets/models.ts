import { useGLTF } from "@react-three/drei";
import type { Group, Mesh } from "three";

export const urlEvent = "/assets/models/Cate_Event_Model.glb";
export const urlJoinUs = "/assets/models/Cate_Joinus_Model.glb";
export const urlNewMedia = "/assets/models/Cate_NewMedia_Model.glb";
export const urlProject = "/assets/models/Cate_Project_Model.glb";
export const urlXreal = "/assets/models/Cate_XREAL_Model.glb";
export const urlButton = "/assets/models/Button.glb";
export const urlArrow = "/assets/models/Arrow.glb";
export const urlProjectTile = "/assets/models/projects/Tile_Project.glb";
export const urlTile = "/assets/models/Tile.glb";
export const urlEmojiFire = "/assets/models/projects/Emoji_fire.glb";
export const urlEmojiGriningFace =
  "/assets/models/projects/Emoji_grinning_face.glb";
useGLTF.preload(urlEvent);
useGLTF.preload(urlJoinUs);
useGLTF.preload(urlNewMedia);
useGLTF.preload(urlProject);
useGLTF.preload(urlXreal);
useGLTF.preload(urlButton);
useGLTF.preload(urlArrow);
useGLTF.preload(urlProjectTile);
useGLTF.preload(urlTile);
useGLTF.preload(urlEmojiFire);
useGLTF.preload(urlEmojiGriningFace);

declare module "three-stdlib" {
  interface GLTF {
    nodes: {
      Cate_Event_Model?: Mesh;
      Cate_Joinus_Model?: Mesh;
      Cate_NewMedia_Model?: Mesh;
      Cate_Project_Model?: Mesh;
      Cate_XREAL_Model?: Mesh;
      Button001: Mesh;
      Arrow: Mesh;
      Emoji: Mesh;
      Tile_Project: Group;
      Tile: Mesh;
    };
  }
}
