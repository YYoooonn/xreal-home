import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import Lights from "@/three/Lightings";
import useFlipped from "@/hooks/useFlipped";

export default function Cat() {
  MakeFlipped();
  return (
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
  );
}

function MakeFlipped() {
  const { flipped, setFlipped } = useFlipped();
  if (!flipped) {
    setFlipped();
  }
}
