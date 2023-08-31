import { useGLTF } from "@react-three/drei";

const urlDefault = "/assets/models/projects/Emoji_fire.glb";

const names = [
  "Emoji_building_construction",
  "Emoji_crystal_ball",
  "Emoji_fire_heart",
  "Emoji_fire",
  "Emoji_frame",
  "Emoji_globe_with_meridians",
  "Emoji_grinning_face",
  "Emoji_guitar",
  "Emoji_joystick",
  "Emoji_puzzle_piece",
  "Emoji_rainbow",
  "Emoji_teddy_bear",
  "Emoji_thinking_face",
  "Emoji_video_game",
];

const map = new Map(
  names.map((name) => {
    const url = `/assets/models/projects/${name}.glb`;
    useGLTF.preload(url);
    return [name, `/assets/models/projects/${name}.glb`];
  })
);

export const Model = (name: string) => {
  const url = map.get(name);
  const { nodes } = useGLTF(url ? url : urlDefault);
  return { geometry: nodes.Emoji.geometry, material: nodes.Emoji.material };
};
