import { useCursor, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import React, { useState } from "react";
import { CAT } from "@/constants/category";
import {
  SCALE_RATIO,
  SCALE_CONFIG,
  DISPOSE_DELAY,
} from "@/constants/springConfig";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import pushHistory from "@/hooks/pushHistory";
import { textMat, hoveredMat } from "@/assets/materials";
import { useModalRoute } from "@/modals/ModalRoutingProvider";
import { Model } from "@/assets/models/category";

type Icon = {
  type: CAT;
  position: [x: number, y: number, z: number];
  handler?: () => void;
};

const map: Record<
  CAT,
  {
    name: string;
    lightPos?: [number, number, number];
  }
> = {
  [CAT.Events]: {
    name: "Events",
    lightPos: [-0.2, 0.1, 0],
  },
  [CAT.JoinUs]: {
    name: "Join Us",
    lightPos: [0, 0.1, 0],
  },
  [CAT.NEWMEDIA]: {
    name: "NewMedia",
    lightPos: [0, 0, 0],
  },
  [CAT.Xreal]: {
    name: "XREAL",
  },
  [CAT.Project]: {
    name: "Projects",
    lightPos: [0, 0, 0],
  },
};

function CatIcon(props: Icon) {
  const { status, setStatus } = useStatus();
  const { push } = useModalRoute();
  const handleClick = () => {
    if (props.type == CAT.Project) {
      setStatus(StatusEnum.Project);
      pushHistory("projects");
    } else {
      push(props.type);
    }
  };

  const visible = status === StatusEnum.Category;
  // 뒤집힌 경우에만 hover 가능하도록
  const [hovered, setHovered] = useState(false);
  useCursor(hovered && status === StatusEnum.Category);

  const { scale } = useSpring({
    scale: hovered ? SCALE_RATIO : 1,
    config: SCALE_CONFIG,
  });
  const { scale_dispose } = useSpring({
    scale_dispose: visible ? 1 : 0,
    config: SCALE_CONFIG,
    delay: DISPOSE_DELAY,
  });

  const { name, lightPos } = map[props.type];

  return (
    <animated.group rotation-x={Math.PI} scale={scale_dispose}>
      <animated.group
        position={props.position}
        scale={scale}
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerLeave={() => {
          setHovered(false);
        }}
        onClick={handleClick}
      >
        <MeshIcon hovered={hovered} type={props.type} />
      </animated.group>
      {lightPos && <Light position={lightPos} />}
      <CatText name={name} position={props.position} />
    </animated.group>
  );
}

function Light({ position }: { position: [number, number, number] }) {
  return (
    <pointLight
      position={position}
      intensity={3}
      color={"#7FFFD4"}
      castShadow
      distance={20}
    />
  );
}

function CatText({
  name,
  position: [x, , z],
}: {
  name: string;
  position: [x: number, y: number, z: number];
}) {
  // XXX TextTile같은 식으로 이동해야 하나?
  return (
    <Text
      color="#FFFFFF"
      position={[x, 0.08, z + 0.55]}
      fontSize={0.2}
      font="/assets/fonts/IBMPlexSans-Bold.woff"
      rotation-x={Math.PI / 2}
      rotation-z={Math.PI}
      rotation-y={Math.PI}
      anchorX="center"
      anchorY="top"
      material={textMat}
    >
      {name}
    </Text>
  );
}

function MeshIcon({ hovered, type }: { hovered: boolean; type: CAT }) {
  const { geometry, material } = Model(type);

  return (
    <mesh geometry={geometry} material={hovered ? hoveredMat : material} />
  );
}

export default CatIcon;
