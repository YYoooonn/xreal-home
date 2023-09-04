import React from "react";
import { useGLTF, Text } from "@react-three/drei";
import { urlTile } from "@/assets/models/models";
import { RotationWrapper } from "../components/spring/RotationWrapper";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import { textMat, borderMat } from "@/assets/materials";

type Position = [x: number, y: number, z: number];

type TileProps = {
  position: Position;
};

function Tile({ position }: TileProps) {
  const { nodes } = useGLTF(urlTile);
  const status = useStatus((state) => state.status);
  var borderMaterial;

  if (status === StatusEnum.Project) {
    borderMaterial = borderMat;
  } else {
    borderMaterial = nodes.Tile.material;
  }
  return (
    <mesh
      position={position}
      rotation-x={3.15}
      geometry={nodes.Tile.geometry}
      material={borderMaterial}
    />
  );
}

function BorderText({ name }: { name: string }) {
  return (
    <Text
      color="#FFFFFF"
      position={[-2.7, 1, 6]}
      fontSize={0.5}
      font="/assets/fonts/IBMPlexSansKR-Bold.woff"
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

type BorderTileProps = {
  x: number;
};

function BorderTile({ x }: BorderTileProps) {
  const tiles = [];
  const status = useStatus((state) => state.status);

  for (let i = -10; i <= 10; i++) {
    const tilePosition: Position = [x, 0, i];
    tiles.push(
      <RotationWrapper position={tilePosition} rotateX={true} isWhite={true}>
        <Tile key={i} position={[0, 0, 0]} />
      </RotationWrapper>
    );
  }

  return (
    <>
      {tiles}
      if(status === StatusEnum.Project)
      {
        //<BorderText name="4" />
      }
    </>
  );
}

export default BorderTile;
