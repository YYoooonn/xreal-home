import { createContext, useContext, useRef, useState } from "react";

interface SideNavContext {
  nearestIndex: number;
  scrollToIndex: (index: number) => () => void;
  collectData: () => () => void;
}

const sideNavContext = createContext<SideNavContext>({
  nearestIndex: 0,
  scrollToIndex: () => () => {},
  collectData: () => () => {},
});

export default function SideNavProvider({ children }: React.PropsWithChildren) {
  const [nearestIndex, setNearestIndex] = useState(0);
  const pageModalRef = useRef<HTMLElement>();
  const scrollAnchorPointsRef = useRef<number[]>([]);

  const collectData = () => {
    const pagemodal = document.getElementById("page-modal")!;
    const offsets = Array.from(
      document.querySelectorAll<HTMLDivElement>("section[data-modal-section]"),
      (section) => section.offsetTop
    );
    const total = offsets.reduce((a, e) => a + e, 0);
    const ratio = offsets.map((offset) => offset / total);
    const anchorPoints = ratio.map((rat, i) =>
      offsets[i] - 40 + pagemodal.offsetHeight <= pagemodal.scrollHeight
        ? offsets[i] - 40
        : rat * (pagemodal.scrollHeight - pagemodal.offsetHeight)
    );
    scrollAnchorPointsRef.current = anchorPoints;

    const pageModal = document.getElementById("page-modal")!;
    pageModalRef.current = pageModal;

    const handleScroll = () => {
      let nearest = [Infinity, 0]; // distant, anchorPoint
      for (let i = 0; i < anchorPoints.length; i++) {
        const anchorPoint = anchorPoints[i];
        const dst = Math.abs(anchorPoint - pageModal.scrollTop);
        if (dst < nearest[0]) nearest = [dst, i];
      }
      setNearestIndex(nearest[1]);
    };

    pageModal.addEventListener("scroll", handleScroll);
    return () => pageModal.removeEventListener("scroll", handleScroll);
  };

  const scrollToIndex = (index: number) => () => {
    if (!pageModalRef.current) return;

    pageModalRef.current.scrollTo({
      top: scrollAnchorPointsRef.current[index],
      behavior: "smooth",
    });
  };

  return (
    <sideNavContext.Provider
      value={{
        nearestIndex,
        scrollToIndex,
        collectData,
      }}
    >
      {children}
    </sideNavContext.Provider>
  );
}

export const useSideNav = () => useContext(sideNavContext);
