import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import Lights from "@/three/Lightings";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import GuideUI from "./guideUI";
import UI from "./UI";

export default function Cat() {
  MakeFlipped();
  return (
    <>
      <div className="canvas">
        <Canvas shadows frameloop="demand">
          <Lights />
          <Floor cat={true} />
          <OrthographicCamera
            makeDefault
            castShadow
            position={[100, 80, 100]}
            near={0.001}
            far={10000}
            zoom={150}
          />
          <OrbitControls
            makeDefault={false}
            enableRotate={false}
            enableZoom={false}
          />
        </Canvas>
      </div>
      <GuideUI />
      <UI />
    </>
  );
}

function MakeFlipped() {
  const { status, setStatus } = useStatus();
  if (status === StatusEnum.Main) {
    setStatus(StatusEnum.Category);
  }
}
