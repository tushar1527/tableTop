import { useContext } from "react";
import { HistoryContext } from "../contexts/history-context";

export const useHistory = () => useContext(HistoryContext);
