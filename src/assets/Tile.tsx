import React, { ReactElement, useMemo } from "react";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";
import { Group, Mesh } from "three";
import { RotationWrapper } from "../components/spring/RotationWrapper";
import Button from "./Button";

const urlTile = "/assets/models/Tile.glb";
useGLTF.preload(urlTile);

type Position = [x: number, y: number, z: number];
type GLTFTile = GLTF & {
  nodes: {
    Cube: Group;
  };
};
type IconTileProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  isWhite: boolean;
};

const Tile = React.memo(({ isWhite }: { isWhite: boolean }) => {
  const { nodes } = useGLTF(urlTile) as GLTFTile;
  return (
    <group rotation-x={isWhite ? Math.PI : 0}>
      {nodes.Cube.children.map((child, i) => {
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

function ButtonTile() {
  return (
    <IconTileWrapper position={[0, 0, 0]} isWhite={true}>
      <Button position={[0, 0.3, 0]} />
    </IconTileWrapper>
  );
}

export { WhiteTile, BlackTile, ButtonTile };
