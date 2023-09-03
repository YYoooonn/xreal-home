import { SpotLight } from "@react-three/drei";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import { animated, useSpring } from "@react-spring/three";
import {
  DISPOSE_DELAY,
  SCALE_CONFIG,
  LIGHT_EXPOSE_CONFIG,
} from "@/constants/springConfig";

function Lights() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0} color={"#FFFFFF"} />
      <AdditionalLights />
    </>
  );
}

function AdditionalLights() {
  // spring의 animate 사용하여 생성되도록, 끊김 현상 방지
  const status = useStatus((state) => state.status);
  // position 처리 중요, 어느 위치로 사라지는 것이 좋은지에 대한 고려 필요
  return (
    <group>
      <MainLights enabled={status === StatusEnum.Main} />
      <CategoryLights enabled={status === StatusEnum.Category} />
      <ProjectLights enabled={status === StatusEnum.Project} />
    </group>
  );
}

function ProjectLights({ enabled }: { enabled: boolean }) {
  const { y } = useSpring({
    y: enabled ? 0 : -51,
    config: LIGHT_EXPOSE_CONFIG,
  });
  return (
    <animated.group position-y={y}>
      <pointLight
        position={[10, 3, -10]}
        intensity={15}
        color={"#7FFFD4"}
        distance={18}
      />
      <pointLight
        position={[-10, 3, 18]}
        intensity={5}
        color={"#FFFFFF"}
        distance={35}
      />
      <pointLight
        position={[8, 3, 10]}
        intensity={4}
        color={"#FFFFFF"}
        distance={20}
      />
      <pointLight
        position={[-10, 3, -10]}
        intensity={2}
        color={"#7FFFD4"}
        distance={50}
      />
    </animated.group>
  );
}

function CategoryLights({ enabled }: { enabled: boolean }) {
  const { scale } = useSpring({
    scale: enabled ? 1 : 0,
    config: SCALE_CONFIG,
    delay: DISPOSE_DELAY,
  });
  const { y } = useSpring({
    y: enabled ? 0 : 30,
    config: LIGHT_EXPOSE_CONFIG,
    delay: DISPOSE_DELAY,
  });
  return (
    <animated.group position-y={y}>
      <SpotLight
        angle={0.5}
        position={[0, 9, 0]}
        distance={10}
        intensity={6}
        color={"#FFFFFF"}
        castShadow
      />
      <pointLight
        position={[3, 2, 3]}
        intensity={1}
        color={"#7FFFD4"}
        distance={20}
        castShadow
      />
      <pointLight
        position={[-2.5, 2, 2]}
        intensity={1}
        color={"#7FFFD4"}
        distance={20}
        castShadow
      />
      <pointLight
        position={[3, 2, -2]}
        intensity={0.5}
        color={"#7FFFD4"}
        distance={20}
        castShadow
      />
    </animated.group>
  );
}

function MainLights({ enabled }: { enabled: boolean }) {
  const { scale } = useSpring({
    scale: enabled ? 1 : 0,
    config: SCALE_CONFIG,
    delay: DISPOSE_DELAY,
  });
  return (
    <animated.group scale={scale} position={[0, 100, 0]}>
      <SpotLight
        distance={14}
        intensity={10}
        color={"#FFFFFF"}
        position={[0, 13, 0]}
        angle={0.5}
      />
    </animated.group>
  );
}

export default Lights;
