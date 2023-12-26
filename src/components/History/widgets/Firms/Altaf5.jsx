import React, { useState } from "react";
import Hyderabad from "../../assets/Hyderabad.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf5 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [gmap, setGmap] = useState(false);
  return (
    <div className="m-2">
      <Box sx={{ position: "" }}>
        <Box className="cityname">
          <Box
            onClick={() => setShowDetails(true)}
            component="span"
            // sx={{
            //   borderTop: "2px solid white",
            //   borderBottom: "2px solid white",
            // }}
          >
            {" "}
            <img src={Hyderabad} />
          </Box>
          {showDetails ? (
            <div className="popover">
              <Box className="popover-content">
                <Box onClick={() => setShowDetails(false)}>
                  <div className="popoverclose">
                    <ClearIcon />
                  </div>
                </Box>
                <Box
                  sx={{
                    fontSize: "5px",
                    mt: 5,
                  }}
                ></Box>
                <h2>Hyderabad</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  <h4>
                    Salarupria Knowledge City, 6th Floor, Serilingampally
                    Mandal, Ranga Reddy Distt. Tel: +91 40 6111 6000
                  </h4>{" "}
                </Box>
                <div>
                  <Box sx={{ position: "" }}>
                    {gmap ? (
                      <Box className="popover-inner-content">
                        <Box onClick={() => setGmap(false)}>
                          <div className="popoverclose">
                            <ClearIcon />
                          </div>
                        </Box>
                        <Box
                          sx={{
                            fontSize: "5px",
                            mt: 5,
                          }}
                        ></Box>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.566692694177!2d78.37866351431407!3d17.43257020609011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb90c4d96bb3ff%3A0xe6da36571a5f813d!2sKPMG!5e0!3m2!1sen!2sin!4v1654252292451!5m2!1sen!2sin"
                          width="100%"
                          height="400"
                        ></iframe>{" "}
                      </Box>
                    ) : null}
                    <Box
                      sx={{
                        width: "100%",
                        // height:"100%",
                        position: "fixed",
                        justifyContent: "center",
                        transform: "scaleY(2)",
                        color: "white",
                        textShadow: "2px 2px black",
                        letterSpacing: 1,
                        fontWeight: "bold",
                        // fontSize: '42px',
                        top: 100,
                        zIndex: 99,
                      }}
                    ></Box>
                  </Box>
                </div>
              </Box>
            </div>
          ) : null}
        </Box>
      </Box>
    </div>
  );
};

export default Altaf5;
