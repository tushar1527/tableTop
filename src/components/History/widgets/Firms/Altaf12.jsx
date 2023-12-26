import React, { useState } from "react";
import Jaipur from "../../assets/jaipur.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf12 = () => {
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
            <img src={Jaipur} />
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
                <h2>Jaipur</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  {" "}
                  <h4>
                    Office no. 402, Fourth Floor S Plot no. DC-II, Signature
                    Towers, Lal Kothi District Shopping Center, Tonk Road Tel:
                    +91 141 - 6721000
                  </h4>
                </Box>
                <div>
                  <Box sx={{ position: "" }}>
                    {gmap ? (
                      <Box className="popover-inner-content">
                        <Box
                          sx={{ position: "absolute" }}
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
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3558.468049719136!2d75.8013741144829!3d26.888636967600558!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOffice%20no.%20402%2C%20Fourth%20Floor%20S%20Plot%20no.%20DC-II%2C%20Signature%20Towers%2C%20Lal%20Kothi%20District%20Shopping%20Center%2C%20Tonk%20Road!5e0!3m2!1sen!2sin!4v1654253534594!5m2!1sen!2sin"
                          width="100%"
                          height="400"
                        ></iframe>{" "}
                      </Box>
                    ) : null}
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

export default Altaf12;
