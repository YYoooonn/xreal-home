import { Edge, MarkerType, Node } from "reactflow";
import "reactflow/dist/base.css";
import flowchartDataset from "./flowchartDataset.json";
import CurriculumEdge from "../_components/CurriculumEdge";
import { reactflow } from "../page.css";

const NODE_WIDTH = 135;
const NODE_GAB = 60;

const { organizationDataset, curriculumDataset } = flowchartDataset;
const longestNodeLength = Math.max(
  ...Object.values(organizationDataset).map((n) => n.length)
);
const addGroup = (
  groupName: string,
  children: string[],
  index: number
): Node[] => {
  const calCenterX = (nodeCount: number) =>
    (NODE_WIDTH + NODE_GAB) * nodeCount - NODE_GAB + 30 * 2;
  const parent = {
    id: groupName + "G",
    type: "group",
    data: { label: "" },
    position: {
      x: (calCenterX(longestNodeLength) - calCenterX(children.length)) / 2,
      y: (150 + 24 + 25) * index,
    },
    style: {
      width: calCenterX(children.length),
    },
    className: reactflow.groupNode,
    draggable: false,
    selectable: false,
  };
  const groupRootNode: Node = {
    id: groupName,
    parentNode: groupName + "G",
    data: { label: groupName },
    position: {
      x: parent.style.width / 2 - NODE_WIDTH / 2,
      y: -25,
    },
    className: reactflow.rootNode,
    draggable: false,
    selectable: false,
  };
  const childNodes = children.map((child, i) => ({
    id: child,
    parentNode: groupName + "G",
    data: { label: child },
    position: {
      x: 30 + (NODE_WIDTH + NODE_GAB) * i,
      y: 75,
    },
    className: reactflow.childNode,
  }));

  return [parent, groupRootNode, ...childNodes];
};

const curriculumEdgeType = { "start-end": CurriculumEdge };

const organizationNodes = Object.entries(organizationDataset)
  .map(([group, nodes], i) => addGroup(group, nodes, i))
  .flat();

const organizationEdges = Object.entries(organizationDataset)
  .map(([group, nodes]) =>
    nodes.map<Edge>((node) => ({
      id: `${group}-${node}`,
      source: group,
      target: node,
      type: "smoothstep",
      markerEnd: {
        type: MarkerType.ArrowClosed,
        strokeWidth: 1.7,
      },
      borderRadius: "8px",
    }))
  )
  .flat() as Edge[];

const curriculumNodes: Node[] = Object.entries(curriculumDataset).map<Node>(
  ([label, { position, id }]) => ({
    id,
    data: {
      label,
    },
    position,
    draggable: false,
    selectable: false,
  })
);

const curriculumEdges: Edge[] = (
  [
    ["before", "전기활동"],
    ["after", "후기활동"],
  ] as const
).map(([source, key]) => ({
  id: source + "-rest",
  source,
  target: "rest",
  type: "start-end",
  data: {
    edgeLabel: {
      title: curriculumDataset[key].title,
      feats: curriculumDataset[key].feats,
    },
  },
  markerStart: "dot",
  markerEnd: {
    type: MarkerType.Arrow,
    strokeWidth: 1.7,
  },
}));
export {
  curriculumEdges,
  curriculumNodes,
  curriculumEdgeType,
  organizationEdges,
  organizationNodes,
};
