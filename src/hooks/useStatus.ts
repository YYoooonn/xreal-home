import { create } from "zustand";
/*
변수 관리를 위한 zustand
https://github.com/pmndrs/zustand
*/

export enum StatusEnum {
  Main,
  Category,
  Project,
}

interface StatusState {
  status: StatusEnum;
  setStatus: (newStatus: StatusEnum) => void;
}

//현재 상태. Main -> Category -> Project
export const useStatus = create<StatusState>((set) => ({
  status: StatusEnum.Main,
  setStatus: (newStatus) => set({ status: newStatus }),
}));
