import { PointLightProps, SpotLightProps } from "@react-three/fiber";
import { useHelper } from "@react-three/drei";
import { useRef, useMemo } from "react";
import { PointLightHelper, SpotLightHelper, SpotLight } from "three";
import { useStatus, StatusEnum } from "@/hooks/useStatus";

function Lights() {
  const { status } = useStatus();
  if (status === StatusEnum.Main) {
    return <MainLights />;
  } else if (status === StatusEnum.Category) {
    return <CategoryLights />;
  } else {
    return <ProjectLights />;
  }
}

function MainLights() {
  // 첫 화면 버튼을 위한 라이팅
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={1} color={"#000000"} />
      <PointLightUse position={[0.5, 1, 0.5]} intensity={1} color={"#7FFFD4"} />
      <SpotLightUse
        position={[0, 13, 0]}
        distance={14}
        intensity={60}
        color={"#FFFFFF"}
      />
    </>
  );
}

function CategoryLights() {
  // 카테고리를 위한 라이팅
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.6} color={"#FFFFFF"} />
      <PointLightUse
        position={[1.8, 0.1, -2]}
        intensity={3}
        color={"#7FFFD4"}
      />
      <PointLightUse position={[-2, 0.1, 2]} intensity={3} color={"#7FFFD4"} />
      <PointLightUse position={[-2, 0.1, -2]} intensity={3} color={"#7FFFD4"} />
      <PointLightUse position={[2, 0.1, 2]} intensity={3} color={"#7FFFD4"} />
      <SpotLightUse
        position={[0, 9, 0]}
        distance={10}
        intensity={10}
        color={"#FFFFFF"}
      />
    </>
  );
}

function ProjectLights() {
  return (
    <>
      <color attach="background" args={["#000000"]} />
      <ambientLight intensity={0.6} color={"#FFFFFF"} />
      <PointLihgtwithHelper
        position={[1.8, 0.1, -2]}
        intensity={3}
        color={"#7FFFD4"}
      />
      <PointLihgtwithHelper
        position={[-2, 0.1, 2]}
        intensity={3}
        color={"#7FFFD4"}
      />
      <PointLihgtwithHelper
        position={[-2, 0.1, -2]}
        intensity={3}
        color={"#7FFFD4"}
      />
      <PointLihgtwithHelper
        position={[2, 0.1, 2]}
        intensity={3}
        color={"#7FFFD4"}
      />
      <SpotLightwithHelper
        position={[0, 9, 0]}
        distance={10}
        intensity={10}
        color={"#FFFFFF"}
      />
    </>
  );
}

const PointLightUse = (props: PointLightProps) => {
  return <pointLight castShadow distance={20} {...props} />;
};

const SpotLightUse = (props: SpotLightProps) => {
  const spotlight = useMemo(() => new SpotLight(), []);
  const ref = useRef<THREE.SpotLight>(spotlight);
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

// XXX: for debug
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

// XXX: for debug
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
