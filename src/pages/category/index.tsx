import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "@/three/Lightings";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import Camera from "@/three/Camera";

export default function Category() {
  MakeFlipped();
  return (
    <div className="canvas">
      <Canvas shadows frameloop="demand">
        <Lights />
        <Floor cat={true} />
        <Camera />
        <OrbitControls
          enablePan={false}
          makeDefault={false}
          enableRotate={false}
          enableZoom={false}
        />
      </Canvas>
    </div>
  );
}

function MakeFlipped() {
  const { status, setStatus } = useStatus();
  if (status === StatusEnum.Main) {
    setStatus(StatusEnum.Category);
  }
}
