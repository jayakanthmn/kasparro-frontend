import { create } from "zustand";

interface ModuleState {
  selectedModuleId: string;
  setModule: (id: string) => void;
}

export const useModuleStore = create<ModuleState>((set) => ({
  selectedModuleId: "visibility",
  setModule: (id) => set({ selectedModuleId: id }),
}));
