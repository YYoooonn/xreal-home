import React from "react";
import { animated, useSpring } from "@react-spring/three";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import { DELAY_RATIO, ROTATION_CONFIG } from "@/constants/springConfig";
import * as utils from "@/three/utils/compute";

type SpringProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  delay: number;
  rotateX: boolean;
  isActive: boolean;
  angle: number;
};

type RotationProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  isWhite: boolean;
  delay: number;
  status: StatusEnum;
  rotateX: boolean;
};

type WrapperProps = {
  children: JSX.Element | JSX.Element[];
  position: [x: number, y: number, z: number];
  isWhite: boolean;
  rotateX: boolean;
};

const ButtonRotationWrapper: React.FC<RotationProps> = (props) => {
  const angle = Math.PI;
  const active = props.status === StatusEnum.Category;
  return (
    <SpringRotationWrapper
      angle={angle}
      isActive={active}
      position={[0, 0, 0]}
      delay={props.delay}
      rotateX={props.rotateX}
    >
      {props.children}
    </SpringRotationWrapper>
  );
};

const ProjectRotationWrapper: React.FC<RotationProps> = (props) => {
  const angle = props.isWhite ? 2 * Math.PI : Math.PI;
  const active = props.status === StatusEnum.Project;
  return (
    <SpringRotationWrapper
      angle={angle}
      isActive={active}
      position={props.position}
      delay={props.delay}
      rotateX={props.rotateX}
    >
      {props.children}
    </SpringRotationWrapper>
  );
};

const SpringRotationWrapper: React.FC<SpringProps> = (props) => {
  const angle = utils.computeRotation(props.angle);
  const { rotation } = useSpring({
    rotation: props.isActive ? angle : 0,
    delay: props.delay,
    config: ROTATION_CONFIG,
  });

  return (
    <animated.group
      position={props.position}
      rotation-x={props.rotateX ? rotation : 0}
      rotation-z={props.rotateX ? 0 : rotation}
    >
      {props.children}
    </animated.group>
  );
};

const RotationWrapper: React.FC<WrapperProps> = (props) => {
  const status = useStatus((state) => state.status);
  const delay = utils.computeDelay(props.position, DELAY_RATIO);
  return (
    <ProjectRotationWrapper delay={delay} status={status} {...props}>
      <ButtonRotationWrapper delay={delay} status={status} {...props}>
        {props.children}
      </ButtonRotationWrapper>
    </ProjectRotationWrapper>
  );
};

export { RotationWrapper };
