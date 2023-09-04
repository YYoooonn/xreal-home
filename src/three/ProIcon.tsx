import { useGLTF, useCursor, Text } from "@react-three/drei";
import { useSpring, animated } from "@react-spring/three";
import React, { useState } from "react";
import { Mesh, Vector3 } from "three";
import { SCALE_CONFIG, FILTER_CONFIG } from "@/constants/springConfig";
import { useStatus, StatusEnum } from "@/hooks/useStatus";
import { projects4, projects3 } from "./_data/positions";
import { urlProjectTile } from "@/assets/models/models";
import { projectTextMat } from "@/assets/materials";
import { Model } from "@/assets/models/project";
import { useCMSData } from "@/components/CMSDataProvider";
import { useModalRoute } from "@/modals/ModalRoutingProvider";
import { filterType, useFilter } from "@/hooks/useFilter";

type EmojiProps = {
  projectData: Project;
  position: [x: number, y: number, z: number] | Vector3;
};

function ProjectIcon(props: EmojiProps) {
  const status = useStatus((state) => state.status);
  const isProject = status === StatusEnum.Project;

  const projectFilter = useFilter((state) => state.projectFilter);
  const isSelected = props.projectData.category
    .map((category) => filterType[category])
    .includes(projectFilter);

  const { push } = useModalRoute();
  // 뒤집힌 경우에만 hover 가능하도록
  const [hovered, setHovered] = useState(false);
  useCursor(hovered && isProject);
  const { scale } = useSpring({
    scale: isProject ? 1 : 0,
    config: SCALE_CONFIG,
    // TODO delay 설정
    delay: isProject ? 500 : 100,
  });

  const { scale_filtered } = useSpring({
    scale_filtered: isSelected ? 1.3 : 1,
    config: SCALE_CONFIG,
  });
  const { rotation_filtered } = useSpring({
    rotation_filtered: isSelected ? 2 * Math.PI : 0,
    config: FILTER_CONFIG,
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
          push("project", { projectName: props.projectData.title });
        }}
      >
        <animated.group scale={scale_filtered} rotation-y={rotation_filtered}>
          <Emoji logo={props.projectData.logo} hovered={hovered} />
          <ProjectText name={props.projectData.title} hovered={hovered} />
        </animated.group>
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

function Emoji({ logo, hovered }: { logo: string; hovered: boolean }) {
  // TODO logo to url
  const { geometry, material } = React.useMemo(() => Model(logo), []);
  return (
    <mesh
      visible={!hovered}
      rotation-y={-Math.PI / 3}
      position={[0, 0.2, 0]}
      scale={1}
      geometry={geometry}
      material={material}
    />
  );
}

function ProjectText({ name, hovered }: { name: string; hovered: boolean }) {
  return (
    <Text
      visible={hovered}
      position={[0, 0.5, 0]}
      anchorX={"center"}
      anchorY={"middle"}
      rotation-y={Math.PI / 4}
      fontSize={0.3}
      font={"/assets/fonts/IBMPlexSansKR-Bold.woff"}
      material={projectTextMat}
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
  // XXX 더 나은 방법?
  const period3 = new Set<Project>();
  const period4 = new Set<Project>();
  projects.map((project) => {
    if (project.periods.includes(3)) {
      period3.add(project);
    }
    if (project.periods.includes(4)) {
      period4.add(project);
    }
  });
  // console.log(period4)

  const zipped4 = Array.from(period4, (p, i) => {
    return { project: p, position: projects4[i] };
  });
  const zipped3 = Array.from(period3, (p, i) => {
    return { project: p, position: projects3[i] };
  });
  return (
    <group>
      {zipped4.map((zip, index) => {
        return (
          <ProjectIcon
            key={index}
            projectData={zip.project}
            position={zip.position}
          />
        );
      })}
      {zipped3.map((zip, index) => {
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
