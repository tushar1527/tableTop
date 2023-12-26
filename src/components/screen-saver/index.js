import React, { useEffect, useState } from "react";

const Screensaver = () => {
  const [show, setShow] = useState(60 * 1000);

  const resetTimer = () => {
    setShow(60 * 1000);
  };

  useEffect(() => {
    window.addEventListener("onmousemove", resetTimer());
    window.addEventListener("onkeypress", resetTimer());

    return () => {
      window.removeEventListener("onmousemove", resetTimer);
      window.removeEventListener("onkeypress", resetTimer);
    };
  }, []);

  useEffect(() => {
    window.addEventListener("onmousemove", resetTimer);
    window.addEventListener("onkeypress", resetTimer);
    let interval = setInterval(() => {
      if (show >= 1000) {
        setShow(show - 1000);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      window.removeEventListener("onmousemove", resetTimer);
      window.removeEventListener("onkeypress", resetTimer);
      clearInterval(interval);
    };
  }, [show]);

  return (
    <div onMouseMove={() => resetTimer()}>
      {show === 0 && <div id="screensaver" style={styles.screensaver}></div>}
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
    opacity: 0.8,
    fontSize: 32,
    zIndex: 9,
    color: "white",
  },
};
