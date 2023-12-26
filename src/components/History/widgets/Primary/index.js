import { Box } from "@mui/system";
import React from "react";
import BG from "../../assets/BG.jpg";
import Three from "../../assets/3.jpg";
//import Six from "../../assets/6.jpg";
import Four from "../../assets/4.jpg";
import CityBox from "./cityBox";
import FirstPerson from "../../assets/PIET KLYNFELD.png";
import SecondPerson from "../../assets/WILLIAM BARCLAY PEAT.png";
import ThirdPerson from "../../assets/JAMES MARWICK.png";
import FourthPerson from "../../assets/DR. REINHARD GOERDELER.png";
import KPMG from "../KPMG_logo white.png";
import Animat from "../Animat";
import background from "../Firms/video/background.mp4";
import Bg from "../Bg";

const History = () => {
  return (
    <>
      {/* <Bg />
      <Animat /> */}
      <Box
        component="img"
        sx={{
          position: "absolute",
          height: "100vh",
          width: "100vw",
          backgroundSize: "cover",
          opacity: ".9",
        }}
      />

      <img
        style={{
          zIndex: 10,
          width: "250px",
          marginLeft: "40px",
          position: "fixed",
          marginTop: "40px",
        }}
        src={KPMG}
      />

      <Box>
        <div className="person">
          <div className="person-detail">
            <img src={FirstPerson} />
            {/* <p>PIET KLYNFELD</p> */}
          </div>
          <div className="person-detail">
            <img src={SecondPerson} />
            {/* <p>WILLIAM BARCLAY</p> */}
          </div>
          <div className="person-detail">
            <img src={ThirdPerson} />
            {/* <p>JAMES MARWICK</p> */}
          </div>

          <div className="person-detail">
            <img src={FourthPerson} />
            {/* <p>DR.REINHARD GOERDELER</p> */}
          </div>
        </div>
      </Box>
      {/* <Box
        sx={{
          display: "flex",
          justifyContent: "space-around",
          alignItems: "center",
          paddingTop: "41%",
          minWidth: "1600px",
        }}
      >
        {[
          { year: 1867, city: "London",desc:'Robert Flatcher opens office in London in 1867 William Barclay peat joins the firm in 1870 and opens office in Middlesborough in 1876. in 1877,peat becomes a partner.' },
          { year: 1877, city: "Glassgow",desc:'Thomson McLintock opens office in Glasgow in 1877. McLintock opens London office in 1914,and Birmingham office in 1921.' },
          { year: 1880, city: "Cardiff",desc:'Peat and McLintock become founder members in the Institute of Chartered Accountants of England and Wales.' },
          { year: 1890, city: "Berlin",desc:'Deutsch-Amierikanische Treuhand-Gesellschaft (German American Trust Company)  established in Berlin in 1990 for protecting German in vestments in North America.' },
          { year: 1891,desc:"The firm adopts the peat name."},
          { year: 1892, city: "Berlin",desc:'Change of name to Deutsche Treuhand-Gesellschaft (DTG) with a simultaneous reduction in the share capital and change in the objects of the company.'},
        ].map(({ year, city,desc}) => (
          <Box sx={{ position: "relative", zIndex: 555, paddingLeft: "10px",marginTop:'-150px'}}>
            <CityBox year={year} city={city} desc={desc}/>
          </Box>
        ))}
      </Box> */}
      <Box
        component="img"
        src={Three}
        alt="background"
        sx={{
          position: "absolute",
          top: 400,
          height: "800px",
          width: "1200px",
          backgroundSize: "cover",
          zIndex: 50,
          opacity: ".7",
        }}
      />
      {/*<Box
        component="img"
        src={Six}
        alt="background"
        sx={{
          position: "absolute",
          left: 1100,
          top: 140,
          height: "1100px",
          width: "1200px",
          backgroundSize: "cover",
          zIndex: 1,
          opacity: 0.7,
        }}
      />*/}
      <Box
        component="img"
        src={Four}
        alt="background"
        sx={{
          position: "absolute",
          left: 1100,
          bottom: 0,
          height: "850px",
          width: "1200px",
          backgroundSize: "cover",
          zIndex: 20,
          opacity: 0.7,
        }}
      />
    </>
  );
};

export default History;
