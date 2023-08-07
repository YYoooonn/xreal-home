import { config, animated, useSpring } from "@react-spring/three";
import { Mesh, MeshStandardMaterial, Group, DoubleSide } from "three";
import { useGLTF, useCursor } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import { useState } from "react";
import useFlipped from "@/hooks/useFlipped";

type GLTFButton = GLTF & {
  nodes: {
    Cate_XREAL_Model: Mesh;
  };
};

// TODO 현재 버튼 dummy
const urlButton = "/assets/models/Cate_XREAL_Model.glb";
useGLTF.preload(urlButton);

// TODO 임의로 설정
const hoveredMaterial = new MeshStandardMaterial();
hoveredMaterial.color.set("hotpink");
hoveredMaterial.side = DoubleSide;

function Button(props: { position: [x: number, y: number, z: number] }) {
  const { nodes } = useGLTF(urlButton) as GLTFButton;
  // 변수 관리를 위한 zustand
  const { flipped, setFlipped } = useFlipped();
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    if (!flipped) {
      setFlipped();
    }
  };
  // 호버 처리
  const [hovered, setHovered] = useState(false);
  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: config.wobbly,
  });

  // 호버된 경우 + 클릭 되지 않은 경우
  // TODO 클릭된 경우 사라지게 만든 뒤 해당 조건 제거 필요
  useCursor(hovered && !flipped);
  return (
    <animated.group
      scale={scale}
      position={props.position}
      onClick={handleClick}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
    >
      <mesh
        geometry={nodes.Cate_XREAL_Model.geometry}
        material={hovered ? hoveredMaterial : nodes.Cate_XREAL_Model.material}
      />
    </animated.group>
  );
}

export default Button;
