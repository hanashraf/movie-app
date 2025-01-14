import { create } from "zustand";
import { TMovie } from "../types/Movies";

type TFavouriteState = {
  favorites: TMovie[];
};

type TFavouriteAction = {
  setFavorites: (CurrentFavorites: TMovie[]) => void;
};

const useFavouriteStore = create<TFavouriteState & TFavouriteAction>((set) => ({
  favorites: JSON.parse(localStorage.getItem("favorites") || "[]"),
  setFavorites: (currentFavorites) => set({ favorites: currentFavorites }),
}));

export default useFavouriteStore;
