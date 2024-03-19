import { create } from 'zustand'

export const useCardShowStore = create((set) => ({
  isOpen: false,
  setOpen: () => set((state) => ({ isOpen: !state.isOpen })),
}))

export default useCardShowStore;