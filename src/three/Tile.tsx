import React, { ReactElement } from "react";
import { useGLTF } from "@react-three/drei";
import { Mesh } from "three";
import { RotationWrapper } from "../components/spring/RotationWrapper";
import CatIcon from "./CatIcon";
import { CAT } from "@/constants/category";
import { urlTile } from "@/assets/models";

type Position = [x: number, y: number, z: number];
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

function Tile({ isWhite }: { isWhite: boolean }) {
  const { nodes } = useGLTF(urlTile);

  return (
    <group rotation-x={isWhite ? Math.PI : 0}>
      {nodes.Tile.children.map((child, i) => {
        if (child instanceof Mesh) {
          return (
            <mesh castShadow name="Tile" key={i}>
              <bufferGeometry {...child.geometry} />
              <material attach="material" {...child.material} />
            </mesh>
          );
        }
      })}
    </group>
  );
}

function BlackTile(props: { position: Position }) {
  return (
    <RotationWrapper position={props.position} isIcon={false} isWhite={false}>
      <Tile isWhite={false} />
    </RotationWrapper>
  );
}

function WhiteTile(props: { position: Position }) {
  return (
    <RotationWrapper position={props.position} isIcon={false} isWhite={true}>
      <Tile isWhite={true} />
    </RotationWrapper>
  );
}

const IconTileWrapper = (props: IconTileProps): ReactElement => {
  return (
    <RotationWrapper position={props.position} isIcon={true} isWhite={true}>
      <>{props.children}</>
      <Tile isWhite={props.isWhite} />
    </RotationWrapper>
  );
};

function IconTile({ position, type }: ItemTileProps) {
  return (
    <IconTileWrapper position={position} isWhite={true}>
      <CatIcon type={type} position={[0, 0.1, 0]} />
    </IconTileWrapper>
  );
}

export { WhiteTile, BlackTile, IconTile, IconTileWrapper };
