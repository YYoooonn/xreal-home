import useFlipped from "@/hooks/useFlipped";
import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingPage from "@/components/loading/LoadingPage";

const Scene = dynamic(() => import("@/three/Scene"), {
  ssr: false,
});

export default function CategoryPage() {
  useFlipped();

  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="canvas">
        <Scene />
      </div>
    </Suspense>
  );
}
