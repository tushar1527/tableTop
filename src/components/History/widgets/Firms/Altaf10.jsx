import React, { useState } from "react";
import Noida from "../../assets/Noida.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf10 = () => {
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
            <img src={Noida} />
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
                <h2>Noida</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  <h4>
                    Advant Navis Business Park, 5th & 6th Floor, Tower A, Plot
                    No. 07, Sector 142, Noida Express Way, District Gautam Budh
                    Nagar Tel: +91 120 386 8000
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
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3506.2866610314954!2d77.4075909145199!3d28.50102189677285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce850cd4f3a13%3A0x42865b4c6ef5b441!2sKPMG!5e0!3m2!1sen!2sin!4v1654253250630!5m2!1sen!2sin"
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

export default Altaf10;
