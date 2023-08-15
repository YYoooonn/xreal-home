import Floor from "@/three/Floor";
import { Canvas } from "@react-three/fiber";
import { OrthographicCamera, OrbitControls } from "@react-three/drei";
import Lights from "@/three/Lightings";
import GuideUI from "@/components/pages/projects/guideUI";
import UI from "@/components/pages/projects/UI";
import useFlipped from "@/hooks/useFlipped";

export default function ProjectsPage() {
  useFlipped();

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
