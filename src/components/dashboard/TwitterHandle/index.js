import { Paper } from "@mui/material";
import React, { useEffect } from "react";
import { Timeline } from "react-twitter-widgets";

const TwitterHandle = ({ src }) => {
  const scrollRef = React.createRef();

  const autoScroll = (scrollOffset) => {
    if (scrollRef.current !== null) {
      scrollRef?.current?.scrollBy({
        top: scrollOffset,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    let interval;
    if (scrollRef.current) {
      let i = 0;
      interval = setInterval(() => {
        autoScroll(i + 100);
      }, 1000);
    }
    return () => {
      clearInterval(interval);
    };
  }, [scrollRef.current, autoScroll]);

  const stopScroll = () => {
    autoScroll(0);
  };
  return (
    <Paper
      sx={{
        height: "calc(100vh - 200px)",
        opacity: 0.5,
        border: "4px solid white",
        borderRadius: 1.5,
        width: "100%",
        height: "100vh",
        backgroundColor: "transparent",
        maxHeight: "100vh",
        overflowY: "scroll",
      }}
      ref={scrollRef}
    >
      <Timeline
        renderError={(_err) => <p>Could not load Twitter</p>}
        dataSource={{ sourceType: "url", url: `https://twitter.com/${src}` }}
      />
    </Paper>
  );
};

export default TwitterHandle;
