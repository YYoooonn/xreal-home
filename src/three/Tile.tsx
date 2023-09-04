import React, { ReactElement } from "react";
import { Instance, Instances, useGLTF } from "@react-three/drei";
import { RotationWrapper } from "../components/spring/RotationWrapper";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import CatIcon from "./CatIcon";
import { CAT } from "@/constants/category";
import { urlTile } from "@/assets/models/models";
import * as utils from "@/three/utils/compute";
import { borderMat } from "@/assets/materials";

const TRANS_DIST = 15;
const MAX_COLUMN = 30;
const MAX_ROW = 30;

type Position = [x: number, y: number, z: number];
type IconTileProps = {
  children: JSX.Element | JSX.Element[];
  position: Position;
  isWhite: boolean;
};
type ItemTileProps = {
  type: CAT;
  position: Position;
};

function Tile({ isWhite }: { isWhite: boolean }) {
  const { nodes } = useGLTF(urlTile);
  return (
    <mesh
      rotation-x={isWhite ? Math.PI : 0}
      geometry={nodes.Tile.geometry}
      material={nodes.Tile.material}
    />
  );
}

function BorderTile() {
  const { nodes } = useGLTF(urlTile);
  const status = useStatus((state) => state.status);
  return (
    <mesh
      geometry={nodes.Tile.geometry}
      material={status === StatusEnum.Project ? borderMat : nodes.Tile.material}
      rotation-x={Math.PI}
    />
  );
}

function Border({ x }: { x: number }) {
  return (
    <>
      {Array.from({ length: MAX_ROW }).map((_, i) => {
        return (
          <RotationWrapper
            key={i}
            position={[x, 0, i - TRANS_DIST]}
            rotateX={true}
            isWhite={false}
          >
            <BorderTile />
          </RotationWrapper>
        );
      })}
    </>
  );
}

const IconTileWrapper = (props: IconTileProps): ReactElement => {
  return (
    <RotationWrapper position={props.position} rotateX={true} isWhite={true}>
      <>{props.children}</>
      <Tile isWhite={!props.isWhite} />
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

const TileInstances = React.memo(
  ({ isAdditional }: { isAdditional: boolean }) => {
    const { nodes } = useGLTF(urlTile);
    return (
      <Instances
        range={1000}
        limit={1000}
        geometry={nodes.Tile.geometry}
        material={nodes.Tile.material}
      >
        {Array.from({ length: MAX_COLUMN }).map((_, i) =>
          Array.from({ length: MAX_ROW }).map((_, j) => {
            const { x, y } = {
              x: isAdditional ? i - TRANS_DIST + MAX_COLUMN : i - TRANS_DIST,
              y: j - TRANS_DIST,
            };
            const visible = !utils.isEdgeOrCenter(x, y) && !utils.isBorder(x);
            return (
              visible && (
                <TileInstance key={(i + 1) * (j + 1)} position={[x, 0, y]} />
              )
            );
          })
        )}
      </Instances>
    );
  }
);

TileInstances.displayName = "TileInstances";

function TileInstance({ position }: { position: Position }) {
  const rotateX = Math.random() > 0.5;
  const isWhite = utils.isWhite(position);
  return (
    <RotationWrapper position={position} isWhite={isWhite} rotateX={rotateX}>
      <Instance rotation-x={isWhite ? 0 : Math.PI} />
    </RotationWrapper>
  );
}

export { IconTile, IconTileWrapper, TileInstances, Border };
