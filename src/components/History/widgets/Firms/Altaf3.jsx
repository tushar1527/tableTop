import React, { useState } from "react";
import Chennai from "../../assets/Chennai.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf3 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [gmap, setGmap] = useState(false);
  return (
    <div className="m-2">
      <Box sx={{ position: "" }}>
        <Box
          sx={{
            width: "100%",
            // height:"100%",

            position: "relative",
            justifyContent: "center",
            transform: "scaleY(1)",
            color: "white",
            textShadow: "2px 2px black",
            letterSpacing: 1,
            fontWeight: "bold",
            // fontSize: '42px',
            zIndex: 99,
          }}
        >
          <Box
            onClick={() => setShowDetails(true)}
            component="span"
            // sx={{
            //   borderTop: "2px solid white",
            //   borderBottom: "2px solid white",
            // }}
          >
            <img src={Chennai} />
          </Box>
          {showDetails ? (
            <div className="popover">
              <Box
                sx={{
                  "@keyframes slideIn": {
                    "0%": {
                      transform: "scale(0.5)",
                    },
                    "100%": {
                      transform: "scale(1)",
                    },
                  },
                  width: "500px",
                  display: "flex",
                  zIndex: 999999,
                  flexDirection: "column",
                  animation: "slideIn 0.5s linear",
                  // backgroundColor:'navy',
                  background: "rgb(12,35,60)",
                  color: "white",
                  p: 3,
                  fontSize: "15px",
                  boxShadow:
                    "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                  fontWeight: "bold",
                }}
              >
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
                <h2>Chennai</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  <h4>
                    KRM Towers, No. 1, Ground Floor, 1, 2 & 3 Floor, Harington
                    Road, Chetpet Tel: +91 44 3914 5000
                  </h4>{" "}
                </Box>
                <div>
                  <Box sx={{ position: "" }}>
                    {gmap ? (
                      <Box
                        sx={{
                          "@keyframes slideIn": {
                            "0%": {
                              transform: "scale(0.5)",
                            },
                            "100%": {
                              transform: "scale(1)",
                            },
                          },
                          width: "400px",
                          display: "flex",
                          zIndex: 999999,
                          flexDirection: "column",
                          animation: "slideIn 0.5s linear",
                          // backgroundColor:'navy',
                          background: "rgb(12,35,60)",
                          color: "white",
                          p: 3,
                          fontSize: "15px",
                          boxShadow:
                            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                          fontWeight: "bold",
                        }}
                      >
                        <Box onClick={() => setGmap(false)}>
                          <div>
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
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3886.4775141625128!2d80.23992591426463!3d13.068895016273245!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a52664169ac3515%3A0xbca77e3399ead5b1!2sKPMG!5e0!3m2!1sen!2sin!4v1654251955838!5m2!1sen!2sin"
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

export default Altaf3;
