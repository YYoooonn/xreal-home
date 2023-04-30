import { Center, Text3D } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function Sample() {
  return (
    <Canvas shadows>
      <color attach="background" args={['#000000']} />
      <Center>
        <Text3D font={'assets/fonts/helvetiker_bold.typeface.json'}>
          hello, world!
          <meshNormalMaterial />
        </Text3D>
      </Center>
    </Canvas>
  );
}

export default Sample;
