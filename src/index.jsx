import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import { HashRouter as Router, Route } from "react-router-dom";
// import { ThemeProvider } from "@mui/material/styles";
// import {
//   SettingsConsumer,
//   SettingsProvider,
// } from "./contexts/settings-context";
// import { WeatherContextProvider } from "./contexts/weather-context";
// import Home from "./App";
// import History from "./pages/History";
// import Services from "./pages/Services";
// import { createTheme } from "./theme";
// import Mural from "./pages/Mural";
// // import ScreenSaver from './components/screen-saver';

ReactDOM.render(
  <App />,
  //   <SettingsProvider>
  //     <SettingsConsumer>
  //       {({ settings }) => (
  //         <ThemeProvider
  //           theme={createTheme({
  //             direction: settings.direction,
  //             responsiveFontSizes: settings.responsiveFontSizes,
  //             mode: settings.theme,
  //           })}
  //         >
  //           <WeatherContextProvider>
  //             <Router>
  //               <div>
  //                 <main>
  //                   <Route path="/history" component={History} />
  //                   <Route path="/services" component={Services} />
  //                   <Route exact path="/" component={Home} />
  //                   <Route path="/mural" component={Mural} />
  //                 </main>
  //               </div>
  //             </Router>
  //           </WeatherContextProvider>
  //         </ThemeProvider>
  //       )}
  //     </SettingsConsumer>
  //   </SettingsProvider>,
  document.getElementById("root")
);
