import RootPageModal from "@/modals/RootPageModal";
import SubPageModal from "@/modals/SubPageModal";
import { useModalControl } from "@/modals/ModalControlProvider";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect, useState } from "react";

const pageRoute = [
  "xreal",
  "events",
  "events/metathon/4th",
  "joinus",
  "newmedia",
] as const;

// TODO: 임시용
type modalPathType = (typeof pageRoute)[number];
interface ModalRoutingContext {
  push(path: modalPathType): void;
  back(): void;
  close(): void;
}
const modalRoutingContext = createContext<ModalRoutingContext>({
  push: () => {},
  back: () => {},
  close: () => {},
});

function validatePath(path: string): path is modalPathType {
  return pageRoute.includes(path as modalPathType);
}

function isRoot(path: modalPathType): path is rootPages {
  return !path.includes("/");
}

const pathQueue: modalPathType[] = [];
let latestModalID = -1;
export default function ModalRoutingProvider({
  children,
}: React.PropsWithChildren) {
  const { open, close } = useModalControl();
  const router = useRouter();

  useEffect(() => {
    const { modalpath } = Object.fromEntries(
      (router.asPath
        .split("?")[1]
        ?.split("&")
        ?.map((query) => query.split("=")) ?? []) as [string, string][]
    );

    if (!validatePath(modalpath)) return;
    pathQueue.length = 0;
    latestModalID = -1;
    push(modalpath);
  }, []);

  const openModalPage = (path: modalPathType) => {
    const Component = dynamic(() => import(`@/modals/pages/${path}/page`));

    close(latestModalID);
    latestModalID = isRoot(path)
      ? open(RootPageModal, { children: <Component />, name: path })
      : open(SubPageModal, { children: <Component /> });
  };

  const closeModalPage = () => {
    close(latestModalID);
    router.push(router.basePath);
    pathQueue.length = 0;
    latestModalID = -1;
  };

  const push = (path: modalPathType) => {
    openModalPage(path);
    pathQueue.push(path);
    router.push(`${router.basePath}/?modalpath=${path}`);
  };

  const back = () => {
    pathQueue.pop();
    const path = pathQueue[pathQueue.length - 1];
    if (!path) return;
    openModalPage(path);
    router.push(`${router.basePath}/?modalpath=${path}`);
  };

  return (
    <modalRoutingContext.Provider value={{ push, back, close: closeModalPage }}>
      {children}
    </modalRoutingContext.Provider>
  );
}

export const useModalRoute = () => useContext(modalRoutingContext);
