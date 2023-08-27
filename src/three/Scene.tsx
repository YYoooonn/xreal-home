import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Lights from "@/three/Lightings";
import Camera from "@/three/Camera";
import ThreeUI from "./threeUI/ThreeUI";
import * as styles from "./canvas.css";

export default function Scene() {
  return (
    <div className={styles.canvas} key={"canvas"}>
      <Canvas
        shadows
        frameloop="demand"
        legacy={true}
        camera={{ manual: true }}
      >
        <color attach="background" args={["#000000"]} />
        <Lights />
        <Floor />
        <Camera />
        <OrbitControls
          enabled={false}
          enablePan={false}
          makeDefault={false}
          enableRotate={false}
          enableZoom={false}
        />
      </Canvas>
      <ThreeUI />
    </div>
  );
}
