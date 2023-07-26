import { create } from "zustand";
/*
변수 관리를 위한 zustand
https://github.com/pmndrs/zustand
*/

interface ClickedState {
  clicked: boolean;
  setClicked: () => void;
}

const useClicked = create<ClickedState>((set) => ({
  clicked: false,
  setClicked: () => set(() => ({ clicked: true })),
}));

export default useClicked;
