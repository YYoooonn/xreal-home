import { OrthographicCamera } from "@react-three/drei";
import { useEffect, useState } from "react";

const RATIO_WIDTH = 8;
const RATIO_HEIGHT = 7;
const MIN_ZOOM = 50;

function Camera() {
  // const {isMobile} = useDeviceDetect()
  // console.log(`is mobile : ${isMobile}`)
  // const DefaultCamera = isMobile? DragableCamera: ScrollableCamera
  return <ResponsiveCam />;
}

const ResponsiveCam = () => {
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

  return (
    <OrthographicCamera
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

export default Camera;
