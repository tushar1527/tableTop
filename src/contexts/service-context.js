import { createContext, useCallback, useContext, useState } from "react";
import { isExpired } from "react-jwt";
import { SERVICES_API } from "../apis/api-url";
import { apiInstance } from "../apis/axios";
import {
  services as defaultServices,
  taxes as defaultTaxes,
  innovation as defaultInnovation,
} from "../common/constants/services";
import { AuthContext } from "./auth-context";
import { LoaderContext } from "./loader-context";

export const ServiceContext = createContext({
  services: [],
  taxes: [],
  innovation: [],
  loadServicesData: async () => {},
  servicesContent: {},
});

export const ServiceProvider = ({ children }) => {
  const [servicesContent, setServicesContent] = useState(null);
  const [services] = useState([...defaultServices]);
  const [taxes] = useState([...defaultTaxes]);
  const [innovation] = useState([...defaultInnovation]);
  const { onLoginUser } = useContext(AuthContext);
  const { setLoading } = useContext(LoaderContext);

  const loadServicesData = useCallback(async () => {
    try {
      setLoading(true);
      let token = localStorage.getItem("token");
      let expired = isExpired(token);
      if (expired) {
        let data = await onLoginUser();
        token = data.key;
      }
      let result = await apiInstance.post(
        SERVICES_API,
        {},
        { headers: { Authorization: `Bearer ${token}` } }
      );

      if (result?.data) {
        setServicesContent(result.data);
      }

      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }, []);

  let values = {
    services,
    taxes,
    innovation,
    servicesContent,
    loadServicesData: useCallback(async () => {
      return loadServicesData();
    }, [loadServicesData]),
  };

  return (
    <ServiceContext.Provider value={values}>{children}</ServiceContext.Provider>
  );
};
