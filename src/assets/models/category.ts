import { GLTF } from "three-stdlib";
import { CAT } from "@/constants/category";
import { useGLTF } from "@react-three/drei";
import { MeshStandardMaterial } from "three";

export const urlEvent = "/assets/models/Cate_Event_Model.glb";
export const urlJoinUs = "/assets/models/Cate_Joinus_Model.glb";
export const urlNewMedia = "/assets/models/Cate_NewMedia_Model.glb";
export const urlProject = "/assets/models/Cate_Project_Model.glb";
export const urlXreal = "/assets/models/Cate_XREAL_Model.glb";
useGLTF.preload(urlEvent);
useGLTF.preload(urlJoinUs);
useGLTF.preload(urlNewMedia);
useGLTF.preload(urlProject);
useGLTF.preload(urlXreal);

const map: Record<
  CAT,
  {
    url: string;
    modelName: Extract<
      keyof GLTF["nodes"],
      | "Cate_Event_Model"
      | "Cate_Joinus_Model"
      | "Cate_Magazine_Model"
      | "Cate_XREAL_Model"
      | "Cate_Project_Model"
    >;
  }
> = {
  [CAT.Events]: {
    url: urlEvent,
    modelName: "Cate_Event_Model",
  },
  [CAT.JoinUs]: {
    url: urlJoinUs,
    modelName: "Cate_Joinus_Model",
  },
  [CAT.NEWMEDIA]: {
    url: urlNewMedia,
    // new media의 node는 아직 magazine
    modelName: "Cate_Magazine_Model",
  },
  [CAT.Xreal]: {
    url: urlXreal,
    modelName: "Cate_XREAL_Model",
  },
  [CAT.Project]: {
    url: urlProject,
    modelName: "Cate_Project_Model",
  },
};

export const Model = (type: CAT) => {
  const { url, modelName } = map[type];
  const { nodes } = useGLTF(url);
  if (type === CAT.Xreal) {
    if (
      nodes.Cate_XREAL_Model.material instanceof MeshStandardMaterial &&
      !nodes.Cate_XREAL_Model.material.transparent
    ) {
      nodes.Cate_XREAL_Model.material.setValues({ transparent: true });
    }
  }
  return {
    geometry: nodes[modelName].geometry,
    material: nodes[modelName].material,
  };
};
