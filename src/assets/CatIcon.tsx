import { useGLTF, useCursor } from "@react-three/drei";
import { useSpring, config, animated, SpringConfig } from "@react-spring/three";
import { useState } from "react";
import { Mesh, Group, DoubleSide, MeshStandardMaterial } from "three";
import { GLTF } from "three-stdlib";
import { CAT } from "@/constants/category";

const urlEvent = "/assets/models/Cat_Event.glb";
const urlJoinUs = "/assets/models/Cat_JoinUs.glb";
const urlMagazine = "/assets/models/Cat_Magazine.glb";
const urlVR = "/assets/models/Cat_VR.glb";
useGLTF.preload(urlEvent);
useGLTF.preload(urlJoinUs);
useGLTF.preload(urlMagazine);
useGLTF.preload(urlVR);

interface CatGLTF extends GLTF {
  nodes: {
    Event_Group?: Group;
    VRBody_Object?: Group;
    JoinUs_Group?: Group;
    Magazine_Group?: Group;
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
  const group = gltf.nodes.Event_Group
    ? gltf.nodes.Event_Group
    : gltf.nodes.JoinUs_Group
    ? gltf.nodes.JoinUs_Group
    : gltf.nodes.Magazine_Group
    ? gltf.nodes.Magazine_Group
    : gltf.nodes.VRBody_Object;

  return (
    <group>
      {group?.children?.map((child, i) => {
        if (child instanceof Mesh) {
          const mat = hovered ? hoveredMaterial : child.material;
          return <mesh key={i} geometry={child.geometry} material={mat} />;
        }
      })}
    </group>
  );
}

export default Icon;
