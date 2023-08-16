import { useGLTF, useCursor, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import React, { useState } from "react";
import { MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { CAT } from "@/constants/category";
import { useModalControl } from "@/modals/ModalControlProvider";
import MainModal from "@/modals/BasePageModal";
import {
  SCALE_RATIO,
  SCALE_CONFIG,
  DISPOSE_DELAY,
} from "@/constants/springConfig";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import { textMat, hoveredMaterial } from "@/assets/materials";

type Icon = {
  type: CAT;
  position: [x: number, y: number, z: number];
  handler?: () => void;
};

const map: Record<
  CAT,
  {
    name: string;
    modelName: Extract<
      keyof GLTF["nodes"],
      | "Cate_Event_Model"
      | "Cate_Joinus_Model"
      | "Cate_Magazine_Model"
      | "Cate_XREAL_Model"
      | "Cate_Project_Model"
    >;
  }
> = {
  [CAT.Events]: {
    name: "Events",
    modelName: "Cate_Event_Model",
  },
  [CAT.JoinUs]: {
    name: "Join Us",
    modelName: "Cate_Joinus_Model",
  },
  [CAT.MAGAZINE]: {
    name: "Magazine",
    modelName: "Cate_Magazine_Model",
  },
  [CAT.Xreal]: {
    name: "XREAL",
    modelName: "Cate_XREAL_Model",
  },
  [CAT.Project]: {
    name: "Projects",
    modelName: "Cate_Project_Model",
  },
};

function CatIcon(props: Icon) {
  const { status, setStatus } = useStatus();
  const { open } = useModalControl();
  const handleClick = () => {
    if (props.type == CAT.Project) setStatus(StatusEnum.Project);
    else open(MainModal, { name: props.type });
  };

  // 뒤집힌 경우에만 hover 가능하도록
  const [hovered, setHovered] = useState(false);
  useCursor(hovered && status === StatusEnum.Category);

  const { scale } = useSpring({
    scale: hovered ? SCALE_RATIO : 1,
    config: SCALE_CONFIG,
  });
  const { scale_dispose } = useSpring({
    scale_dispose: status !== StatusEnum.Category ? 0 : 1,
    config: SCALE_CONFIG,
    delay: DISPOSE_DELAY,
  });

  const { name, modelName } = map[props.type];

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
        <MeshIcon hovered={hovered} modelName={modelName} />
      </animated.group>
      <CatText name={name} position={props.position} />
    </animated.group>
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

function MeshIcon({
  hovered,
  modelName,
}: {
  hovered: boolean;
  modelName: (typeof map)[CAT]["modelName"];
}) {
  const { nodes } = useGLTF(`/assets/models/${modelName}.glb`);

  // transparent true로 변경, 알파맵 적용을 위함
  if (
    nodes.Cate_XREAL_Model?.material instanceof MeshStandardMaterial &&
    !nodes.Cate_XREAL_Model?.material.transparent
  ) {
    nodes.Cate_XREAL_Model?.material.setValues({ transparent: true });
  }

  return (
    <mesh
      geometry={nodes[modelName]?.geometry}
      material={hovered ? hoveredMaterial : nodes[modelName]?.material}
    />
  );
}

export default CatIcon;
