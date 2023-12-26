import { createContext, useCallback } from "react";
import { AUTH_LOGIN_API } from "../apis/api-url";
import { apiInstance } from "../apis/axios";

export const AuthContext = createContext({
  onLoginUser: async () => {},
});
export const AuthProvider = ({ children }) => {
  const onLoginUser = useCallback(async () => {
    let credentials = {
      user: "kpmg_idlestate",
      password: "kpmg_idlestate",
    };

    let formData = new FormData();

    for (const [key, value] of Object.entries(credentials)) {
      formData.set(key, value);
    }
    let { data } = await apiInstance.post(AUTH_LOGIN_API, formData);
    if (data) {
      localStorage.setItem("token", data.key);
      return data;
    }
  }, []);
  let value = {
    onLoginUser: useCallback(async () => {
      return await onLoginUser();
    }, [onLoginUser]),
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
