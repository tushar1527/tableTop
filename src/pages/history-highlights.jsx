import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import Bg from "../components/History/widgets/Bg";
import Primary from "../components/History/widgets/Primary";
import Secondary from "../components/History/widgets/Secondary";
import { useHistory } from "../hooks/use-history";
import { Clear } from "@mui/icons-material";
import One from "../components/History/assets/1.jpg";
import Navigation from "../components/History/widgets/Navigation";

const History = () => {
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [selectedYears, setSelectedYears] = useState([]);
  const { city, years } = useHistory();

  const onCloseCity = () => {
    setSelectedAddress(null);
    setSelectedCity(null);
  };

  const onSelectYears = (value) => {
    setSelectedYears([...selectedYears, value]);
    setSelectedAddress(null);
    setSelectedCity(null);
  };

  const onCloseYears = (value) => {
    let myYears = [...selectedYears];
    let index = myYears.findIndex((item) => item === value);
    myYears.splice(index, 1);
    setSelectedYears(myYears);
  };

  return (
    <React.Fragment>
      <Box
        sx={{
          display: "flex",
          height: "100vh",
          paddingRight: "10%",
          overflowY: "hidden",
        }}
      >
        <Box>
          <Bg />
        </Box>
        <Box sx={{ position: "relative", minWidth: "1893px" }}>
          <Primary />
        </Box>
        <Box sx={{ position: "relative", minWidth: "1893px" }}>
          <Secondary />
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            mt: 2,
            position: "fixed",
            zIndex: 999999999,
            right: "0",
            paddingRight: "3.5%",
          }}
        >
          <Box
            sx={{
              fontSize: "50px",
              color: "white",
              zIndex: 9,
              marginTop: "5px",
            }}
          >
            The firm in India
          </Box>
          <Box
            sx={{
              display: "flex",
              zIndex: 999,
              "& img": {
                height: "120px",
              },
            }}
          >
            <Box className="cityname">
              {city.map((item) => (
                <Box component="span" sx={{ position: "relative" }}>
                  <img
                    src={item.image}
                    onClick={setSelectedCity.bind(this, item)}
                  />
                  {selectedCity && selectedCity?.value === item?.value ? (
                    <div className="popover">
                      {selectedCity?.address?.map((address) => (
                        <div>
                          <Box className="popover-content">
                            <Box>
                              <div
                                className="popoverclose"
                                onClick={onCloseCity.bind(this)}
                              >
                                <Clear />
                              </div>
                            </Box>
                            <div
                              onClick={setSelectedAddress.bind(this, address)}
                            >
                              <Box
                                sx={{
                                  fontSize: "5px",
                                }}
                              >
                                <h2> {address.label}</h2>

                                <Box component="span">
                                  <h4>{address.content}</h4>
                                </Box>
                              </Box>
                            </div>
                            {selectedAddress &&
                            selectedAddress?.value === address?.value ? (
                              <Box className="popover-inner-content">
                                <Box sx={{ position: "relative" }}>
                                  <Box>
                                    <div
                                      className="popoverclose"
                                      onClick={setSelectedAddress.bind(
                                        this,
                                        null
                                      )}
                                    >
                                      <Clear />
                                    </div>
                                  </Box>
                                </Box>
                                <iframe
                                  src={selectedAddress.link}
                                  width="100%"
                                ></iframe>
                              </Box>
                            ) : null}
                          </Box>
                        </div>
                      ))}
                    </div>
                  ) : null}
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>
      <div className="scroll-invisible">
        {years.map((item) => (
          <React.Fragment>
            <div className="year-box">
              <div
                onClick={onSelectYears.bind(this, item?.value)}
                className="yearlist"
              >
                {item.year && item.city ? (
                  <>
                    {item.year},
                    <br />
                    {item.city}
                  </>
                ) : (
                  item.year && item.year
                )}
              </div>
              {selectedYears.includes(item?.value) ? (
                <Box className="yearboxcontent">
                  <Box>
                    <div onClick={onCloseYears.bind(this, item?.value)}>
                      <Clear />
                    </div>
                  </Box>
                  <Box
                    sx={{
                      textAlign: "left",
                      lineHeight: "normal",
                      wordBreak: "keep-all",
                    }}
                  >
                    {item.year && item.city
                      ? `${item.year}, ${item.city}`
                      : item.year && item.year}
                  </Box>
                  <Box
                    sx={{
                      fontSize: "18px",
                      mt: 2,
                      maxHeight: "170px",
                      overflowY: "auto",
                      fontWeight: "normal",
                    }}
                  >
                    {item.desc}
                  </Box>
                </Box>
              ) : null}
            </div>
          </React.Fragment>
        ))}
      </div>
      <Box
        component="img"
        src={One}
        alt="background"
        sx={{
          position: "absolute",
          bottom: 0,
          left: "4500px",
          height: "970px",
          width: "1080px",
          backgroundSize: "cover",
          zIndex: 19,
          opacity: 0.9,
        }}
      />
      <div className="history-table-menu">
        <Navigation />
      </div>
    </React.Fragment>
  );
};

export default History;
