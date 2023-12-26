import { Box } from "@mui/system";
import Primary from "../components/History/widgets/Primary";
import Secondary from "../components/History/widgets/Secondary";
import Firms from "../components/History/widgets/Firms";
import Navigation from "../components/History/widgets/Navigation";
import React, { useState } from "react";
import Screensaver from "../components/screen-saver";
import Years from "../components/History/widgets/Years";
import Bg from "../components/History/widgets/Bg";

const TempHistory = () => {
  const [showSS, setShowSS] = useState(false);
  return (
    <div className="">
      <Screensaver setShowScreenSaver={setShowSS} />

      {!showSS && (
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            paddingRight: "10%",
            overflowY: "hidden",
          }}
        >
          {" "}
          <Box>
            <Bg />
          </Box>
          <Box sx={{ position: "relative", minWidth: "1893px" }}>
            <Primary />
          </Box>
          <Box sx={{ position: "relative", minWidth: "1893px" }}>
            <Secondary />
          </Box>
          <Box sx={{ position: "relative", minWidth: "1893px" }}>
            <Firms />
          </Box>
          <Box
            sx={{
              position: "fixed",
              bottom: "15%",
              zIndex: "999999",
              left: "0",
              overflow: "auto",
              width: "auto",
            }}
          >
            <Years />
          </Box>
          <div className="history-table-menu">
            <Navigation />
          </div>
        </Box>
      )}
    </div>
  );
};

export default TempHistory;
