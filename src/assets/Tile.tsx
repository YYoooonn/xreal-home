import { useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { Group, Mesh } from 'three';
import { useSpring, animated } from '@react-spring/three';
import useClicked from '@/hooks/useMouse';
import Button from './Button';

const urlTile = '/assets/models/Tile.glb';
useGLTF.preload(urlTile);

type GLTFTile = GLTF & {
  nodes: {
    Cube: Group;
  };
};

function Tile({
  isFlipped,
  isButton,
  position,
}: {
  isFlipped: boolean;
  isButton: boolean;
  position: [x: number, y: number, z: number];
}) {
  const { nodes } = useGLTF(urlTile) as GLTFTile;
  const { clicked, setClicked } = useClicked();
  const delay = (Math.abs(position[0]) + Math.abs(position[2])) * 100 + 10;
  // 난수 생성, 랜덤으로 돌아가도록 설정
  const rand = Math.floor(Math.random() * 4);
  const angle = rand > 1 || isButton ? Math.PI : -Math.PI;
  const { rotation } = useSpring({
    rotation: clicked ? angle : 0,
    delay: delay,
    config: { tension: 100, friction: 30 },
  });
  // 버튼인 경우
  const button = isButton ? <Button position={[0, -1, 0]} /> : <></>;
  if (rand > 1 || isButton) {
    return (
      <animated.group
        rotation-x={isFlipped ? Math.PI : 0}
        rotation-z={rotation}
        position={position}
        castShadow
      >
        {nodes.Cube.children.map((child, i) => {
          if (child instanceof Mesh) {
            return (
              <mesh castShadow name="Tile" key={i}>
                <bufferGeometry {...child.geometry} />
                <material attach={'material'} {...child.material} />
              </mesh>
            );
          }
        })}
        {button}
      </animated.group>
    );
  } else {
    return (
      <animated.group
        rotation-x={rotation}
        rotation-z={isFlipped ? Math.PI : 0}
        position={position}
        castShadow
      >
        {nodes.Cube.children.map((child, i) => {
          if (child instanceof Mesh) {
            return (
              <mesh castShadow name="Tile" key={i}>
                <bufferGeometry {...child.geometry} />
                <material attach={'material'} {...child.material} />
              </mesh>
            );
          }
        })}
        {button}
      </animated.group>
    );
  }
}

function WhiteTile(props: {
  meshProps?: JSX.IntrinsicElements['mesh'];
  isButton: boolean;
  position: [x: number, y: number, z: number];
}) {
  return <Tile isFlipped={true} isButton={false} position={props.position} />;
}

function BlackTile(props: {
  meshProps?: JSX.IntrinsicElements['mesh'];
  position: [x: number, y: number, z: number];
}) {
  return <Tile isFlipped={false} isButton={false} position={props.position} />;
}

function ButtonTile(props: { meshProps?: JSX.IntrinsicElements['mesh'] }) {
  return <Tile isFlipped={true} isButton={true} position={[0, 0, 0]} />;
}

export { WhiteTile, BlackTile, ButtonTile };
