import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

const useStore = create(
  persist(
    (set) => ({
      theme: false,
      switchTheme: () => set((state) => ({ theme: !state.theme })),
    }),
    {
      name: "theme-store", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

export default useStore;
