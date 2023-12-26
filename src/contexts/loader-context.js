import { createContext, useCallback, useState } from "react";

export const LoaderContext = createContext({
  loading: false,
  setLoading: async () => {},
});
export const LoaderProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  let value = {
    loading,
    setLoading: useCallback(async () => {
      setLoading();
    }, [setLoading]),
  };
  return <LoaderContext.Provider value={value}>{children}</LoaderContext.Provider>;
};
