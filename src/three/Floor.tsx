import { Globals, useSpring, animated } from "@react-spring/three";
import { IconTile, IconTileWrapper, TileInstances, Border } from "./Tile";
import { CAT } from "@/constants/category";
import CatIcon from "./CatIcon";
import Button from "./Button";
import ProIcons from "./ProIcon";
import React from "react";
import { Image, useScroll } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { borderX } from "./_data/positions";
import { SCALE_CONFIG } from "@/constants/springConfig";

const STEP = -30;
const DAMP = 5;

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

function AdditionalTiles({ enabled }: { enabled: boolean }) {
  return <>{enabled && <TileInstances isAdditional={true} />}</>;
}

const BorderTiles = React.memo(() => {
  return (
    <group>
      {borderX.map((positionX, index) => (
        <Border key={index} x={positionX} />
      ))}
    </group>
  );
});
BorderTiles.displayName = "BorderTiles";

function BorderTexts({ visible }: { visible: boolean }) {
  const { y } = useSpring({
    y: visible ? 0.1 : -1,
    config: SCALE_CONFIG,
  });
  return (
    <animated.group position-y={y}>
      <Image
        scale={0.8}
        position={[-4, 0.08, 1]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        url="/assets/textures/4.png"
        transparent
      />
      <Image
        scale={0.8}
        position={[15, 0.08, 2]}
        rotation={[-Math.PI / 2, 0, Math.PI / 2]}
        url="/assets/textures/3.png"
        transparent
      />
      {/* 
      <Image position={[-5,0.1,1]} rotation={[-Math.PI/2,0,Math.PI/2]} url="/assets/textures/1.png" transparent/>
      <Image position={[-5,0.1,1]} rotation={[-Math.PI/2,0,Math.PI/2]} url="/assets/textures/1.png" transparent/>
       */}
    </animated.group>
  );
}

function Floor({ enabled }: { enabled: boolean }) {
  const scroll = useScroll();
  const groupRef = React.useRef<THREE.Group>(null!);
  useFrame((_, delta) => {
    if (enabled) {
      // project
      groupRef.current.position.x = STEP * scroll.offset;
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
      <BorderTiles />
      <AdditionalTiles enabled={enabled} />
      <BorderTexts visible={enabled} />
    </group>
  );
}

export default Floor;
