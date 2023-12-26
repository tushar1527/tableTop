import React, { useContext, useEffect, useRef, useState } from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import WeatherCard from "./weather-card";
import TwitterHandle from "../TwitterHandle";
import { Button } from "@mui/material";
import { Box } from "@mui/system";
import Slideshow from "../ImageSlider";
import Navigation from "../../History/widgets/Navigation";
import { useHome } from "../../../hooks/use-home";
import { Loader } from "../../loader";

export default function SpacingGrid() {
  const { onLoadData, dashboard } = useHome();
  const handler = useRef();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    onLoadData();
  }, [onLoadData]);
  useEffect(() => {
    if (dashboard) {
      setIsLoading(false);
    }
  }, [dashboard]);
  return (
    <>
      <Grid
        sx={{ flexGrow: 1, height: "100%", width: "100%", marginTop: 0 }}
        container
        spacing={3}
      >
        <Grid item xl={4} lg={4} sm={12} xs={12}>
          <Paper
            sx={{
              height: "calc(100vh - 200px)",
              zIndex: 99999999999,
              backgroundColor: "transparent",
              border: "none",
              boxShadow: "none",
            }}
          >
            <WeatherCard />
          </Paper>
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          sm={12}
          xs={12}
          style={{ paddingTop: 0, paddingBottom: 0 }}
        >
          <Grid container spacing={3}>
            {dashboard?.twitter_handles?.length
              ? dashboard?.twitter_handles?.map((item, index) => (
                  <Grid item xl={4} lg={4} sm={12} xs={12}>
                    <TwitterHandle src={item} ref={handler} />
                  </Grid>
                ))
              : null}
          </Grid>
        </Grid>
        <Grid
          item
          xl={4}
          lg={4}
          sm={12}
          xs={12}
          style={{ position: "relative" }}
        >
          {isLoading ? (
            <Loader />
          ) : (
            <Slideshow videos={dashboard?.slides_path} />
          )}
          <Grid container>
            <Grid item xl={9} lg={9} sm={12} xs={12}></Grid>
          </Grid>
        </Grid>
        <div className="history-table-menu">
          <Navigation />
        </div>
      </Grid>
    </>
  );
}
