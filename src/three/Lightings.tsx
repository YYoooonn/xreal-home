import { PointLightProps } from "@react-three/fiber";
import { useHelper, SpotLight } from "@react-three/drei";
import { StatusEnum, useStatus } from "@/hooks/useStatus";
import { animated, useSpring } from "@react-spring/three";
import { DISPOSE_DELAY, SCALE_CONFIG } from "@/constants/springConfig";
import { useRef } from "react";
import { PointLightHelper } from "three";

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
  const { status } = useStatus();
  const isMain = status === StatusEnum.Main;
  const { scale_main } = useSpring({
    scale_main: isMain ? 1 : 0,
    config: SCALE_CONFIG,
    delay: DISPOSE_DELAY,
  });
  const { scale_category } = useSpring({
    scale_category: isMain ? 0 : 1,
    config: SCALE_CONFIG,
    delay: DISPOSE_DELAY,
  });
  // position 처리 중요, 어느 위치로 사라지는 것이 좋은지에 대한 고려 필요
  return (
    <group>
      <animated.group scale={scale_main} position={[0, 100, 0]}>
        <SpotLight
          distance={14}
          intensity={60}
          color={"#FFFFFF"}
          position={[0, -87, 0]}
          angle={0.5}
          castShadow
        />
      </animated.group>
      <animated.group scale={scale_category} position={[0, -1, 0]}>
        <group position={[0, 100, 0]}>
          <SpotLight
            distance={10}
            intensity={6}
            color={"#FFFFFF"}
            position={[0, -91, 0]}
            angle={0.5}
            castShadow
          />
        </group>
        <PointLihgtwithHelper
          position={[3, 2, 3]}
          intensity={1}
          color={"#7FFFD4"}
          distance={20}
          castShadow
        />
        <PointLihgtwithHelper
          position={[-2.5, 2, 2]}
          intensity={1}
          color={"#7FFFD4"}
          distance={20}
          castShadow
        />
        <PointLihgtwithHelper
          position={[2, 2, -3]}
          intensity={1}
          color={"#7FFFD4"}
          distance={20}
          castShadow
        />
      </animated.group>
    </group>
  );
}

// 추후 제거
const PointLihgtwithHelper = (props: PointLightProps) => {
  const ref = useRef<THREE.PointLight>(null!);
  useHelper(ref, PointLightHelper, 0.2, "red");
  return (
    <pointLight
      ref={ref}
      castShadow
      position={props.position}
      color={props.color}
      intensity={props.intensity ? props.intensity : 5}
    />
  );
};

export default Lights;
