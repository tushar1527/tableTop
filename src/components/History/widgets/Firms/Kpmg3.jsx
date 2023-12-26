import React, { useState } from "react";
import Bengaluru from "../../assets/Bengaluru.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Kpmg3 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [gmap, setGmap] = useState(false);
  const [Amap, setAmap] = useState(false);
  const [Bmap, setBmap] = useState(false);
  // const [Cmap, setCmap] = useState(false);
  // const [Dmap, setDmap] = useState(false);
  // const [Emap, setEmap] = useState(false);
  // const [Fmap, setFmap] = useState(false);
  // const [Hmap, setHmap] = useState(false);
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
            <img src={Bengaluru} />
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
                    mt: 2,
                  }}
                ></Box>
                <h2>Bengaluru</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  <h4>
                    Embassy Golf Links Business Park, Pebble Beach, ‘B’ Block,
                    1st & 2nd Floor, Off Intermediate Ring Road, Tel: +91 80
                    6833 5000 Fax: +91 80 - 68336999
                  </h4>
                </Box>
                {/* {1} First Popup////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
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
                            mt: 2,
                          }}
                        ></Box>
                        {/* /////////////////////////////////////////// */}

                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.2884663231935!2d77.6410511142636!3d12.953384118783799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae154150e0d2cf%3A0x4870531b4ff9d5c5!2sVenu%20%40%20KPMG%20EGL!5e0!3m2!1sen!2sin!4v1654251499207!5m2!1sen!2sin"
                          width="100%"
                          height="400"
                        ></iframe>
                      </Box>
                    ) : null}
                  </Box>
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              </Box>
              <Box className="popover-content">
                <Box onClick={() => setShowDetails(false)}>
                  <div className="popoverclose">
                    <ClearIcon />
                  </div>
                </Box>
                <Box
                  sx={{
                    fontSize: "5px",
                    mt: 2,
                  }}
                ></Box>

                <h2>Bengaluru, KPMG Global Delivery center Private Limited</h2>

                <Box onClick={() => setAmap(true)} component="span">
                  <h4>
                    RMZ Eco world, Campus 7, Floor 6 Devarabeesanahalli,
                    Marathalli Outer Ring Road Bengaluru
                  </h4>
                </Box>
                {/* {2} Second Popup////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div>
                  <Box sx={{ position: "" }}>
                    {Amap ? (
                      <Box className="popover-inner-content">
                        <Box onClick={() => setAmap(false)}>
                          <div className="popoverclose">
                            <ClearIcon />
                          </div>
                        </Box>
                        <Box
                          sx={{
                            fontSize: "5px",
                            mt: 2,
                          }}
                        ></Box>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.8021627186113!2d77.6812691142633!3d12.92043341949615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae130818a7e0bd%3A0x89258c3777e093f4!2sKPMG%20Global%20Services!5e0!3m2!1sen!2sin!4v1654251658740!5m2!1sen!2sin"
                          width="100%"
                          height="400"
                        ></iframe>{" "}
                      </Box>
                    ) : null}
                  </Box>
                </div>
                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              </Box>
              <Box className="popover-content">
                <Box onClick={() => setShowDetails(false)}>
                  <div className="popoverclose">
                    <ClearIcon />
                  </div>
                </Box>
                <Box
                  sx={{
                    fontSize: "5px",
                    mt: 2,
                  }}
                ></Box>
                <h2>Bengaluru, KPMG Global Services Private Limited</h2>

                <Box onClick={() => setBmap(true)} component="span">
                  <h4>
                    RMZ Eco world, Campus 7, Floor 1-5 Devarabeesanahalli,
                    Marathalli Outer Ring Road Bengaluru- 560103
                  </h4>
                </Box>
                {/* {3} Third Popup////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                <div>
                  <Box sx={{ position: "" }}>
                    {Bmap ? (
                      <Box className="popover-inner-content">
                        <Box onClick={() => setBmap(false)}>
                          <div className="popoverclose">
                            <ClearIcon />
                          </div>
                        </Box>
                        <Box
                          sx={{
                            fontSize: "5px",
                            mt: 2,
                          }}
                        ></Box>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3888.8020001799755!2d77.68126911407012!3d12.920443858488!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRMZ%20Eco%20world%2C%20Campus%207%2C%20Floor%201-5%20Devarabeesanahalli%2C%20Marathalli%20Outer%20Ring%20Road%20Bengaluru-%20560103!5e0!3m2!1sen!2sin!4v1654251775071!5m2!1sen!2sin"
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
                {/* /////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              </Box>
            </div>
          ) : null}
        </Box>
      </Box>
    </div>
  );
};

export default Kpmg3;
