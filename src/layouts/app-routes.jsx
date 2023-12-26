import { useEffect } from "react";
import { useIdleTimer } from "react-idle-timer";
import { useLocation } from "react-router";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import { pageRoutes } from "../common/constants";
import NotFound from "../pages/not-found";
import { TrackActivity } from "./track-activity";

export const AppRoutes = () => {
  return (
    <div className="App">
      <main>
        <HashRouter>
          <Routes>
            {pageRoutes.map((item, index) => (
              <Route
                key={index}
                path={item.path}
                element={<TrackActivity route={item} />}
              />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </HashRouter>
      </main>
    </div>
  );
};
