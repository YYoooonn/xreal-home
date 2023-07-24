import { useGLTF } from '@react-three/drei';
import { useSpring, config, animated } from '@react-spring/three';
import { useState } from 'react';
import { Mesh, Group } from 'three';
import { GLTF } from 'three-stdlib';

type GLTFIcon = GLTF & {
  nodes: {
    Event_Group: Group;
  };
};

const urlEvent = '/assets/models/Cat_Event.glb';
const urlJoinUs = '/assets/models/Cat_JoinUs.glb';
const urlMagazine = '/assets/models/Cat_Magazine.glb';
const urlVR = '/assets/models/Cat_VR.glb';
useGLTF.preload(urlEvent);
useGLTF.preload(urlJoinUs);
useGLTF.preload(urlMagazine);
useGLTF.preload(urlVR);

function Icon({
  url,
  position,
}: {
  url: string;
  position: [x: number, y: number, z: number];
}) {
  const { nodes } = useGLTF(url) as GLTFIcon;
  // TODO: 클릭 state
  const [clicked, setClicked] = useState(false);
  const [hovered, setHovered] = useState(false);
  const { scale } = useSpring({
    scale: hovered ? 1.2 : 1,
    config: config.wobbly,
  });
  return (
    <animated.group
      position={position}
      scale={scale}
      onPointerOver={() => {
        setHovered(true);
      }}
      onPointerOut={() => {
        setHovered(false);
      }}
      onClick={() => {
        setClicked(true);
      }}
    >
      {nodes.Event_Group.children.map((child, i) => {
        if (child instanceof Mesh) {
          return (
            <animated.mesh key={i} castShadow name="Tile">
              <bufferGeometry {...child.geometry} />
              <material attach={'material'} {...child.material} />
            </animated.mesh>
          );
        }
      })}
    </animated.group>
  );
}

export default Icon;
