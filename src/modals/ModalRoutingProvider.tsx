import RootPageModal from "@/modals/RootPageModal";
import SubPageModal from "@/modals/SubPageModal";
import { useModalControl } from "@/modals/ModalControlProvider";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect } from "react";

const pageRoute = ["xreal", "events", "joinus", "magazine"];

// TODO: 임시용
type modalPathType = rootPages;
interface ModalRoutingContext {
  push(path: modalPathType): void;
}
const modalRoutingContext = createContext<ModalRoutingContext>({
  push: () => {},
});

function validatePath(path: string): path is modalPathType {
  return pageRoute.includes(path);
}

export default function ModalRoutingProvider({
  children,
}: React.PropsWithChildren) {
  const { open } = useModalControl();
  const router = useRouter();

  useEffect(() => {
    const { modalpath } = Object.fromEntries(
      (router.asPath
        .split("?")[1]
        ?.split("&")
        ?.map((query) => query.split("=")) ?? []) as [string, string][]
    );

    if (!validatePath(modalpath)) return;
    push(modalpath);
  }, []);

  const push = (path: modalPathType) => {
    const Component = dynamic(() => import(`@/modals/pages/${path}/page`));
    const isRoot = !path.includes("/");
    if (isRoot) open(RootPageModal, { children: <Component />, name: path });
    else open(SubPageModal, { children: <Component /> });
  };

  return (
    <modalRoutingContext.Provider value={{ push }}>
      {children}
    </modalRoutingContext.Provider>
  );
}

export const useModalRoute = () => useContext(modalRoutingContext);
