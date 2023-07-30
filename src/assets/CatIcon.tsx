import { useGLTF, useCursor } from "@react-three/drei";
import { useSpring, config, animated, SpringConfig } from "@react-spring/three";
import { useState } from "react";
import { Mesh, Group, DoubleSide, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { CAT } from "@/constants/category";

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
  const url =
    props.type === CAT.Event
      ? urlEvent
      : props.type === CAT.JoinUs
      ? urlJoinUs
      : props.type === CAT.VR
      ? urlVR
      : urlMagazine;
  const gltf = useGLTF(url) as CatGLTF;
  // TODO: 클릭 state
  const [hovered, setHovered] = useState(false);
  useCursor(hovered);
  const { scale } = useSpring({
    scale: hovered ? (props.scaleRatio ? props.scaleRatio : 1.2) : 1,
    config: props.scaleConfig ? props.scaleConfig : config.wobbly,
  });
  return (
    <animated.group
      position={props.position}
      scale={scale}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerLeave={() => {
        setHovered(false);
      }}
      onClick={props.handler}
    >
      <MeshIcon hovered={hovered} gltf={gltf} />
    </animated.group>
  );
}

function MeshIcon({ hovered, gltf }: { hovered: boolean; gltf: CatGLTF }) {
  const mesh = gltf.nodes.Cate_Event_Model
    ? gltf.nodes.Cate_Event_Model
    : gltf.nodes.Cate_Joinus_Model
    ? gltf.nodes.Cate_Joinus_Model
    : gltf.nodes.Cate_Magazine_Model
    ? gltf.nodes.Cate_Magazine_Model
    : gltf.nodes.Cate_Project_Model
    ? gltf.nodes.Cate_Project_Model
    : gltf.nodes.Cate_XREAL_Model;

  return (
    <group>
      <mesh
        geometry={mesh?.geometry}
        material={hovered ? hoveredMaterial : mesh?.material}
      />
    </group>
  );
}

export default Icon;
