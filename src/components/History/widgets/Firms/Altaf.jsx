import React, { useState } from "react";
import Mumbai from "../../assets/mumbai.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [gmap, setGmap] = useState(false);
  const [Amap, setAmap] = useState(false);
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
              <img src={Mumbai} />
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
                  <h2>Mumbai (Nesco IT 4)</h2>

                  <Box onClick={() => setGmap(true)} component="span">
                    16th Floor, North Wing, Tower 4, Nesco Center, Western
                    Express Highway, Goregaon (East), Tel: + 91 22 6134 9200
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
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.9742102438213!2d72.85251601433856!3d19.152606154538404!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce18acdb8f701%3A0xdb42f50e1326433d!2sKPMG!5e0!3m2!1sen!2sin!4v1654250650489!5m2!1sen!2sin"
                            width="100%"
                            height="400"
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
                  {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
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
                  <h2>Mumbai (Vikhroli)</h2>

                  <Box onClick={() => setAmap(true)} component="span">
                    <h4>
                      First Floor, Block A, 02 Godrej Business District,
                      Pirojshanagar, Vikhroli -West Tel: + 91 22 6808 6000
                    </h4>
                  </Box>
                  <div>
                    <div>
                      {/* this i code for google map pop */}
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
                              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3770.103554478243!2d72.92300801433781!3d19.103112506085203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMumbai%20(Vikhroli)%20First%20Floor%2C%20Block%20A%2C%2002%20Godrej%20Business%20District%2C%20Pirojshanagar%2C%20Vikhroli%20-West!5e0!3m2!1sen!2sin!4v1654250848730!5m2!1sen!2sin"
                              width="100%"
                              height="400"
                            ></iframe>
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
                        {/* <iframe src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3770.103554478243!2d72.92300801433781!3d19.103112506085203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sMumbai%20(Vikhroli)%20First%20Floor%2C%20Block%20A%2C%2002%20Godrej%20Business%20District%2C%20Pirojshanagar%2C%20Vikhroli%20-West!5e0!3m2!1sen!2sin!4v1654250848730!5m2!1sen!2sin" width="100%" height="400"></iframe> */}
                      </Box>
                    </div>
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

export default Altaf;
