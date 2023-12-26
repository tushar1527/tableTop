import { createContext, useState } from "react";
import { city as defaultCity } from "../common/constants/history";
import { years as defaultYears } from "../common/constants/history";

export const HistoryContext = createContext({
  city: [],
  years: [],
});

export const HistoryProvider = ({ children }) => {
  const [city] = useState([...defaultCity]);
  const [years] = useState([...defaultYears]);

  let values = {
    city,
    years,
  };

  return (
    <HistoryContext.Provider value={values}>{children}</HistoryContext.Provider>
  );
};
