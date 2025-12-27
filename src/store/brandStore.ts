import { create } from "zustand";
import { Brand } from "@/types/brand";

interface BrandState {
  selectedBrand?: Brand;
  setBrand: (brand: Brand) => void;
}

export const useBrandStore = create<BrandState>((set) => ({
  selectedBrand: undefined,
  setBrand: (brand) => set({ selectedBrand: brand }),
}));
