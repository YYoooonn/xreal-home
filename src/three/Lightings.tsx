import { PointLightProps, SpotLightProps } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { PointLightHelper, SpotLightHelper, SpotLight } from "three";
import useFlipped from "@/hooks/useFlipped";

function Lights() {
  const { flipped } = useFlipped();
  if (flipped) {
    return <CatLights />;
  } else {
    return <ButtonLights />;
  }
}

function ButtonLights() {
  // 첫 화면 버튼을 위한 라이팅
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={1} color={"#FFFFFF"} />
      <PointLihgtwithHelper
        position={[1.8, 0.1, -2]}
        intensity={2}
        color={"#FFFFFF"}
      />
      <PointLihgtwithHelper
        position={[-2, 0.1, 2]}
        intensity={2}
        color={"#FFFFFF"}
      />
      <PointLihgtwithHelper
        position={[-2, 0.1, -2]}
        intensity={5}
        color={"#FFFFFF"}
      />
      <PointLihgtwithHelper
        position={[2, 0.1, 2]}
        intensity={2}
        color={"#FFFFFF"}
      />
      <SpotLightwithHelper
        position={[0, 10, 0]}
        distance={11}
        intensity={10}
        color={"#24FF00"}
      />
    </>
  );
}

function CatLights() {
  // 카테고리를 위한 라이팅
  return (
    <>
      <ambientLight intensity={1} color={"#FFFFFF"} />
      <PointLihgtwithHelper
        position={[1.8, 0.1, -2]}
        intensity={2}
        color={"#FFFFFF"}
      />
      <PointLihgtwithHelper
        position={[-2, 0.1, 2]}
        intensity={2}
        color={"#FFFFFF"}
      />
      <PointLihgtwithHelper
        position={[-2, 0.1, -2]}
        intensity={5}
        color={"#FFFFFF"}
      />
      <PointLihgtwithHelper
        position={[2, 0.1, 2]}
        intensity={2}
        color={"#FFFFFF"}
      />
      <SpotLightwithHelper
        position={[0, 10, 0]}
        distance={11}
        intensity={10}
        color={"#24FF00"}
      />
    </>
  );
}

const SpotLightwithHelper = (props: SpotLightProps) => {
  const spotlight = useMemo(() => new SpotLight(), []);
  const ref = useRef<THREE.SpotLight>(spotlight);
  useHelper(ref, SpotLightHelper, "red");
  return (
    <group>
      <primitive
        object={spotlight}
        ref={ref}
        castShadow
        position={props.position}
        color={props.color}
        distance={props.distance}
        intensity={props.intensity}
        penumbra={props.penumbra}
        angle={0.5}
      />
      <primitive
        object={spotlight.target}
        // @ts-ignore
        position={[props.position[0], 0, props.position[2]]}
      />
    </group>
  );
};

// 추후 제거
const PointLihgtwithHelper = (props: PointLightProps) => {
  const ref = useRef<THREE.PointLight>(null!);
  useHelper(ref, PointLightHelper, 0.2, "red");
  return (
    <pointLight
      ref={ref}
      castShadow
      position={props.position}
      distance={20}
      color={props.color}
      intensity={props.intensity ? props.intensity : 5}
    />
  );
};

export default Lights;
