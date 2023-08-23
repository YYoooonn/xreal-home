import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingPage from "@/components/loading/LoadingPage";
import { getPresses } from "./api/press";

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

export async function getStaticProps() {
  const presses = await getPresses();
  console.log(presses);
  return {
    props: {
      presses,
    },
    revalidate: 60,
  };
}
