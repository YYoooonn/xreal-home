import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls, Stats } from "@react-three/drei";
import Lights from "@/three/Lightings";
import { Suspense } from "react";
import LoadingPage from "@/components/loading/LoadingPage";

export default function Main() {
  return (
    <Suspense fallback={LoadingPage()}>
      <div className="canvas">
        <Canvas shadows frameloop="demand">
          <color attach="background" args={["#000000"]} />
          <Lights />
          <Floor cat={false} />
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
    </Suspense>
  );
}
