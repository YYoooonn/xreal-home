import { useGLTF, useCursor, Text, Float } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import React, { useState } from "react";
import { Mesh, DoubleSide, MeshStandardMaterial, Group, Vector3 } from "three";
import { GLTF } from "three-stdlib";
import { SCALE_CONFIG } from "@/constants/springConfig";
import { useStatus, StatusEnum } from "@/hooks/useStatus";

import positions from "./_data/positions";
import { urlProjectTile, urlProjectImoji } from "@/assets/models";

type Imoji = {
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

function ProjectIcon(props: Imoji) {
  const { status } = useStatus();
  const { nodes } = useGLTF(urlProjectTile);

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
        <Imoji name={props.icon} hovered={hovered} />
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

function Imoji({ name, hovered }: { name: string; hovered: boolean }) {
  const { nodes } = useGLTF(urlProjectImoji);
  return (
    <mesh
      rotation-x={-Math.PI / 2}
      rotation-y={Math.PI}
      rotation-z={(2 * Math.PI) / 7}
      position={[0.35, 0.2, -0.3]}
      scale={1}
      geometry={nodes.Emoji_Fire.geometry}
      material={hovered ? InvisibleMat : nodes.Emoji_Fire.material}
    />
  );
}

function ProjectText({ name, hovered }: { name: string; hovered: boolean }) {
  return (
    <Text
      position={[0, 0.5, 0]}
      anchorX={"center"}
      anchorY={"middle"}
      rotation-y={Math.PI / 4}
      fontSize={0.3}
      font={"/assets/fonts/IBMPlexSans-Bold.woff"}
      material={hovered ? TextMat : InvisibleMat}
      outlineBlur={0.06}
      outlineWidth={0.06}
      outlineOpacity={0.25}
      outlineColor={"white"}
    >
      {name}
    </Text>
  );
}

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
