import useProjectStatus from "@/hooks/useProjectStatus";
import ProjectsPageUI from "@/three/threeUI/ProjectsPageUI";
import GuideUI from "@/three/threeUI/guideUI";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingPage from "@/components/loading/LoadingPage";

const Scene = dynamic(() => import("@/three/Scene"), {
  ssr: false,
});

export default function ProjectsPage() {
  useProjectStatus();

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="canvas">
        <Scene />
      </div>
    </Suspense>
  );
}
