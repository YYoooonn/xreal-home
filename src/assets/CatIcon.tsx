import { useGLTF, useCursor } from "@react-three/drei";
import { useSpring, config, animated, SpringConfig } from "@react-spring/three";
import React, { useState } from "react";
import { Mesh, DoubleSide, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { CAT } from "@/constants/category";
import { useModalControl } from "@/modals/ModalControlProvider";
import MainModal from "@/modals/main";

const urlEvent = "/assets/models/Cate_Event_Model.glb";
const urlJoinUs = "/assets/models/Cate_Joinus_Model.glb";
const urlMagazine = "/assets/models/Cate_Magazine_Model.glb";
const urlVR = "/assets/models/Cate_Project_Model.glb";
const urlXreal = "/assets/models/Cate_XREAL_Model.glb";
useGLTF.preload(urlEvent);
useGLTF.preload(urlJoinUs);
useGLTF.preload(urlMagazine);
useGLTF.preload(urlVR);
useGLTF.preload(urlXreal);

interface CatGLTF extends GLTF {
  nodes: {
    Cate_Event_Model?: Mesh;
    Cate_Joinus_Model?: Mesh;
    Cate_Magazine_Model?: Mesh;
    Cate_Project_Model?: Mesh;
    Cate_XREAL_Model?: Mesh;
  };
}

type Icon = {
  type: CAT;
  position: [number, number, number];
  scaleConfig?: SpringConfig;
  scaleRatio?: number;
  handler?: () => void;
};

// TODO 임의로 설정
const hoveredMaterial = new MeshStandardMaterial();
hoveredMaterial.color.set("hotpink");
hoveredMaterial.side = DoubleSide;

function Icon(props: Icon) {
  const MeshIcon =
    props.type === CAT.Event
      ? IconEvent
      : props.type === CAT.JoinUs
      ? IconJoinUs
      : props.type === CAT.VR
      ? IconVR
      : props.type === CAT.MAGAZINE
      ? IconMagazine
      : IconXreal;
  // TODO: 클릭 state
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);

  // icon 마다 다른 모달 반영 필요
  const { open, addEventListener, removeEventListener } = useModalControl();

  React.useEffect(() => {
    const handleOpen = () => console.log("modal opened");
    addEventListener("open", handleOpen);
    return () => removeEventListener("open", handleOpen);
  }, []);

  const handler = () => {
    open(MainModal);
  };

  const { scale } = useSpring({
    scale: hovered ? (props.scaleRatio ? props.scaleRatio : 1.2) : 1,
    config: props.scaleConfig ? props.scaleConfig : config.wobbly,
  });
  return (
    <animated.group
      rotation-x={Math.PI}
      position={props.position}
      scale={scale}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
      onClick={handler}
    >
      <MeshIcon hovered={hovered} />
    </animated.group>
  );
}

const IconVR = React.memo(({ hovered }: { hovered: boolean }) => {
  const { nodes } = useGLTF(urlVR) as CatGLTF;
  return (
    <mesh
      geometry={nodes.Cate_Project_Model?.geometry}
      material={hovered ? hoveredMaterial : nodes.Cate_Project_Model?.material}
    />
  );
});

const IconEvent = React.memo(({ hovered }: { hovered: boolean }) => {
  const { nodes } = useGLTF(urlEvent) as CatGLTF;
  return (
    <mesh
      geometry={nodes.Cate_Event_Model?.geometry}
      material={hovered ? hoveredMaterial : nodes.Cate_Event_Model?.material}
    />
  );
});

const IconJoinUs = React.memo(({ hovered }: { hovered: boolean }) => {
  const { nodes } = useGLTF(urlJoinUs) as CatGLTF;
  return (
    <mesh
      geometry={nodes.Cate_Joinus_Model?.geometry}
      material={hovered ? hoveredMaterial : nodes.Cate_Joinus_Model?.material}
    />
  );
});

const IconMagazine = React.memo(({ hovered }: { hovered: boolean }) => {
  const { nodes } = useGLTF(urlMagazine) as CatGLTF;
  return (
    <mesh
      geometry={nodes.Cate_Magazine_Model?.geometry}
      material={hovered ? hoveredMaterial : nodes.Cate_Magazine_Model?.material}
    />
  );
});

const IconXreal = React.memo(({ hovered }: { hovered: boolean }) => {
  const { nodes } = useGLTF(urlXreal) as CatGLTF;
  // transparent true로 변경, 알파맵 적용을 위함
  if (nodes.Cate_XREAL_Model?.material instanceof MeshStandardMaterial) {
    nodes.Cate_XREAL_Model?.material.setValues({ transparent: true });
  }
  return (
    <mesh
      geometry={nodes.Cate_XREAL_Model?.geometry}
      material={nodes.Cate_XREAL_Model?.material}
    />
  );
});

export default Icon;
