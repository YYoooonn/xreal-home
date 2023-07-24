import React, { ReactElement } from "react";
import { animated, useSpring } from "@react-spring/three";
import useClicked from '@/hooks/useMouse';

type WrapperProps = {
    children : JSX.Element | JSX.Element[];
    position : [x:number, y:number, z:number];
}

function computeDelay(position : [x:number, y:number, z:number]){
    /* 좦에 맞게 delay 설정 */
    return Math.abs(position[0]) + Math.abs(position[2]) * 100 + 10;
}

const RotationWrapper = ({children, position} : WrapperProps): ReactElement => {
    const { clicked, setClicked } = useClicked();
    const delay = computeDelay(position);
    // 난수 생성, 랜덤으로 돌아가도록 설정
    const rand = Math.floor(Math.random() * 4);
    let angle
    if(rand % 2 == 1){
        angle = -Math.PI
    } else {
        angle = Math.PI
    }
    const { rotation } = useSpring({
        rotation: clicked ? angle : 0,
        delay: delay,
        config: { tension: 100, friction: 30 },
    });
    let x_angle, z_angle
    if(rand > 1){
        x_angle = 0
        z_angle = rotation
    } else {
        x_angle = rotation
        z_angle = 0
    }
    return(
    <animated.group position={position} rotation-x ={x_angle} rotation-z={z_angle}>
        {children}
    </animated.group>
    )
}

export { RotationWrapper };