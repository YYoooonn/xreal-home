import React from "react";
import { animated, useSpring, SpringConfig } from "@react-spring/three";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import { DELAY_RATIO, ROTATION_CONFIG } from "@/constants/springConfig";

type SpringProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  delay: number;
  isIcon: boolean;
  isActive: boolean;
  angle: number;
};

type RotationProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  isWhite: boolean;
  delay: number;
  status: StatusEnum;
  isIcon: boolean;
};

type WrapperProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  isWhite: boolean;
  isIcon: boolean;
};

function computeDelay(position: [number, number, number], ratio: number) {
  // 좌표 비율에 맞는 delay 생성
  return (Math.abs(position[0]) + Math.abs(position[2])) * ratio + 10;
}

function computeRotation(angleDiff: number, isIcon?: boolean) {
  //난수 생성, 임의의 방향으로 rotation 하도록
  const rand = Math.floor(Math.random() * 4);
  const angle = rand % 2 == 1 ? -angleDiff : angleDiff;
  // icon들은 x방향으로만 돌도록, 뒤집힘 방지
  if (rand < 1 || isIcon) {
    return { x_angle: angle, z_angle: 0 };
  } else {
    return { x_angle: 0, z_angle: angle };
  }
}

const ButtonRotationWrapper: React.FC<RotationProps> = (props) => {
  const angle = Math.PI;
  const active = props.status !== StatusEnum.Main;
  return (
    <SpringRotationWrapper
      angle={angle}
      isActive={active}
      position={[0, 0, 0]}
      delay={props.delay}
      isIcon={props.isIcon}
    >
      {props.children}
    </SpringRotationWrapper>
  );
};

const ProjectRotationWrapper: React.FC<RotationProps> = (props) => {
  const angle = props.isWhite ? Math.PI : 2 * Math.PI;
  const active = props.status === StatusEnum.Project;
  return (
    <SpringRotationWrapper
      angle={angle}
      isActive={active}
      position={props.position}
      delay={props.delay}
      isIcon={props.isIcon}
    >
      {props.children}
    </SpringRotationWrapper>
  );
};

const SpringRotationWrapper: React.FC<SpringProps> = (props) => {
  const angleDiff = computeRotation(props.angle, props.isIcon);

  const { rotation_x } = useSpring({
    rotation_x: props.isActive ? angleDiff.x_angle : 0,
    delay: props.delay,
    config: ROTATION_CONFIG,
  });

  const { rotation_z } = useSpring({
    rotation_z: props.isActive ? angleDiff.z_angle : 0,
    delay: props.delay,
    config: ROTATION_CONFIG,
  });
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

const RotationWrapper: React.FC<WrapperProps> = (props) => {
  const { status } = useStatus();
  const delay = computeDelay(props.position, DELAY_RATIO);
  return (
    <ProjectRotationWrapper delay={delay} status={status} {...props}>
      <ButtonRotationWrapper delay={delay} status={status} {...props}>
        {props.children}
      </ButtonRotationWrapper>
    </ProjectRotationWrapper>
  );
};

export { RotationWrapper };
