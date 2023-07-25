import Floor from "@/assets/Floor";
import { Canvas } from "@react-three/fiber";
import {
  OrthographicCamera,
  useHelper,
  OrbitControls,
} from "@react-three/drei";
import { useRef } from "react";
import { PointLightHelper } from "three";

export default function Main() {
  return (
    <div className="canvas">
      <Canvas shadows frameloop="demand">
        <color attach="background" args={["#000000"]} />
        <ambientLight intensity={0.05} />
        <Floor />
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
        {/* PointLihgtwithHelper 나중에 제거 보기 편하기 위함*/}
        <PointLihgtwithHelper />
      </Canvas>
    </div>
  );
}

// 추후 제거
const PointLihgtwithHelper = () => {
  const ref = useRef<THREE.PointLight>(null!);
  useHelper(ref, PointLightHelper);
  return (
    <pointLight
      ref={ref}
      castShadow
      position={[0, 5, 0]}
      distance={20}
      intensity={5}
    />
  );
};
