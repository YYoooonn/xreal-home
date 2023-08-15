import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "@/three/Lightings";
import Camera from "@/three/Camera";
import useFlipped from "@/hooks/useFlipped";

export default function CategoryPage() {
  useFlipped();

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
