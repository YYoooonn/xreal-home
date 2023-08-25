import { PRO } from "@/constants/project";
import { useGLTF } from "@react-three/drei";

export const urlEmojiFire = "/assets/models/projects/Emoji_fire.glb";
export const urlEmojiGriningFace =
  "/assets/models/projects/Emoji_grinning_face.glb";

useGLTF.preload(urlEmojiFire);
useGLTF.preload(urlEmojiGriningFace);

const map: Record<
  PRO,
  {
    url: string;
  }
> = {
  [PRO.Fire]: {
    url: urlEmojiFire,
  },
  [PRO.GrinningFace]: {
    url: urlEmojiGriningFace,
  },
};

export const Model = (type: PRO) => {
  const { url } = map[type];
  const { nodes } = useGLTF(url);
  return { geometry: nodes.Emoji.geometry, material: nodes.Emoji.material };
};
