import { Globals } from "@react-spring/three";
import { IconTile, IconTileWrapper, TileInstances } from "./Tile";
import { CAT } from "@/constants/category";
import CatIcon from "./CatIcon";
import Button from "./Button";
import ProIcons from "./ProIcon";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import React from "react";
import { useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

const STEP = -20;
const DAMP = 3;

Globals.assign({ frameLoop: "always" });
/* TODO
Cannot call the manual advancement of rafz whilst frameLoop is not set as demand 
위 에러 메세지 해결 필요 */

function ButtonTile() {
  return (
    <IconTileWrapper position={[0, 0, 0]} isWhite={true}>
      <CatIcon type={CAT.Xreal} position={[0, 0.1, 0]} />
      <Button position={[0, 0, 0]} />
    </IconTileWrapper>
  );
}

const IconTiles = React.memo(() => {
  return (
    <group>
      <IconTile position={[-2, 0, 2]} type={CAT.Project} />
      <IconTile position={[2, 0, 2]} type={CAT.Events} />
      <IconTile position={[2, 0, -2]} type={CAT.JoinUs} />
      <IconTile position={[-2, 0, -2]} type={CAT.NEWMEDIA} />
      <ButtonTile />
    </group>
  );
});
IconTiles.displayName = "IconTiles";

function AdditionalTiles() {
  const status = useStatus((state) => state.status);
  return (
    <>
      {status === StatusEnum.Project && <TileInstances isAdditional={true} />}
    </>
  );
}

function Floor({ enabled }: { enabled?: boolean }) {
  const scroll = useScroll();
  const groupRef = React.useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (enabled) {
      // project
      groupRef.current.position.x = THREE.MathUtils.damp(
        groupRef.current.position.x,
        STEP * scroll.offset,
        DAMP,
        delta
      );
    } else {
      // else
      groupRef.current.position.x = THREE.MathUtils.damp(
        groupRef.current.position.x,
        0,
        DAMP,
        delta
      );
    }
  });
  return (
    <group ref={groupRef}>
      <TileInstances isAdditional={false} />
      <ProIcons />
      <IconTiles />
      <AdditionalTiles />
    </group>
  );
}

export default Floor;
