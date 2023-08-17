import { useGLTF, useCursor, Text, Float } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import React, { useState } from "react";
import { Mesh, DoubleSide, MeshStandardMaterial, Group, Vector3 } from "three";
import { GLTF } from "three-stdlib";
import { SCALE_CONFIG } from "@/constants/springConfig";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import positions from "./_data/positions";

const urlProjectTile = "/assets/models/projects/Tile_Project.glb";
const urlEmojiFire = "/assets/models/projects/Emoji_fire.glb";
const urlEmojiGriningFace = "/assets/models/projects/Emoji_grinning_face.glb";
useGLTF.preload(urlEmojiFire);
useGLTF.preload(urlEmojiGriningFace);
useGLTF.preload(urlProjectTile);

interface EmojiGLTF extends GLTF {
  nodes: { Emoji_fire: Mesh };
}

interface TileGLTF extends GLTF {
  nodes: { Tile_Project: Group };
}

type EmojiProps = {
  title: string;
  icon: string;
  position: [x: number, y: number, z: number] | Vector3;
  handler?: () => void;
};

const InvisibleMat = new MeshStandardMaterial({
  transparent: true,
  opacity: 0,
  side: DoubleSide,
});
const TextMat = new MeshStandardMaterial({
  color: "#ffffff",
  side: DoubleSide,
});

function ProjectIcon(props: EmojiProps) {
  const { status } = useStatus();
  const { nodes } = useGLTF(urlProjectTile) as TileGLTF;

  // 뒤집힌 경우에만 hover 가능하도록
  const [hovered, setHovered] = useState(false);
  useCursor(hovered && status === StatusEnum.Project);

  const { scale } = useSpring({
    scale: status !== StatusEnum.Project ? 0 : 1,
    config: SCALE_CONFIG,
    delay: 1000,
  });
  return (
    <animated.group position={props.position} scale={scale}>
      <group
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerLeave={() => {
          setHovered(false);
        }}
        onClick={() => {
          console.log("clicked");
        }}
      >
        <Emoji name={props.icon} hovered={hovered} />
        <ProjectText name={"Project"} hovered={hovered} />
      </group>
      {nodes.Tile_Project.children.map((child, i) => {
        if (child instanceof Mesh) {
          return (
            <mesh castShadow name="Tile" key={i} position={[0, 0.1, 0]}>
              <bufferGeometry {...child.geometry} />
              <material attach={"material"} {...child.material} />
            </mesh>
          );
        }
      })}
    </animated.group>
  );
}

// TODO 모델링 네이밍 변경 요청
const Emoji = React.memo((props: { name: string; hovered: boolean }) => {
  const isFire = Math.random() > 0.5;
  const { nodes } = isFire
    ? (useGLTF(urlEmojiFire) as any)
    : (useGLTF(urlEmojiGriningFace) as any);
  return (
    <mesh
      rotation-y={isFire ? -Math.PI / 4 : -Math.PI / 6}
      position={[0, 0.15, 0]}
      scale={1}
      geometry={
        isFire ? nodes.Emoji_fire.geometry : nodes.Emoji_grinning_face.geometry
      }
      material={
        props.hovered
          ? InvisibleMat
          : isFire
          ? nodes.Emoji_fire.material
          : nodes.Emoji_grinning_face.material
      }
    />
  );
});

const ProjectText = React.memo((props: { name: string; hovered: boolean }) => {
  return (
    <Text
      position={[0, 0.5, 0]}
      anchorX={"center"}
      anchorY={"middle"}
      rotation-y={Math.PI / 4}
      fontSize={0.3}
      font={"/assets/fonts/IBMPlexSans-Bold.woff"}
      material={props.hovered ? TextMat : InvisibleMat}
      outlineBlur={0.06}
      outlineWidth={0.06}
      outlineOpacity={0.25}
      outlineColor={"white"}
      children={props.name}
    />
  );
});

function ProIcons() {
  return (
    <group>
      {positions.map((vector, index) => {
        return (
          <ProjectIcon key={index} title="project" icon="" position={vector} />
        );
      })}
    </group>
  );
}

export default ProIcons;
