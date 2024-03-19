import { create } from "zustand";

export const useSingleProductStore = create((set) => ({
    isSingleProduct: "",
    setSingleProduct: (state) => set({ isSingleProduct: state }),
}));

export default useSingleProductStore;
