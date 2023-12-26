import { Box } from "@mui/system";
import React, { useState } from "react";
import One from "../../assets/1.jpg";

// import Navigation from '../Navigation';
import Animat from "../Animat";
import background from "./video/background.mp4";
import CityBox from "./cityBox";
import ClearIcon from "@mui/icons-material/Clear";
import Kpmg2 from "./Kpmg2";
// import Kpmg from "./Altaf"
import Altaf from "./Altaf";
import Kpmg3 from "./Kpmg3";
import Altaf3 from "./Altaf3";
import Altaf4 from "./Altaf4";
import Altaf5 from "./Altaf5";
import Altaf6 from "./Altaf6";
import Altaf7 from "./Altaf7";
import Altaf8 from "./Altaf8";
import Altaf9 from "./Altaf9";
import Altaf10 from "./Altaf10";
import Altaf11 from "./Altaf11";
import Altaf12 from "./Altaf12";
import { useHistory } from "../../../../hooks/use-history";

const Firms = () => {
  const { city } = useHistory();
  const [selectedCity, setSelectedCity] = useState(null);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const [showDetails, setShowDetails] = useState(false);
  const [visible, setVisible] = useState(false);
  const [gmap, setGmap] = useState(false);
  const onSelectCity = (value) => {
    setSelectedCity(city.find((item) => item.value === value));
  };
  const onSelectAddress = (selected_city, selected_address) => {
    let my_address = city.find((item) => item.value === selected_city);
    let my_location = my_address.address.find(
      (item) => item.value == selected_address
    );
    setSelectedAddress(my_location);
  };
  // mumbai_nesco;

  return (
    <>
      {/* <video
        autoPlay
        loop
        muted
        src={background}
        controls
        typeof="video/mp4"
        style={{
          position: "fixed",
          width: "2700px",
          height: "2550px",
          objectFit: "cover",
          zIndex: "-1",
        }}
      ></video> */}

      {/* <Animat /> */}
      {/* <Navigation /> */}

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
            marginTop: "50px",
          }}
        >
          The firm in India
        </Box>
        <Box
          sx={{
            display: "flex",
            zIndex: 999,
            borderBottom: "2px solid #fff",
            "& img": {
              // width: '80px',
              height: "130px",
              // position:"absolute",
            },
          }}
        >
          <Box sx={{ position: "" }}>
            <Box className="cityname">
              {city.map((item) => (
                <Box
                  onClick={() => setShowDetails(true)}
                  component="span"
                  sx={{ position: "relative" }}
                  // sx={{
                  //   borderTop: "2px solid white",
                  //   borderBottom: "2px solid white",
                  // }}
                >
                  <img
                    src={item.image}
                    onClick={onSelectCity.bind(this, item?.value)}
                  />
                  {selectedCity && selectedCity.value === item?.value ? (
                    <div className="popover">
                      {selectedCity &&
                        selectedCity.address.map((address) => (
                          <Box
                            className="popover-content"
                            onClick={onSelectAddress.bind(
                              this,
                              selectedCity.value,
                              address.value
                            )}
                          >
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
                            <h2> {address.label}</h2>

                            <Box component="span">
                              <h4>{address.content}</h4>
                            </Box>
                            {selectedAddress && (
                              <div>
                                <Box sx={{ position: "" }}>
                                  {selectedAddress?.value === address.value ? (
                                    <Box className="popover-inner-content">
                                      <Box
                                        sx={{ position: "absolute" }}
                                        onClick={setSelectedAddress.bind(
                                          this,
                                          null
                                        )}
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
                                        src={selectedAddress.link}
                                        width="100%"
                                        height="400"
                                      ></iframe>{" "}
                                    </Box>
                                  ) : null}
                                </Box>
                              </div>
                            )}
                          </Box>
                        ))}
                    </div>
                  ) : null}
                </Box>
              ))}
            </Box>
          </Box>

          {/* <Altaf />
          <Kpmg2 />
          <Kpmg3 />
          <Altaf3 />
          <Altaf4 />
          <Altaf5 />
          <Altaf6 />
          <Altaf7 />
          <Altaf8 />
          <Altaf9 />
          <Altaf10 />
          <Altaf11 />
          <Altaf12 /> */}
        </Box>
      </Box>

      {/* <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop: '6.9%',
                minWidth: '1600px',
            }}>
                {[{ year: 1979,desc:'Klynveld Kraayenhof & Company McLintock Main Lafrentz and DTG join forces to form Klynveld Main Goerdeler (KMG), a strong Europe-Based international firm.'}, { year: 1987 ,desc:'Peat Marwick International and Klynveld Main Goerdaler combine to form klynveld Peat Marwick Goerdeler(KPMG)' }, { year: 1990,desc:'Name amended to highlight the international strength of the firm to KPMG peat marwick McLIntock in 1991 McLintock name is dropped'}, { year: 1993,city:'Mumbai'},{ year: 1995,desc:'The firm shortens its name to KPMG'},{ year: 1998,desc:'Values Charted formulated and launched firm-wide'},{year:1999},{year:2000},{year:2001},{year:2002},{year:2003},{year:2004},{year:2005},{year:2006},{year:2007},{year:2008},{year:2009},{year:2010},{year:2011},{year:2012},{year:2013},{year:2014},{year:2015},{year:2016},{year:2017},{year:2018},{year:2019},{year:2020},{year:2021},{year:2022},{year:2022}].map(({ year, city,desc }) => <Box sx={{ position: 'relative', zIndex: 9999,paddingRight:"20px" }}><CityBox year={year} city={city} desc={desc}/></Box> )}
            </Box> */}
      <Box
        component="img"
        src={One}
        alt="background"
        sx={{
          position: "absolute",
          top: 500,
          left: "110px",
          height: "800px",
          width: "1200px",
          backgroundSize: "cover",
          zIndex: 1900,
          opacity: 0.9,
        }}
      />
    </>
  );
};

export default Firms;
