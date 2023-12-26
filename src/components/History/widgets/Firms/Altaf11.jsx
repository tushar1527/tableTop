import React, { useState } from "react";
import Vadodara from "../../assets/Vadodara.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf11 = () => {
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
            <img src={Vadodara} />
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
                <h2>Vadodara (Business Centre)</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  {" "}
                  <h4>
                    Ocean Building, 303, 3rd Floor, Beside Center Square Mall,
                    Opp. Vadodara Central Mall, Dr. Vikram Sarabhai Marg Tel:
                    +91 265 619 4200
                  </h4>
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
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3690.963445238235!2d73.1678254143909!3d22.317222197921247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sOcean%20Building%2C%20303%2C%203rd%20Floor%2C%20Beside%20Center%20Square%20Mall%2C%20Opp.%20Vadodara%20Central%20Mall%2C%20Dr.%20Vikram%20Sarabhai%20Marg!5e0!3m2!1sen!2sin!4v1654253377118!5m2!1sen!2sin"
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

export default Altaf11;
