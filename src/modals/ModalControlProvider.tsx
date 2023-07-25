import NoSSR from "@/components/NoSSR";
import React from "react";
import { createPortal } from "react-dom";
import { EventEmitter } from "events";

interface ModalControllable {
  open: (Modal: React.ComponentType<ModalProps>) => number;
  close: (id: number) => void;
}

export interface ModalProps {
  id: number;
}

function ModalRenderer({ modals }: { modals: Record<number, JSX.Element> }) {
  return createPortal(
    <>
      {Object.entries(modals).map(([id, elem]) => (
        <React.Fragment key={id}>{elem}</React.Fragment>
      ))}
    </>,
    document.body
  );
}

const ModalControlContext = React.createContext<
  ModalControllable & {
    addEventListener: (key: "open" | "close", listener: () => void) => void;
    removeEventListener: (key: "open" | "close", listener: () => void) => void;
  }
>({
  open: (_Modal) => -1,
  close: (_id) => {},
  addEventListener: (_key, _listener) => {},
  removeEventListener: (_key, _listener) => {},
});

export default function ModalControlProvider({
  children,
}: React.PropsWithChildren) {
  const [totalCount, setTotalCount] = React.useState(0);
  const [modals, setModals] = React.useState<Record<number, JSX.Element>>({});
  const open = (Modal: React.ComponentType<ModalProps>) => {
    emitterRef.current.emit("open");
    setModals((rest) => ({
      [totalCount]: <Modal id={totalCount} />,
      ...rest,
    }));
    setTotalCount((prev) => prev + 1);
    return totalCount + 1;
  };
  const close = (id: number) => {
    emitterRef.current.emit("close");
    setModals(({ [id]: _, ...rest }) => rest);
  };

  const emitterRef = React.useRef<EventEmitter>(new EventEmitter());
  const addEventListener = emitterRef.current.on;
  const removeEventListener = emitterRef.current.off;

  return (
    <>
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
    </>
  );
}

export const useModalControl = () => React.useContext(ModalControlContext);
