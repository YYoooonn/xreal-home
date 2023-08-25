import ModalControlProvider from "@/modals/ModalControlProvider";
import ModalRoutingProvider from "@/modals/ModalRoutingProvider";
import { Suspense } from "react";
import CMSDataProvider from "./CMSDataProvider";
import LoadingPage from "./loading/LoadingPage";
import dynamic from "next/dynamic";

// XXX dynamic 내부 옵션의 loading 말고 suspense 내부에 넣어야 useProgress 반영됨, 나중에 체크
const Scene = dynamic(() => import("@/three/Scene"), {
  ssr: false,
});

export default function RootProviders({
  children,
  ...props
}: React.PropsWithChildren<
  React.PropsWithElementProps<typeof CMSDataProvider>
>) {
  return (
    <CMSDataProvider {...props}>
      <ModalControlProvider>
        <ModalRoutingProvider>
          <Suspense fallback={<LoadingPage />}>
            <div className="canvas">
              <Scene />
            </div>
          </Suspense>
        </ModalRoutingProvider>
      </ModalControlProvider>
    </CMSDataProvider>
  );
}
