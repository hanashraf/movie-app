import { create } from "zustand";

type TQueryStates = {
  query: string;
};
type TQueryActions = {
  setQuery: (newQuery: string) => void;
};

const useQueryStore = create<TQueryStates & TQueryActions>((set) => ({
  query: "",
  setQuery: (newQuery) => set({ query: newQuery }),
}));

export default useQueryStore;
