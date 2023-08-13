import { config, animated, useSpring } from "@react-spring/three";
import { Mesh, MeshStandardMaterial, DoubleSide } from "three";
import { useGLTF, useCursor } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import { GLTF } from "three-stdlib";
import React from "react";
import useFlipped from "@/hooks/useFlipped";

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
  // 변수 관리를 위한 zustand
  const { flipped, setFlipped } = useFlipped();
  const newUrl = "cat";
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    if (!flipped) {
      setFlipped();
      // url이동
      window.history.pushState(
        { ...window.history.state, as: newUrl, url: newUrl },
        "",
        "cat"
      );
    }
  };
  // 호버 처리
  const [hovered, setHovered] = React.useState(false);
  // const { scale } = useSpring({
  //   scale: hovered ? 1.2 : 1,
  //   config: config.wobbly,
  // });

  // 호버된 경우 + 클릭 되지 않은 경우
  // TODO 클릭된 경우 사라지게 만든 뒤 해당 조건 제거 필요
  const { scale } = useSpring({
    scale: !flipped ? 1 : 0,
    config: config.slow,
  });
  useCursor(hovered && !flipped);
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
