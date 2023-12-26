import { Box } from "@mui/system";
import React, { useState } from "react";
//import Four from "../../assets/4.jpg";
//import Two from "../../assets/13.jpg";
import Nine from "../../assets/9.jpg";
import Five from "../../assets/5.jpg";
import Thirteen from "../../assets/13.jpg";
import CityBox from "./cityBox";
import ClearIcon from "@mui/icons-material/Clear";
import Animat from "../Animat";
import Bg from "../Bg";

const Secondary = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      {/* <Bg />
      <Animat /> */}
      <Box sx={{ position: "" }}>
        <Box
          sx={{
            position: "relative",
            justifyContent: "center",
            transform: "scaleY(1)",
            color: "white",
            textShadow: "2px 2px black",
            letterSpacing: 1,
            fontSize: "120px",
            top: 10,
            left: 0,
            right: 0,
            zIndex: 999,
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <Box
            onClick={() => setShowDetails(true)}
            component="span"
            sx={{
              borderTop: "2px solid white",
              borderBottom: "2px solid white",
              fontFamily: "KPMG",
              fontWeight: 600,
            }}
          >
            History highlights
          </Box>
          {showDetails ? (
            <Box
              sx={{
                "@keyframes slideIn": {
                  "0%": {
                    transform: "scale(0.5)",
                  },
                  "100%": {
                    transform: "scale(1)",
                  },
                },
                width: "500px",
                display: "flex",
                // left: '200px',
                zIndex: 999999,
                flexDirection: "column",
                animation: "slideIn 0.5s linear",
                // backgroundColor:'navy',
                background: "rgb(12,35,60)",
                color: "white",
                p: 3,
                fontSize: "15px",
                boxShadow:
                  "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                position: "absolute",
                textAlign: "left",
                maxHeight: "800px",
                left: "37%",
                overflow: "auto",
              }}
            >
              <Box
                sx={{ position: "absolute", right: "15px" }}
                onClick={() => setShowDetails(false)}
              >
                <div>
                  <ClearIcon sx={{ width: "2em", height: "2em" }} />
                </div>
              </Box>
              <Box
                sx={{
                  fontSize: "5px",
                }}
              ></Box>
              <h1>We helped establish the US Federal Reserve System.</h1>
              <p>
                KPMG’s US founders, James Marwick and Roger Mitchell, were
                selected to conduct the emergency audit and once the Federal
                Reserve Board was established in 1913, their Firm was drafted by
                government leadership to help plan the US Federal Reserve
                System.
              </p>
              <br />
              <h1>
                We helped change ICAEW rules to allow women to qualify and later
                hired the first female chartered accountant.
              </h1>
              <p>
                In 1924, Ethel Watts became the first woman to quality for
                membership by examination and would later be employed by Sir
                Harry Peat - Sir William’s son. Today, women make up a third of
                the ICAEW’s membership.
              </p>
              <br />
              <h1>We helped design the first accounting standards. </h1>
              <p>
                When financial reporting was being heavily criticized in the
                1960s and 1970s, the Senior Partner of the UK’s Peat, Marwick,
                Mitchell & Co helped inspire confidence by developing the
                first-ever accounting standards.
              </p>
              <br />
              <h1>
                We were entrusted to support the beginning of a new democracy -
                certifying the first democratic elections in post-Apartheid
                South Africa in 1994.
              </h1>
              <p>
                Following three days of voting, the counting process wasn’t
                running smoothly, and the Independent Electoral Commission
                called KPMG in South Africa to help them verify the results. To
                ensure data was kept safe, off-site backups of all the votes had
                to be taken to KPMG’s offices every few hours, day and night. A
                few days later, Nelson Mandela’s African National Congress party
                won the election and the rest is history.
              </p>
              <br />
              <h1>As the world evolved, we adapted.</h1>
              <p>
                In January 1987, the mega-merger of Peat Marwick International
                (PMI) and KlynveldMain Goerdeler (KMG) was announced to the
                public and KPMG was formed. At the time, it was the largest
                merger in the history of the accounting business. The firm
                believed so strongly in integrity that it created a common
                values charter that set a new standard for the industry.
              </p>
            </Box>
          ) : null}
        </Box>
      </Box>
      {/* <Box sx={{
                display: 'flex',
                justifyContent: 'space-around',
                alignItems: 'center',
                paddingTop: '32%',
                minWidth: '1600px',
            }}>
                    {[{ year: 1897, city: 'New York',desc:'Marwinck Mitchell and Company formed in New York.' },{year:'1911',desc:'Peat and Mitchell meet on a translantic crossing.'}, { year: 1917, city: 'Amsterdam',desc:'Piet Klynveld and Jaap Kraayenhof opened an accounting firm called Klynveld Kraayenhof & co. in Amsterdam.' },{year:'1925',desc:'Peat and Mitchell join to create peat Marwick international.'},{year:'1931',desc:'Registration of DTG as an accounting firm .'},{year:'1964/65',city:'Amsterdam',desc:'Thomson McLintock establishes international presence with the foundation of McLintock Main Lafrentz.'},{year:'1972',desc:'Merger of four German accounting firms to form vereinigte Deutsche-Treuhand Gesellschaft.'}].map(({ year, city,desc }) => <Box sx={{ position: 'relative', zIndex: 9999 }}><CityBox year={year} city={city} desc={desc}/></Box> )}
            </Box> */}
      {/* <Box
        component="img"
        src={Four}
        alt="background"
        sx={{
          position: "absolute",
          top: 400,
          height: "800px",
          width: "1200px",
          backgroundSize: "cover",
          zIndex: 99,
          opacity: "0.7",
        }}
      /> */}
      <Box
        component="img"
        src={Nine}
        alt="background"
        sx={{
          position: "absolute",
          top: 450,
          height: "750px",
          width: "1015px",
          backgroundSize: "cover",
          zIndex: 99,
          opacity: "0.7",
        }}
      />
      <Box
        component="img"
        src={Five}
        alt="background"
        sx={{
          position: "absolute",
          left: 900,
          bottom: 0,
          height: "700px",
          width: "1000px",
          backgroundSize: "cover",
          zIndex: 89,
          opacity: 0.9,
        }}
      />
      <Box
        component="img"
        src={Thirteen}
        alt="background"
        sx={{
          position: "absolute",
          left: 1380,
          bottom: 0,
          height: "504px",
          width: "1259px",
          backgroundSize: "cover",
          zIndex: 99,
          opacity: 0.9,
        }}
      />
    </>
  );
};

export default Secondary;
