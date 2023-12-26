import React, { useState } from "react";
import Kochi from "../../assets/Kochi.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf7 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [gmap, setGmap] = useState(false);
  const [Amap, setAmap] = useState(false);
  // const [Bmap, setBmap] = useState(false);
  // const [Cmap, setCmap] = useState(false);
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
            <img src={Kochi} />
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
                <h2>Kochi, KPMG Global Delivery Center Private Limited</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  <h4>
                    7th and 8th FloorBrigade World Trade Center, Block 1
                    Infopark SEZ Kakkanad, Ernakulam Tel: +91 84 6760000
                  </h4>
                </Box>
                {/* {1}//////////////////////////////////////////////////////////////// */}
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
                        {/* /////////////////////////////////////////// */}
                        {/* <iFrame  src="https://www.google.com/maps/place/KPMG/@19.1526062,72.852516,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce18acdb8f701:0xdb42f50e1326433d!8m2!3d19.1526011!4d72.8547047"/> */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.104966483156!2d76.36202801424098!3d10.008187875640576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b88f0db50a5%3A0xcd1e94ef7c3f1956!2sBrigade%20World%20Trade%20Center%20Kochi!5e0!3m2!1sen!2sin!4v1654252775999!5m2!1sen!2sin"
                          width="100%"
                          height="400"
                        ></iframe>{" "}
                        {/* ////////////////////////////////////////////// */}
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
                {/* //////////////////////////////////////////////////////////////////////////// */}
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
                    mt: 5,
                  }}
                ></Box>
                <h2>Kochi, KPMG Global Services Private Limited</h2>

                <Box onClick={() => setAmap(true)} component="span">
                  <h4>
                    9th and 10th Floor, Brigade World Trade CenterBlock 1
                    Infopark SEZ Kakkanad,Ernakulam Tel: +91 84 6760000
                  </h4>
                </Box>
                {/* {2}/////////////////////////////////////////////////////////////////////////////////////////////////////// */}
                {/* this i code for google map pop */}
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
                            mt: 5,
                          }}
                        ></Box>
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.104966483156!2d76.36202801424098!3d10.008187875640576!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b080b88f0db50a5%3A0xcd1e94ef7c3f1956!2sBrigade%20World%20Trade%20Center%20Kochi!5e0!3m2!1sen!2sin!4v1654252886321!5m2!1sen!2sin"
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
                {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
              </Box>
            </div>
          ) : null}
        </Box>
      </Box>
    </div>
  );
};

export default Altaf7;
