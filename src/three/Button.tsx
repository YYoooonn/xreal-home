import { config, animated, useSpring } from "@react-spring/three";
import { MeshStandardMaterial, DoubleSide } from "three";
import { useGLTF, useCursor } from "@react-three/drei";
import { ThreeEvent } from "@react-three/fiber";
import React from "react";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import { DISPOSE_DELAY, SCALE_CONFIG } from "@/constants/springConfig";
import pushHistory from "@/hooks/pushHistory";
import { urlArrow, urlButton } from "@/assets/models/models";

// TODO 임의로 설정
const hoveredMaterial = new MeshStandardMaterial();
hoveredMaterial.color.set("hotpink");
hoveredMaterial.side = DoubleSide;

function Button(props: { position: [x: number, y: number, z: number] }) {
  const { nodes } = useGLTF(urlButton);
  const { status, setStatus } = useStatus();
  const isMain = status === StatusEnum.Main;
  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    if (isMain) {
      setStatus(StatusEnum.Category);
      // XXX: url이동
      pushHistory("category");
    }
  };
  // 호버 처리
  const [hovered, setHovered] = React.useState(false);
  useCursor(hovered && isMain);

  // 호버된 경우 + 클릭 되지 않은 경우
  // TODO 클릭된 경우 사라지게 만든 뒤 해당 조건 제거 필요

  const { scale } = useSpring({
    scale: isMain ? 1 : 0,
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
        material={nodes.Button001.material}
      />
      <pointLight
        castShadow
        position={[0.5, 1, 0.5]}
        distance={20}
        intensity={1}
        color={"#7FFFD4"}
      />
      <Arrow hovered={hovered} />
    </animated.group>
  );
}

function Arrow(props: { hovered: boolean }) {
  const ArrowGLTF = useGLTF(urlArrow);
  const { y } = useSpring({
    y: props.hovered ? -0.4 : 0,
    config: config.wobbly,
  });
  return (
    <animated.group position-y={y}>
      <mesh
        geometry={ArrowGLTF.nodes.Arrow.geometry}
        material={ArrowGLTF.nodes.Arrow.material}
      />
    </animated.group>
  );
}

export default Button;
