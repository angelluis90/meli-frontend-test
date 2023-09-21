import { TCategoryStore } from "@src/types";
import { create } from "zustand";

const useCategories = create<TCategoryStore>((set) => ({
  categories: [],
  isLoading: false,
  setCategories: (categories: string[]) =>
    set((state) => {
      return {
        ...state,
        categories: categories,
      };
    }),
  setIsLoading: (loading: boolean) =>
    set((state) => {
      return {
        ...state,
        isLoading: loading,
      };
    }),
}));

export default useCategories;
