import useProjectStatus from "@/hooks/useProjectStatus";
import ProjectsPageUI from "@/components/pages/projects/ProjectsPageUI";
import GuideUI from "@/components/pages/projects/guideUI";
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
      <GuideUI />
      <ProjectsPageUI />
    </Suspense>
  );
}
