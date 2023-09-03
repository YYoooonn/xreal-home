import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, ScrollControls } from "@react-three/drei";
import Lights from "@/three/Lightings";
import Camera from "@/three/Camera";
import ThreeUI from "./threeUI/ThreeUI";
import * as styles from "./canvas.css";
import { StatusEnum, useStatus } from "@/hooks/useStatus";

export default function Scene() {
  const isProject = useStatus((state) => state.status) === StatusEnum.Project;
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
        <ScrollControls
          pages={isProject ? 4 : 0}
          enabled={isProject}
          damping={0.2}
        >
          <Floor enabled={isProject} />
        </ScrollControls>
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
