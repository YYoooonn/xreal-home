import React, { useCallback, useState } from "react";
import { animated, useSpring, SpringConfig } from "@react-spring/three";
import useFlipped from "@/hooks/useFlipped";
import { DELAY_RATIO, ROTATION_CONFIG } from "@/constants/springConfig";

type RotationProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  clicked: boolean;
  isIcon?: boolean;
  config?: SpringConfig;
  ratio?: number;
};

type WrapperProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  isIcon?: boolean;
  config?: SpringConfig;
};

function computeDelay(position: [number, number, number], ratio: number) {
  // 좌표 비율에 맞는 delay 생성
  return (Math.abs(position[0]) + Math.abs(position[2])) * ratio + 10;
}

function computeRotation(isIcon?: boolean) {
  //난수 생성, 임의의 방향으로 rotation 하도록
  const rand = Math.floor(Math.random() * 4);
  const angle = rand % 2 == 1 ? -Math.PI : Math.PI;
  // icon들은 x방향으로만 돌도록, 뒤집힘 방지
  if (rand < 1 || isIcon) {
    return { x_angle: angle, z_angle: 0 };
  } else {
    return { x_angle: 0, z_angle: angle };
  }
}

const RotationWrapper: React.FC<WrapperProps> = (props) => {
  const { flipped } = useFlipped();
  return (
    <SpringRotationWrapper
      position={props.position}
      config={props.config}
      isIcon={props.isIcon}
      clicked={flipped}
    >
      {props.children}
    </SpringRotationWrapper>
  );
};

const SpringRotationWrapper: React.FC<RotationProps> = (props) => {
  const rConfig = props.config ? props.config : ROTATION_CONFIG;
  const dRatio = props.ratio ? props.ratio : DELAY_RATIO;
  const delay = computeDelay(props.position, dRatio);
  const [angle, setAngle] = useState({ x: 0, z: 0 });
  const angleDifference = computeRotation(props.isIcon);
  const { rotation_x } = useSpring({
    rotation_x: props.clicked ? angle.x + angleDifference.x_angle : angle.x,
    delay: delay,
    config: rConfig,
  });
  const { rotation_z } = useSpring({
    rotation_z: props.clicked ? angle.z + angleDifference.z_angle : angle.z,
    delay: delay,
    config: rConfig,
  });
  useCallback(() => {
    setAngle({
      x: angle.x + angleDifference.x_angle,
      z: angle.z + angleDifference.z_angle,
    });
  }, [props.clicked]);
  return (
    <animated.group
      position={props.position}
      rotation-x={rotation_x}
      rotation-z={rotation_z}
    >
      {props.children}
    </animated.group>
  );
};

export { RotationWrapper };
