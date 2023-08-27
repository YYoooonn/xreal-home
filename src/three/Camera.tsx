import * as THREE from "three";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import {
  OrthographicCamera,
  useScroll,
  ScrollControls,
  Html,
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
  // const {isMobile} = useDeviceDetect()
  // console.log(`is mobile : ${isMobile}`)
  // const DefaultCamera = isMobile? DragableCamera: ScrollableCamera
  return <ScrollableCamera />;
}

function ScrollableCamera() {
  const status = useStatus((state) => state.status);
  const enableScroll = status === StatusEnum.Project;
  return (
    <ScrollControls
      pages={enableScroll ? 4 : 0}
      enabled={enableScroll}
      damping={0.2}
    >
      <Html style={{ position: "fixed", left: 0 }}>
        {/* TODO: scroll bar design
        {enableScroll && <ProgressBar />} */}
      </Html>
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
      manual
      castShadow
      position={[100, 80, 100]}
      near={0.001}
      far={10000}
      {...zoomProps}
    />
  );
};

/* 
TODO 모바일 환경에서의 스크롤 반영하는 카메라 이동 
r3f canvas 기본적으로 touch 이벤트 반영하지 않아서 직접 구현해야함
*/
// function DragableCamera(){

// const mouse = useThree((state) => state.mouse)
// const handler = () => {
//   console.log(mouse)
//   mouse.y
// }

// useEffect(() => {
//   document.addEventListener("touchmove", handler);
//   return () => {
//     document.removeEventListener("touchmove", handler);
//   };
// }, []);

//   return ;
// }

export default Camera;
