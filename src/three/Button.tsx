import { config, animated, useSpring } from "@react-spring/three";
import { Mesh, MeshStandardMaterial, DoubleSide } from "three";
import { useGLTF, useCursor } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import React from "react";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import { DISPOSE_DELAY, SCALE_CONFIG } from "@/constants/springConfig";
type GLTFButton = GLTF & {
  nodes: {
    Button001: Mesh;
  };
};

const urlButton = "/assets/models/Button.glb";
useGLTF.preload(urlButton);

// TODO 임의로 설정
const hoveredMaterial = new MeshStandardMaterial();
hoveredMaterial.color.set("hotpink");
hoveredMaterial.side = DoubleSide;

function Button(props: { position: [x: number, y: number, z: number] }) {
  const { nodes } = useGLTF(urlButton) as GLTFButton;
  const { status, setStatus } = useStatus();
  const isMain = status === StatusEnum.Main;
  const newUrl = "cat";
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    if (isMain) {
      setStatus(StatusEnum.Category);
      // XXX: url이동
      window.history.pushState(
        { ...window.history.state, as: newUrl, url: newUrl },
        "",
        "cat"
      );
    }
  };
  // 호버 처리
  const [hovered, setHovered] = React.useState(false);
  useCursor(hovered && isMain);

  // 호버된 경우 + 클릭 되지 않은 경우
  // TODO 클릭된 경우 사라지게 만든 뒤 해당 조건 제거 필요

  const { scale } = useSpring({
    scale: isMain ? 1 : 0, // 여기서 State를 읽어옴
    config: SCALE_CONFIG,
    delay: DISPOSE_DELAY,
  });

  return (
    <animated.group
      position={props.position}
      scale={scale}
      onClick={handleClick}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
    >
      <mesh
        geometry={nodes.Button001.geometry}
        material={hovered ? hoveredMaterial : nodes.Button001.material}
      />
    </animated.group>
  );
}

export default Button;
