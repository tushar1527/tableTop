
import { Box, margin, rgbToHex } from '@mui/system';
import React, { useState } from 'react';
import ClearIcon from '@mui/icons-material/Clear';
// import Bg from '../Bg/';



const CityBox = ({
    year, city,desc
}) => {
    const [showDetails, setShowDetails] = useState(false);
    
    return (
        <>
        {/* <Bg /> */}
       
            {showDetails ? (
                <Box sx={{
                
                    "@keyframes slideIn": {
                        "0%": {
                            transform: "scale(0.5)",
                        },
                        "100%": {
                            transform: "scale(1)",
                        },
                    },
                    
                    height: '350px',
                    width: '220px',
                    position: 'absolute',
                    left: -60,
                    top: -50,
                    display: 'flex',
                    flexDirection: 'column',
                    animation: "slideIn 0.5s linear",
                    marginLeft:'70px',
                     background:'rgb(12,35,60)',
                    color: 'white',
                    fontSize: '36px',
                    boxShadow: 'rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px',
                    fontWeight: 'bold',
                    padding:"20px 5px"
                   
                   
                }}>
                    <Box sx={{ position: 'absolute' }} onClick={() => setShowDetails(false)}>
                      <div style={{position:"relative",left:"190px",top:"-30px"}}>
                        <ClearIcon />
                        </div>
                    </Box>
                    <Box sx={{

                        textAlign: 'center'
                    }}>
                        {year}  {city}
                    </Box>
                    <Box sx={{
                        fontSize: '18px',
                        mt: 3,
                    }}>
                       
                        {desc}
                    </Box>
        </Box>
      ) : null}
      <Box
        sx={{
          height: "300px",
          width: "200px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#3366FF",
          top:"300px",
          justifyContent:'center',
          alignContent:"center",
          color: "white",
          fontSize: "36px",
          boxShadow:
            "rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
          fontWeight: "bold",
          paddingLeft:'20px',
          zIndex: 999999999999999999999999,
          fontfamily:"Arial narrow",
        }}
        onClick={() => setShowDetails(true)}
      >
        {year} <br /> {city}
      </Box>
    </>
  );
};

export default CityBox;
