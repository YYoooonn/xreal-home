import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingPage from "@/components/loading/LoadingPage";

// XXX dynamic 내부 옵션의 loading 말고 suspense 내부에 넣어야 useProgress 반영됨, 나중에 체크
const Scene = dynamic(() => import("@/three/Scene"), {
  ssr: false,
});

export default function HomePage() {
  return (
    <Suspense fallback={<LoadingPage />}>
      <div className="canvas">
        <Scene />
      </div>
    </Suspense>
  );
}
