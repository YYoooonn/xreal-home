import { createContext, useContext } from "react";

const CMSDataContext = createContext<CMSData>(undefined as any);

export default function CMSDataProvider({
  children,
  ...props
}: React.PropsWithChildren<CMSData>) {
  return (
    <CMSDataContext.Provider value={props}>{children}</CMSDataContext.Provider>
  );
}

export const useCMSData = () => useContext(CMSDataContext);
