// import React, { useState } from "react";
// import Primary from "./components/History/widgets/Primary";
// import Secondary from "./components/History/widgets/Secondary";
// import Firms from "./components/History/widgets/Firms";
// // import './App.css';
// import Screensaver from "./components/dashboard/idleScreen";
// import { Box } from "@mui/system";

import React from "react";
import { AppRoutes } from "./layouts/app-routes";
import { AppWrapper } from "./layouts/app-wrapper";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./components/History/widgets/Navigation";
import "./components/History/widgets/Firms/Bg.css";
// function App(props) {
//   const [showSS, setShowSS] = useState(false);
//   return (
//     <div className="">
//       {/* <Screensaver setShowScreenSaver={setShowSS}/> */}
//       {!showSS && (
//         <Box sx={{ display: "flex" }}>
//           <Box sx={{ position: "relative" }}>
//             <Primary />
//           </Box>
//           <Box sx={{ position: "relative" }}>
//             <Secondary />
//           </Box>
//           <Box sx={{ position: "relative" }}>
//             <Firms />
//           </Box>
//         </Box>
//       )}
//       <div></div>
//     </div>
//   );
// }

// export default App;

const App = () => {
  return (
    <React.Fragment>
      <AppWrapper>
        <AppRoutes />
      </AppWrapper>
    </React.Fragment>
  );
};

export default App;
