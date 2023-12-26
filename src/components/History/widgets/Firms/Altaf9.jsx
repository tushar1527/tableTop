import React, { useState } from "react";
import Ahmedabad from "../../assets/ahmedabad.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf9 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [gmap, setGmap] = useState(false);
  const [Amap, setAmap] = useState(false);

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
            <img src={Ahmedabad} />
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
                <h2>Ahmedabad</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  <h4>
                    Commerce House V, 9th Floor 902 & 903, beside Vodafone
                    House, Corporate Road, Prahaladnagar Tel: +91 79 4040 2200
                  </h4>
                </Box>
                <div>
                  <Box sx={{ position: "" }}>
                    {gmap ? (
                      <Box className="popover-inner-content">
                        <Box
                          className="popoverclose"
                          onClick={() => setGmap(false)}
                        >
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
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.5868520919294!2d72.49979921440342!3d23.002215222862002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b27bd329e9b%3A0x1f0df7d84ce51777!2sKPMG!5e0!3m2!1sen!2sin!4v1654253116116!5m2!1sen!2sin"
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

export default Altaf9;
