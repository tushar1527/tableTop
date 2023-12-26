import React, { useState } from "react";
import Kolkata from "../../assets/kolkata.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf4 = () => {
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
            <img src={Kolkata} />
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
                <h2>Kolkata</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  {" "}
                  <h4>
                    Godrej Waterside, Unit No. 603, 6th Floor, Tower '1', Plot
                    No. 5, Block – DP, Sector V, Salt Lake Tel: +91 33 4403 4000
                  </h4>
                </Box>
                {/* this is code for  google map address   ////////////////   */}
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
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3684.146140079516!2d88.43550491439554!3d22.573636888622733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sGodrej%20Waterside%2C%20Unit%20No.%20603%2C%206th%20Floor%2C%20Tower%20&#39;1&#39;%2C%20Plot%20No.%205%2C%20Block%20%E2%80%93%20DP%2C%20Sector%20V%2C%20Salt%20Lake!5e0!3m2!1sen!2sin!4v1654252158497!5m2!1sen!2sin"
                          width="100%"
                          height="400"
                        ></iframe>{" "}
                      </Box>
                    ) : null}
                    <Box
                      sx={{
                        width: "100%",

                        position: "fixed",
                        justifyContent: "center",
                        transform: "scaleY(2)",
                        color: "white",
                        textShadow: "2px 2px black",
                        letterSpacing: 1,
                        fontWeight: "bold",

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

export default Altaf4;
