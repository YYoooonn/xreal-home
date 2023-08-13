import {
  EdgeProps,
  getSmoothStepPath,
  EdgeLabelRenderer,
  BaseEdge,
  Position,
} from "reactflow";
import * as styles from "./CurriculumEdge.css";
import { theme } from "@/styles/theme.css";
import { useEffect } from "react";

function EdgeLabel({
  transform,
  label: { title, feats },
}: {
  transform: string;
  label: {
    title: string;
    feats: string[];
  };
}) {
  return (
    <div
      style={{
        transform,
      }}
      className={"nodrag nopan " + styles.edgeLabelContainer}
    >
      <h4
        className={styles.title}
        dangerouslySetInnerHTML={{
          __html: `${title.replaceAll("\n", "<br/>")}`,
        }}
      />
      <ul className={styles.featList}>
        {feats.map((feat, i) => (
          <li key={i} className={styles.feat}>
            {feat}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function CustomEdge({
  id,
  sourceX,
  sourceY,
  targetX,
  targetY,
  targetPosition,
  data,
  markerStart,
  markerEnd,
}: EdgeProps) {
  const [edgePath] = getSmoothStepPath({
    sourceX,
    sourceY: sourceY + 25,
    sourcePosition: id == "before-rest" ? Position.Right : Position.Left,
    targetX,
    targetY,
    targetPosition,
  });

  return (
    <>
      <svg style={{ position: "absolute", top: 0, left: 0 }}>
        <defs>
          <marker
            id="dot"
            viewBox="0 0 10 10"
            refX="5"
            refY="5"
            markerWidth="5"
            markerHeight="5"
          >
            <circle cx="5" cy="5" r="5" fill={theme.color.gray5} />
          </marker>
        </defs>
      </svg>
      <BaseEdge
        id={id}
        path={edgePath}
        markerStart={markerStart}
        markerEnd={markerEnd}
      />
      <EdgeLabelRenderer>
        {data?.edgeLabel && (
          <EdgeLabel
            transform={`translate(-50%, 0%) translate(${sourceX}px,${
              sourceY + 25
            }px)`}
            label={data.edgeLabel}
          />
        )}
      </EdgeLabelRenderer>
    </>
  );
}
