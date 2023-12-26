import React, { useState } from "react";
import Pune from "../../assets/Pune.png";
import { Box } from "@mui/system";
import ClearIcon from "@mui/icons-material/Clear";

const Altaf6 = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [gmap, setGmap] = useState(false);
  const [Amap, setAmap] = useState(false);
  const [Bmap, setBmap] = useState(false);
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
            <img src={Pune} />
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
                <h2>Pune, Business Plaza</h2>

                <Box onClick={() => setGmap(true)} component="span">
                  {" "}
                  <h4>
                    BUSINESS PLAZA, 701, 801 and 901, 36/3 B THE WESTIN,
                    KOREGAON PARK ANNEXE, MUNDHWA RD., GHORPADI Tel: +91 20 6747
                    7000
                  </h4>
                </Box>
                {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}
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
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30264.9788628464!2d73.86817794004722!3d18.5233720365973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sBUSINESS%20PLAZA%2C%20701%2C%20801%20and%20901%2C%2036%2F3%20B%20THE%20WESTIN%2C%20KOREGAON%20PARK%20ANNEXE%2C%20MUNDHWA%20RD.%2C%20GHORPADI!5e0!3m2!1sen!2sin!4v1654252421380!5m2!1sen!2sin"
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

                {/* ///////////////////////////////////////////////////////////////////////////////////////////////// */}
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
                <h2>Pune PEBC (Commerzone)</h2>

                <Box onClick={() => setAmap(true)} component="span">
                  {" "}
                  <h4>
                    3rd floor, Building No. 07,Commerzone, Samrat Ashok Path,
                    Off Airport Road,Yerwada Tel: +91 20 4019 4000/1/2
                  </h4>
                </Box>
                {/* //////////////////////////////////////////////////////////////////////////////////////////// */}
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
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3782.248049044037!2d73.88200151432981!3d18.5628525227259!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1s3rd%20floor%2C%20Building%20No.%2007%2CCommerzone%2C%20Samrat%20Ashok%20Path%2C%20Off%20Airport%20Road%2CYerwada!5e0!3m2!1sen!2sin!4v1654252530616!5m2!1sen!2sin"
                          width="100%"
                          height="400"
                        ></iframe>{" "}
                      </Box>
                    ) : null}
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
                <h2>Pune Quibix IT Park</h2>

                <Box onClick={() => setBmap(true)} component="span">
                  Qubix IT Park, Building IT 5, 6th Floor Rajiv Gandhi Infotech
                  Park, Phase 1, MIDC, Hinjawadi Tel: +91 20 67736700
                </Box>
                {/* this is code for  google map address   ////////////////   */}
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
                            mt: 5,
                          }}
                        ></Box>
                        {/* /////////////////////////////////////////// */}
                        {/* <iFrame  src="https://www.google.com/maps/place/KPMG/@19.1526062,72.852516,17z/data=!3m1!4b1!4m5!3m4!1s0x390ce18acdb8f701:0xdb42f50e1326433d!8m2!3d19.1526011!4d72.8547047"/> */}
                        <iframe
                          src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d30253.245951495544!2d73.69455759010908!3d18.589552818357344!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sQubix%20IT%20Park%2C%20Building%20IT%205%2C%206th%20Floor%20Rajiv%20Gandhi%20Infotech%20Park%2C%20Phase%201%2C%20MIDC%2C%20Hinjawadi!5e0!3m2!1sen!2sin!4v1654252625367!5m2!1sen!2sin"
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
                {/* //////////////////////////////////////////////////////////////////////////////////////////////// */}
              </Box>
            </div>
          ) : null}
        </Box>
      </Box>
    </div>
  );
};

export default Altaf6;
