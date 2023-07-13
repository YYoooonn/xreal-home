import {
  Center,
  Text3D,
  OrthographicCamera,
  Float,
  Grid,
  OrbitControls,
  SpotLight,
} from '@react-three/drei';
import { Canvas } from '@react-three/fiber';

function MainGrid() {
  const hexString = '#000000';
  const SIZE = 10;
  const HALF_SIZE = SIZE / 2;
  return (
    <div>
      <Canvas shadows>
        <color attach="background" args={[hexString]} />
        <OrthographicCamera
          makeDefault
          position={[1000, 1000, 1000]}
          near={0.001}
          far={10000}
          zoom={15}
        />
        <Center position={[0, 3.5, 0]} top>
          <Float
            speed={5}
            floatingRange={[-0.05, 0.05]}
            rotationIntensity={0.5}
          >
            <Text3D
              font="assets/fonts/helvetiker_bold.typeface.json"
              scale={8}
              receiveShadow
              castShadow
            >
              Y
              <meshPhongMaterial color={'#00FA77'} />
              {/* <wireframeGeometry/> */}
            </Text3D>
          </Float>
        </Center>

        <ambientLight intensity={0.03} />
        <Grid
          position={[HALF_SIZE, 0, HALF_SIZE]}
          cellSize={HALF_SIZE}
          cellThickness={0}
          sectionSize={SIZE}
          sectionThickness={1}
          infiniteGrid={true}
          followCamera={false}
          sectionColor={'#00FA77'}
          cellColor={'#FFFFFF'}
          fadeDistance={10000}
        />
        <OrbitControls
          makeDefault={false}
          enableRotate={false}
          enableZoom={false}
        />
        <SpotLight
          position={[0, -0.01, 0]}
          distance={20}
          attenuation={15}
          anglePower={0.7}
          angle={1.5}
          penumbra={0.5}
          color={'#00FA77'}
        />
      </Canvas>
    </div>
  );
}

export default MainGrid;
