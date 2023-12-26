import { ThemeProvider } from "@mui/material/styles";
import { ServiceProvider } from "../contexts/service-context";
import { HistoryProvider } from "../contexts/history-context";

import {
  SettingsConsumer,
  SettingsProvider,
} from "../contexts/settings-context";
import { WeatherContextProvider } from "../contexts/weather-context";
import { createTheme } from "../theme";
import { AuthProvider } from "../contexts/auth-context";
import { HomeProvider } from "../contexts/home-context";
import { LoaderProvider } from "../contexts/loader-context";

export const AppWrapper = ({ children }) => {
  return (
    <SettingsProvider>
      <SettingsConsumer>
        {({ settings }) => (
          <ThemeProvider
            theme={createTheme({
              direction: settings.direction,
              responsiveFontSizes: settings.responsiveFontSizes,
              mode: settings.theme,
            })}
          >
            <LoaderProvider>
              <AuthProvider>
                <HomeProvider>
                  <HistoryProvider>
                    <ServiceProvider>
                      <WeatherContextProvider>
                        {children}
                      </WeatherContextProvider>
                    </ServiceProvider>
                  </HistoryProvider>
                </HomeProvider>
              </AuthProvider>
            </LoaderProvider>
          </ThemeProvider>
        )}
      </SettingsConsumer>
    </SettingsProvider>
  );
};
