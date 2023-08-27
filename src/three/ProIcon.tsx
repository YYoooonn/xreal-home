import { useGLTF, useCursor, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import React, { useState } from "react";
import { Mesh, Vector3 } from "three";
import { SCALE_CONFIG } from "@/constants/springConfig";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import positions from "./_data/positions";
import { urlProjectTile } from "@/assets/models/models";
import { invisibleMat, projectTextMat } from "@/assets/materials";
import { Model } from "@/assets/models/project";
import { PRO } from "@/constants/project";
import { useCMSData } from "@/components/CMSDataProvider";

type EmojiProps = {
  projectData: Project;
  position: [x: number, y: number, z: number] | Vector3;
};

function ProjectIcon(props: EmojiProps) {
  const status = useStatus((state) => state.status);
  const isProject = status === StatusEnum.Project;
  // 뒤집힌 경우에만 hover 가능하도록
  const [hovered, setHovered] = useState(false);
  useCursor(hovered && isProject);
  const { scale } = useSpring({
    scale: isProject ? 1 : 0,
    config: SCALE_CONFIG,
    // TODO delay 설정
    delay: isProject ? 1000 : 100,
  });
  return (
    <animated.group position={props.position} scale={scale}>
      <group
        onPointerOver={() => {
          setHovered(true);
        }}
        onPointerLeave={() => {
          setHovered(false);
        }}
        onClick={() => {
          console.log(props.projectData.subtitle);
        }}
      >
        <Emoji logo={props.projectData.logo} hovered={hovered} />
        <ProjectText name={props.projectData.title} hovered={hovered} />
      </group>
      <ProjectTile />
    </animated.group>
  );
}

const ProjectTile = React.memo(() => {
  const { nodes } = useGLTF(urlProjectTile);
  return (
    <>
      {nodes.Tile_Project.children.map((child, i) => {
        if (child instanceof Mesh) {
          return (
            <mesh castShadow name="Tile" key={i} position={[0, 0.1, 0]}>
              <bufferGeometry {...child.geometry} />
              <material attach={"material"} {...child.material} />
            </mesh>
          );
        }
      })}
    </>
  );
});
ProjectTile.displayName = "ProjectTile";

function Emoji(props: { logo: string; hovered: boolean }) {
  // TODO logo to url
  const type = Math.random() > 0.5 ? PRO.Fire : PRO.GrinningFace;
  const { geometry, material } = React.useMemo(() => Model(type), []);
  return (
    <mesh
      rotation-y={type === PRO.Fire ? -Math.PI / 4 : -Math.PI / 6}
      position={[0, 0.15, 0]}
      scale={1}
      geometry={geometry}
      material={props.hovered ? invisibleMat : material}
    />
  );
}

function ProjectText({ name, hovered }: { name: string; hovered: boolean }) {
  return (
    <Text
      position={[0, 0.5, 0]}
      anchorX={"center"}
      anchorY={"middle"}
      rotation-y={Math.PI / 4}
      fontSize={0.3}
      font={"/assets/fonts/IBMPlexSansKR-Bold.woff"}
      material={hovered ? projectTextMat : invisibleMat}
      outlineBlur={0.06}
      outlineWidth={0.06}
      outlineOpacity={0.25}
      outlineColor={"white"}
    >
      {name}
    </Text>
  );
}

const ProIcons = React.memo(() => {
  const { projects } = useCMSData();
  // TODO 일단 4기만 뜨도록
  const filtered = projects.filter((project) => project.period === 4);
  const zipped = Array.from(
    Array(Math.min(filtered.length, positions.length)),
    (_, i) => {
      return { project: filtered[i], position: positions[i] };
    }
  );
  return (
    <group>
      {zipped.map((zip, index) => {
        return (
          <ProjectIcon
            key={index}
            projectData={zip.project}
            position={zip.position}
          />
        );
      })}
    </group>
  );
});
ProIcons.displayName = "ProjectIcons";

export default ProIcons;
