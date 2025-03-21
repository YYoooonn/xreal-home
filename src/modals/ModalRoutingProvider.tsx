import RootPageModal from "@/modals/layout/RootPageModal";
import SubPageModal from "@/modals/layout/SubPageModal";
import { useModalControl } from "@/modals/ModalControlProvider";
import dynamic from "next/dynamic";
import { useRouter } from "next/router";
import React, { createContext, useContext, useEffect } from "react";
import { PageProps, pageRoute } from "./route";

type modalPathType = (typeof pageRoute)[number];
interface ModalRoutingContext {
  // TODO any 변경 필요
  push(path: modalPathType, props?: any): void;
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
  return (
    path == "xreal" ||
    path == "events" ||
    path == "newmedia" ||
    path == "joinus"
  );
}

function queryToString(obj: object) {
  const entries = Object.entries(obj);
  let resString = "";
  for (const [key, value] of entries) {
    resString += `${key}=${value}&`;
  }
  return resString;
}
const pathQueue: Array<
  modalPathType extends infer T
    ? T extends modalPathType
      ? { path: T; props: PageProps[T] }
      : never
    : never
> = [];
let latestModalID = -1;
export default function ModalRoutingProvider({
  children,
}: React.PropsWithChildren) {
  const { open, close } = useModalControl();
  const router = useRouter();

  useEffect(() => {
    const { modalpath, ...props } = Object.fromEntries(
      (router.asPath
        .split("?")[1]
        ?.split("&")
        ?.map((query) => query.split("=")) ?? []) as [string, string][]
    );
    console.log(props);

    if (!validatePath(modalpath)) return;
    pathQueue.length = 0;
    latestModalID = -1;
    //@ts-ignore
    push(modalpath, props ?? {});
  }, []);

  const openModalPage = <T extends modalPathType>(
    path: T,
    props: PageProps[T]
  ) => {
    const Component = dynamic(
      () => import(`@/modals/pages/${path}/page`)
    ) as React.ComponentType<PageProps[T]> & {
      getName: (props?: PageProps[T]) => string;
    };

    close(latestModalID);
    latestModalID = isRoot(path)
      ? open(RootPageModal, { children: <Component {...props} />, name: path })
      : open(SubPageModal, {
          children: <Component {...props} />,
          name: Component.getName ? Component.getName(props) : "",
          path,
        });
  };

  const closeModalPage = () => {
    close(latestModalID);
    router.push(router.basePath);
    pathQueue.length = 0;
    latestModalID = -1;
  };

  function push<T extends modalPathType>(
    path: Record<string, object> extends PageProps[T] ? never : T,
    props: PageProps[T]
  ): void;
  function push<T extends modalPathType>(
    path: Record<string, object> extends PageProps[T] ? T : never
  ): void;
  function push<T extends modalPathType>(
    path: T,
    ...[props = {}]: object extends PageProps[T] ? [object?] : [PageProps[T]]
  ): void {
    openModalPage(path, props);
    pathQueue.push({ path, props: props as any });
    router.push(
      `${router.basePath}/?modalpath=${path}&${queryToString(props)}`
    );
  }

  const back = () => {
    pathQueue.pop();
    const lastPathData = pathQueue[pathQueue.length - 1];
    if (!lastPathData) return;
    openModalPage(lastPathData.path, lastPathData.props);
    router.push(
      `${router.basePath}/?modalpath=${lastPathData.path}&${queryToString(
        lastPathData.props
      )}`
    );
  };

  return (
    <modalRoutingContext.Provider value={{ push, back, close: closeModalPage }}>
      {children}
    </modalRoutingContext.Provider>
  );
}

export const useModalRoute = () => useContext(modalRoutingContext);
