import { createContext, useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import axios from "axios";
import { HomeContext } from "./home-context";

export const WeatherContext = createContext({});

export const WeatherContextProvider = (props) => {
  const { children } = props;
  const [otherCountryData, setOtherCountryData] = useState();
  const [weatherData, setWeatherData] = useState();
  const { dashboard } = useContext(HomeContext);

  useEffect(() => {
    let whetherArray = [];
    if (dashboard?.cities?.length) {
      dashboard?.cities.map((data, i) => {
        axios
          .get(
            `https://api.openweathermap.org/data/2.5/weather/?q=${data}&APPID=11d13ae5034256d2b02b40b79743d41e`
          )

          .then((responce) => {
            if (responce.status === 200 && i == 0) {
              setWeatherData(responce?.data);
            } else if (responce.status === 200 && i !== 0) {
              whetherArray.push(responce.data);
            }
          });
      });
      setOtherCountryData(whetherArray);
    }
  }, [dashboard]);

  return (
    <WeatherContext.Provider
      value={{
        weatherData,
        moreWeatherData: otherCountryData,
      }}
    >
      {children}
    </WeatherContext.Provider>
  );
};

WeatherContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const WeatherContextConsumer = WeatherContextProvider.Consumer;
