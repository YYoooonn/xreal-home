import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "@/three/Lightings";
import Camera from "@/three/Camera";

export default function Scene() {
  return (
    <Canvas shadows frameloop="demand">
      <color attach="background" args={["#000000"]} />
      <Lights />
      <Floor removeButton={false} />
      <Camera />
      <OrbitControls
        enablePan={false}
        makeDefault={false}
        enableRotate={false}
        enableZoom={false}
      />
    </Canvas>
  );
}
