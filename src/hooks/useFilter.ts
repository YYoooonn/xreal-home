import { create } from "zustand";

export const FILTER = {
  DEFAULT: "DEFAULT",
  XR: "XR",
  WEB3: "WEB3",
  STUDY: "STUDY",
  AI: "AI",
  MEDIA_ART: "MEDIA ART",
  NFT: "NFT",
  UXUI: "UX/UI",
  FULL_VIDEO: "360",
  VIRTUALHUMAN: "VIRTUAL HUMAN",
} as const;
export type FILTER = (typeof FILTER)[keyof typeof FILTER];

interface FilterState {
  projectFilter: FILTER;
  setProjectFilter: (newFIlter: FILTER) => void;
}

//현재 상태. Main -> Category -> Project
export const useFilter = create<FilterState>((set) => ({
  projectFilter: FILTER.DEFAULT,
  setProjectFilter: (newFilter) => {
    set({ projectFilter: newFilter });
  },
}));
