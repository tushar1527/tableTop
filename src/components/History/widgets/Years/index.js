import { Box } from "@mui/system";
import React, { useState } from "react";
import Four from "../../assets/4.jpg";
import CityBox from "./cityBox";
import Three from "../../assets/3.jpg";
import ClearIcon from "@mui/icons-material/Clear";
import Animat from "../Animat";
import Bg from "../Bg";

const Years = () => {
  const [showDetails, setShowDetails] = useState(false);
  return (
    <>
      <div className="scroll-invisible">
        <Box
          sx={{
            display: "flex",
          }}
        >
          {[
            {
              year: 1867,
              city: "London",
              desc: "Robert Flatcher opens office in London in 1867 William Barclay peat joins the firm in 1870 and opens office in Middlesborough in 1876. in 1877,peat becomes a partner.",
            },
            {
              year: 1877,
              city: "Glassgow",
              desc: "Thomson McLintock opens office in Glasgow in 1877. McLintock opens London office in 1914,and Birmingham office in 1921.",
            },
            {
              year: 1880,
              city: "Cardiff",
              desc: "Peat and McLintock become founder members in the Institute of Chartered Accountants of England and Wales.",
            },
            {
              year: 1890,
              city: "Berlin",
              desc: "Deutsch-Amierikanische Treuhand-Gesellschaft (German American Trust Company)  established in Berlin in 1990 for protecting German in vestments in North America.",
            },
            { year: 1891, desc: "The firm adopts the peat name." },
            {
              year: 1892,
              city: "Berlin",
              desc: "Change of name to Deutsche Treuhand-Gesellschaft (DTG) with a simultaneous reduction in the share capital and change in the objects of the company.",
            },
          ].map(({ year, city, desc }) => (
            <Box
              sx={{
                position: "relative",
                zIndex: 555,
                paddingRight: "20px",
              }}
            >
              <CityBox year={year} city={city} desc={desc} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {[
            {
              year: 1897,
              city: "New York",
              desc: "Marwinck Mitchell and Company formed in New York.",
            },
            {
              year: "1911",
              desc: "Peat and Mitchell meet on a translantic crossing.",
            },
            {
              year: 1917,
              city: "Amsterdam",
              desc: "Piet Klynveld and Jaap Kraayenhof opened an accounting firm called Klynveld Kraayenhof & co. in Amsterdam.",
            },
            {
              year: "1925",
              desc: "Peat and Mitchell join to create peat Marwick international.",
            },
            {
              year: "1931",
              desc: "Registration of DTG as an accounting firm .",
            },
            {
              year: "1964/65",
              city: "Amsterdam",
              desc: "Thomson McLintock establishes international presence with the foundation of McLintock Main Lafrentz.",
            },
            {
              year: "1972",
              desc: "Merger of four German accounting firms to form vereinigte Deutsche-Treuhand Gesellschaft.",
            },
          ].map(({ year, city, desc }) => (
            <Box
              sx={{ position: "relative", zIndex: 9999, paddingRight: "20px" }}
            >
              <CityBox year={year} city={city} desc={desc} />
            </Box>
          ))}
        </Box>
        <Box
          sx={{
            display: "flex",
          }}
        >
          {[
            {
              year: 1979,
              desc: "Klynveld Kraayenhof & Company McLintock Main Lafrentz and DTG join forces to form Klynveld Main Goerdeler (KMG), a strong Europe-Based international firm.",
            },
            {
              year: 1987,
              desc: "Peat Marwick International and Klynveld Main Goerdaler combine to form klynveld Peat Marwick Goerdeler(KPMG)",
            },
            {
              year: 1990,
              desc: "Name amended to highlight the international strength of the firm to KPMG peat marwick McLIntock in 1991 McLintock name is dropped",
            },
            { year: 1993, city: "Mumbai" },
            { year: 1995, desc: "The firm shortens its name to KPMG" },
            {
              year: 1998,
              desc: "Values Charted formulated and launched firm-wide",
            },
            { year: 1999 },
            { year: 2000 },
            { year: 2001 },
            { year: 2002 },
            { year: 2003 },
            { year: 2004 },
            { year: 2005 },
            { year: 2006 },
            { year: 2007 },
            { year: 2008 },
            { year: 2009 },
            { year: 2010 },
            { year: 2011 },
            { year: 2012 },
            { year: 2013 },
            { year: 2014 },
            { year: 2015 },
            { year: 2016 },
            { year: 2017 },
            { year: 2018 },
            { year: 2019 },
            { year: 2020 },
            { year: 2021 },
            { year: 2022 },
            { year: 2022 },
          ].map(({ year, city, desc }) => (
            <Box
              sx={{ position: "relative", zIndex: 9999, paddingRight: "20px" }}
            >
              <CityBox year={year} city={city} desc={desc} />
            </Box>
          ))}
        </Box>
      </div>
    </>
  );
};

export default Years;
