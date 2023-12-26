import { useContext } from "react";
import { ServiceContext } from "../contexts/service-context";

export const useService = () => useContext(ServiceContext);
