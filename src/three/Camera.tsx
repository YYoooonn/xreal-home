import { OrthographicCamera, CameraControls } from "@react-three/drei";
import { useEffect, useRef, useState } from "react";

const RATIO_WIDTH = 7;
const RATIO_HEIGHT = 6;
const MIN_ZOOM = 90;

function Camera() {
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

  const props = {
    zoom: Math.max(MIN_ZOOM, zoom),
  };

  return (
    <OrthographicCamera
      makeDefault
      castShadow
      position={[100, 80, 100]}
      near={0.001}
      far={10000}
      {...props}
    />
  );
}

const CameraControl = () => {
  const ctrlRef = useRef(null!);
  return <CameraControls ref={ctrlRef} />;
};

export default Camera;
