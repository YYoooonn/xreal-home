import NoSSR from "@/components/NoSSR";
import React from "react";
import { createPortal } from "react-dom";

interface ModalControllable {
  open: <MP extends ModalProps>(
    Modal: React.ComponentType<MP>,
    props: Omit<MP, "id">
  ) => number;
  close: (id: number) => void;
}

export interface ModalProps {
  id: number;
}

function ModalRenderer({ modals }: { modals: Record<number, JSX.Element> }) {
  return createPortal(
    <div id="modals">
      {Object.entries(modals).map(([id, elem]) => (
        <React.Fragment key={id}>{elem}</React.Fragment>
      ))}
    </div>,
    document.body
  );
}

const ModalControlContext = React.createContext<
  ModalControllable & {
    addEventListener: (key: "open" | "close", listener: () => void) => void;
    removeEventListener: (key: "open" | "close", listener: () => void) => void;
  }
>({
  open: () => -1,
  close: () => {},
  addEventListener: () => {},
  removeEventListener: () => {},
});

export default function ModalControlProvider({
  children,
}: React.PropsWithChildren) {
  const [totalCount, setTotalCount] = React.useState(0);
  const [modals, setModals] = React.useState<Record<number, JSX.Element>>({});
  const [listeners, setListeners] = React.useState<
    Record<"open" | "close", Set<() => void>>
  >({ open: new Set(), close: new Set() });

  const open = <MP extends ModalProps>(
    Modal: React.ComponentType<MP>,
    props: Omit<MP, "id">
  ) => {
    listeners.open.forEach((l) => l());

    setModals((rest) => ({
      [totalCount]: <Modal {...(props as unknown as MP)} id={totalCount} />,
      ...rest,
    }));
    setTotalCount((prev) => prev + 1);
    return totalCount + 1;
  };
  const close = (id: number) => {
    listeners.close.forEach((l) => l());

    setModals(({ [id]: _, ...rest }) => rest);
  };

  const addEventListener = (key: "open" | "close", listener: () => void) =>
    setListeners((prev) => {
      prev[key].add(listener);
      return { ...prev };
    });

  const removeEventListener = (key: "open" | "close", listener: () => void) =>
    setListeners((prev) => {
      prev[key].delete(listener);
      return { ...prev };
    });

  return (
    <ModalControlContext.Provider
      value={{
        addEventListener,
        removeEventListener,
        open,
        close,
      }}
    >
      {children}
      <NoSSR>
        <ModalRenderer modals={modals} />
      </NoSSR>
    </ModalControlContext.Provider>
  );
}

export const useModalControl = () => React.useContext(ModalControlContext);
