import React, { useState } from "react";
import Delhi from "../../assets/delhi.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Kpmg2 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [gmap, setGmap] = useState(false);

  return (
    <>
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
              <img src={Delhi} />
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
                  <h2>New Delhi</h2>

                  <Box onClick={() => setGmap(true)} component="span">
                    {" "}
                    <h4>
                      Building No. 10, 8th Floor, Tower B & C, DLF Cyber City,
                      Phase II Tel: +91 124 3074 300 Fax: +91 124 254 9101
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
                            width="100%"
                            height="400"
                            id="gmap_canvas"
                            src="https://maps.google.com/maps?q=Building%20No.%2010,%208th%20Floor,%20Tower%20B%20&%20C,%20DLF%20Cyber%20City,%20Phase%20II&t=&z=13&ie=UTF8&iwloc=&output=embed"
                            frameborder="0"
                            scrolling="no"
                            marginheight="0"
                            marginwidth="0"
                          ></iframe>
                        </Box>
                      ) : null}
                      <Box
                        sx={{
                          width: "100%",
                          // height:"100%",
                          position: "fixed",
                          justifyContent: "center",
                          transform: "scaleY(1)",
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
    </>
  );
};

export default Kpmg2;
