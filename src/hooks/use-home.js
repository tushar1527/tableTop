import { useContext } from "react";
import { HomeContext } from "../contexts/home-context";

export const useHome = () => useContext(HomeContext);
