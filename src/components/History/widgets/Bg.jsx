// import { Brightness1 } from '@mui/icons-material';
// import { Hidden } from '@mui/material';
import React from "react";
import background from "../widgets/Firms/video/background.mp4";
// import 'Bg.css';

const Bg = () => {
  return (
    <div className="abc">
      <video
        autoPlay
        loop
        muted
        src={background}
        typeof="video/mp4"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          // width:"cover",
          // height:"auto",
          objectFit: "cover",
          overflow: "hidden",
          zIndex: "-1",
          //   opacity:"0.7",
        }}
      ></video>
    </div>
  );
};

export default Bg;
