import React, { ReactElement, useCallback, useEffect, useState } from "react";
import { animated, useSpring, SpringConfig } from "@react-spring/three";
import useFlipped from "@/hooks/useFlipped";
import { DELAY_RATIO, ROTATION_CONFIG } from "@/constants/springConfig";

type RotationProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  clicked: boolean;
  config?: SpringConfig;
  ratio?: number;
};

type WrapperProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  config?: SpringConfig;
};

function computeDelay(position: [number, number, number], ratio: number) {
  // 좌표 비율에 맞는 delay 생성
  return (Math.abs(position[0]) + Math.abs(position[2])) * ratio + 10;
}

function computeRotation() {
  //난수 생성, 임의의 방향으로 rotation 하도록
  const rand = Math.floor(Math.random() * 4);
  const angle = rand % 2 == 1 ? -Math.PI : Math.PI;
  if (rand < 1) {
    return { x_angle: 0, z_angle: angle };
  } else {
    return { x_angle: angle, z_angle: 0 };
  }
}

const RotationWrapper: React.FC<WrapperProps> = (props) => {
  const { flipped, setFlipped } = useFlipped();
  return (
    <SpringRotationWrapper
      position={props.position}
      config={props.config}
      clicked={flipped}
    >
      {props.children}
    </SpringRotationWrapper>
  );
};

const DebugRotationWrapper: React.FC<RotationProps> = (props) => {
  return (
    <SpringRotationWrapper position={props.position} clicked={props.clicked}>
      {props.children}
    </SpringRotationWrapper>
  );
};

const SpringRotationWrapper: React.FC<RotationProps> = ({
  children,
  position,
  clicked,
  config,
  ratio,
}) => {
  const rConfig = config ? config : ROTATION_CONFIG;
  const dRatio = ratio ? ratio : DELAY_RATIO;
  const delay = computeDelay(position, dRatio);
  const [angle, setAngle] = useState({ x: 0, z: 0 });
  const angleDifference = computeRotation();
  const { rotation_x } = useSpring({
    rotation_x: clicked ? angle.x + angleDifference.x_angle : angle.x,
    delay: delay,
    config: rConfig,
  });
  const { rotation_z } = useSpring({
    rotation_z: clicked ? angle.z + angleDifference.z_angle : angle.z,
    delay: delay,
    config: rConfig,
  });
  useCallback(() => {
    setAngle({
      x: angle.x + angleDifference.x_angle,
      z: angle.z + angleDifference.z_angle,
    });
  }, [clicked]);
  return (
    <animated.group
      position={position}
      rotation-x={rotation_x}
      rotation-z={rotation_z}
    >
      {children}
    </animated.group>
  );
};

export { RotationWrapper, DebugRotationWrapper };
