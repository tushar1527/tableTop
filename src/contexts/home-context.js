import { createContext, useCallback, useContext, useState } from "react";
import { AUTH_LOGIN_API, IDLE_SCREEN_API } from "../apis/api-url";
import { apiInstance } from "../apis/axios";
import { AuthContext } from "./auth-context";
import { isExpired } from "react-jwt";
import { LoaderContext } from "./loader-context";

export const HomeContext = createContext({
  onLoadData: () => {},
  dashboard: {},
});
export const HomeProvider = ({ children }) => {
  const [dashboard, setDashboard] = useState(null);
  const { onLoginUser } = useContext(AuthContext);
  const { setLoading } = useContext(LoaderContext);
  const onLoadData = useCallback(async () => {
    let token = localStorage.getItem("token");
    let expired = isExpired(token);
    if (expired) {
      let data = await onLoginUser();
      token = data.key;
    }
    setLoading(true);
    let result = await apiInstance.post(
      IDLE_SCREEN_API,
      {},
      { headers: { Authorization: `Bearer ${token}` } }
    );

    if (result?.data) {
      setDashboard(result.data);
      setLoading(false);
    }
  }, []);
  let value = {
    dashboard,
    onLoadData: useCallback(() => {
      return onLoadData();
    }, [onLoadData]),
  };
  return <HomeContext.Provider value={value}>{children}</HomeContext.Provider>;
};
