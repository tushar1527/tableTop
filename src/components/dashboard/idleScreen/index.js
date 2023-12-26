import React, { useEffect, useState } from "react";
import ScreensaverComponent from "./ScreenSaver";

const Screensaver = ({ setShowScreenSaver }) => {
  const [show, setShow] = useState(50 * 1000);

  useEffect(() => {
    let interval = setInterval(() => {
      if (show >= 1000) {
        setShow(show - 1000);
      } else {
        clearInterval(interval);
        setShowScreenSaver(true);
      }
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [show]);

  return (
    <div className="App">
      <div id="screensaver" style={styles.screensaver}>
        <ScreensaverComponent />
      </div>
    </div>
  );
};

export default Screensaver;

const styles = {
  screensaver: {
    position: "fixed",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "black",
    opacity: 1,
    fontSize: 32,
    zIndex: 9,
    color: "white",
  },
};
