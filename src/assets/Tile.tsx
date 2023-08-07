import React, { ReactElement, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group, Mesh } from "three";
import { RotationWrapper } from "../components/spring/RotationWrapper";
import Button from "./Button";
import Icon from "./CatIcon";
import { CAT } from "@/constants/category";
import { SCALE_CONFIG, SCALE_RATIO } from "@/constants/springConfig";
import { useModalControl } from "@/modals/ModalControlProvider";
import MainModal from "@/modals/main";

const urlTile = "/assets/models/Tile.glb";
useGLTF.preload(urlTile);

type Position = [x: number, y: number, z: number];
type GLTFTile = GLTF & {
  nodes: {
    Tile: Group;
  };
};
type IconTileProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  isWhite: boolean;
};
type ItemTileProps = {
  type: CAT;
  position: [x: number, y: number, z: number];
  handler?: () => void;
};

const Tile = React.memo(({ isWhite }: { isWhite: boolean }) => {
  const { nodes } = useGLTF(urlTile) as GLTFTile;
  return (
    <group rotation-x={isWhite ? Math.PI : 0}>
      {nodes.Tile.children.map((child, i) => {
        if (child instanceof Mesh) {
          return (
            <mesh castShadow name="Tile" key={i}>
              <bufferGeometry {...child.geometry} />
              <material attach={"material"} {...child.material} />
            </mesh>
          );
        }
      })}
    </group>
  );
});

function BlackTile(props: { position: Position }) {
  return (
    <RotationWrapper position={props.position}>
      <Tile isWhite={false} />
    </RotationWrapper>
  );
}

function WhiteTile(props: { position: Position }) {
  return (
    <RotationWrapper position={props.position}>
      <Tile isWhite={true} />
    </RotationWrapper>
  );
}

const IconTileWrapper = ({
  children,
  position,
  isWhite,
}: IconTileProps): ReactElement => {
  return (
    <RotationWrapper position={position}>
      <>{children}</>
      <Tile isWhite={isWhite} />
    </RotationWrapper>
  );
};

function IconTile({ position, type }: ItemTileProps) {
  return (
    <IconTileWrapper position={position} isWhite={true}>
      <Icon
        type={type}
        scaleConfig={SCALE_CONFIG}
        scaleRatio={SCALE_RATIO}
        position={[0, -0.1, 0]}
      />
    </IconTileWrapper>
  );
}

export { WhiteTile, BlackTile, IconTile, IconTileWrapper };
