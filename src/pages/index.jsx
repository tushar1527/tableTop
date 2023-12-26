import React, { useState } from "react";
import Screensaver from "../components/dashboard/idleScreen";

const Pages = () => {
  const [, setShowSS] = useState(false);
  return (
    <React.Fragment>
      <Screensaver setShowScreenSaver={setShowSS} />
    </React.Fragment>
  );
};

export default Pages;
