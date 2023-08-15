import { useGLTF, useCursor, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import React, { useState } from "react";
import {
  Mesh,
  DoubleSide,
  MeshStandardMaterial,
  MeshNormalMaterial,
} from "three";
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
  position: [x: number, y: number, z: number];
  handler?: () => void;
};

// TODO 임의로 설정
const hoveredMaterial = new MeshStandardMaterial();
hoveredMaterial.color.set("hotpink");
hoveredMaterial.side = DoubleSide;

const textMat = new MeshNormalMaterial();

function CatIcon(props: Icon) {
  const { status, setStatus } = useStatus();
  const { name, MeshIcon, handleClick } =
    props.type === CAT.Event
      ? {
          name: "Events",
          MeshIcon: IconEvent,
          handleClick: getModalHandler(props.type),
        }
      : props.type === CAT.JoinUs
      ? {
          name: "Join Us",
          MeshIcon: IconJoinUs,
          handleClick: getModalHandler(props.type),
        }
      : props.type === CAT.MAGAZINE
      ? {
          name: "Magazine",
          MeshIcon: IconMagazine,
          handleClick: getModalHandler(props.type),
        }
      : props.type === CAT.Xreal
      ? {
          name: "XREAL",
          MeshIcon: IconXreal,
          handleClick: getModalHandler(props.type),
        }
      : {
          name: "Projects",
          MeshIcon: IconVR,
          handleClick: () => {
            setStatus(StatusEnum.Project);
          },
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
        <MeshIcon hovered={hovered} />
      </animated.group>
      <CatText name={name} position={props.position} />
    </animated.group>
  );
}

function getModalHandler(type: CAT) {
  const { open } = useModalControl();

  // React.useEffect(() => {
  //   const handleOpen = () => console.log("modal opened");
  //   addEventListener("open", handleOpen);
  //   return () => removeEventListener("open", handleOpen);
  // }, []);

  // 뒤집힌 경우에만 클릭 가능하도록
  return () => {
    if (type === CAT.Event) {
      open(MainModal, {
        name: "events",
      });
    } else if (type === CAT.JoinUs) {
      open(MainModal, {
        name: "joinus",
      });
    } else if (type === CAT.Xreal) {
      open(MainModal, {
        name: "xreal",
      });
    } else if (type === CAT.MAGAZINE) {
      open(MainModal, {
        name: "magazine",
      });
    } else {
      console.log("Icon type not recognized");
      return;
    }
  };
}

const CatText = React.memo(
  (props: { name: string; position: [x: number, y: number, z: number] }) => {
    // XXX TextTile같은 식으로 이동해야 하나?
    return (
      <Text
        color={"#FFFFFF"}
        position={[props.position[0], 0.08, props.position[2] + 0.55]}
        fontSize={0.2}
        font="/assets/fonts/IBMPlexSans-Bold.woff"
        rotation-x={Math.PI / 2}
        rotation-z={Math.PI}
        rotation-y={Math.PI}
        anchorX={"center"}
        anchorY={"top"}
        material={textMat}
        children={props.name}
      />
    );
  }
);

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

export default CatIcon;
