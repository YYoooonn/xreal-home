import { create } from "zustand";
/*
변수 관리를 위한 zustand
https://github.com/pmndrs/zustand
*/

interface FlippedState {
  flipped: boolean;
  setFlipped: () => void;
}

const useFlipped = create<FlippedState>((set) => ({
  flipped: false,
  setFlipped: () => set((state) => ({ flipped: !state.flipped })),
}));

export default useFlipped;
