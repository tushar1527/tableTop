import { useContext } from "react";
import { LoaderContext } from "../contexts/loader-context";

export const useLoader = () => useContext(LoaderContext)