import { Center, OrbitControls, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Sample() {
  return (
    <Canvas shadows>
      <color attach="background" args={['#000000']} />
      <OrbitControls
        makeDefault={false}
        enableRotate={true}
        enableZoom={false}
      />
      <Center>
        <Text3D font={'assets/fonts/helvetiker_bold.typeface.json'} scale={0.8}>
          Work In Progress
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </Canvas>
  );
}

export default Sample;
