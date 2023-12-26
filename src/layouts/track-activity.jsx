import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router";
export const TrackActivity = ({ route }) => {
  const [timeInterval, setTimeInterval] = useState(480000);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    window.addEventListener("mousemove", setTimeInterval.bind(this, 480000));
    window.addEventListener("keypress", setTimeInterval.bind(this, 480000));

    return () => {
      window.removeEventListener(
        "mousemove",
        setTimeInterval.bind(this, 480000)
      );
      window.removeEventListener(
        "keypress",
        setTimeInterval.bind(this, 480000)
      );
    };
  }, []);

  useEffect(() => {
    window.addEventListener("mousemove", setTimeInterval.bind(this, 480000));
    window.addEventListener("keypress", setTimeInterval.bind(this, 480000));

    let interval = setInterval(() => {
      if (timeInterval >= 1000) {
        setTimeInterval(timeInterval - 1000);
      } else {
        if (location.pathname !== "/") {
          navigate("/");
        }
        setTimeInterval(480000);
      }
    }, 1000);

    return () => {
      window.removeEventListener(
        "mousemove",
        setTimeInterval.bind(this, 480000)
      );
      window.removeEventListener(
        "keypress",
        setTimeInterval.bind(this, 480000)
      );
      clearInterval(interval);
    };
  }, [timeInterval]);

  useEffect(() => {
    setTimeInterval(480000);
  }, [location]);

  return (
    <React.Fragment>
      <route.component />
    </React.Fragment>
  );
};
