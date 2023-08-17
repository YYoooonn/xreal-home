import * as THREE from "three";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import {
  OrthographicCamera,
  useScroll,
  ScrollControls,
} from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import { useEffect, useRef, useState } from "react";

const RATIO_WIDTH = 8;
const RATIO_HEIGHT = 7;
const MIN_ZOOM = 50;
const STEP = 20;
const DAMP = 3;
const TARGET = new THREE.Vector3(0, 0, 0);

function Camera() {
  const { status } = useStatus();
  const enableScroll = status === StatusEnum.Project;
  return (
    <ScrollControls
      pages={enableScroll ? 4 : 0}
      enabled={enableScroll}
      damping={0.2}
    >
      <ResponsiveCam enabled={enableScroll} />
    </ScrollControls>
  );
}

const ResponsiveCam = ({ enabled }: { enabled: boolean }) => {
  const [zoom, setZoom] = useState(
    Math.min(window.innerWidth / RATIO_WIDTH, window.innerHeight / RATIO_HEIGHT)
  );
  const handleResize = () => {
    setZoom(
      Math.min(
        window.innerWidth / RATIO_WIDTH,
        window.innerHeight / RATIO_HEIGHT
      )
    );
  };
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const zoomProps = {
    zoom: Math.max(MIN_ZOOM, zoom),
  };

  const scroll = useScroll();
  const camRef = useRef<any>();
  useFrame((_, delta) => {
    if (enabled) {
      const dist = STEP * scroll.offset;
      camRef.current.position.x = THREE.MathUtils.damp(
        camRef.current.position.x,
        100 + dist,
        DAMP,
        delta
      );
      TARGET.x = THREE.MathUtils.damp(TARGET.x, dist, DAMP, delta);
      camRef.current.lookAt(TARGET);
    }
  });

  return (
    <OrthographicCamera
      ref={camRef}
      makeDefault
      castShadow
      position={[100, 80, 100]}
      near={0.001}
      far={10000}
      {...zoomProps}
    />
  );
};

export default Camera;
