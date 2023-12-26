import { useState } from "react";
import { Box, Button, Grid, Paper } from "@mui/material";
import { styled } from "@mui/material/styles";
import { HistoryCard } from "./customer-card";
import { useNavigate } from "react-router";
// import { useHistory } from "react-router-dom";

const Header = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: "white",
  padding: 12,
  position: "sticky",
  borderRadius: 0,
}));

const GridBox = styled(Grid)(({ theme }) => ({
  border: "1px solid #eee",
  background: "#eee",
  textAlign: "center",
  p: 0,
  boxSizing: "border-box",
  color: "white",
  "& div:last-child": {
    maxHeight: "calc(100% - 100px)",
    overflowY: "scroll",
    borderRadius: 0,
    margin: 0,
    padding: 0,
    paddingTop: 4,
  },
}));

export const HistoryTable = (props) => {
  const { history = [], ...other } = props;
  const navigate = useNavigate();
  // const pageHistory = useHistory();

  return (
    <Box {...other} sx={{ height: "100%", p: 2, flexGrow: 1 }}>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          mb: 2,
          fontSize: "20px",
          fontWeight: "bold",
          justifyContent: "flex-end",
          borderBottom: "1px solid #bbb",
          color: "primary.main",
        }}
      >
        Years (Range)-wise historical data
      </Box>
      <Grid container sx={{ height: "100%" }}>
        {history.map((his, index) => (
          <GridBox item xs={2} key={index}>
            <Header>{his.year}</Header>
            <Box>
              {his?.data.map((d, i) => (
                <HistoryCard data={d} key={i} />
              ))}
            </Box>
          </GridBox>
        ))}
        <GridBox item xs={2}>
          <Header>Menu</Header>
          <Box sx={{ marginTop: "50px" }}>
            <Button
              color="error"
              variant="contained"
              align="right"
              onClick={() => navigate("/services")}
              sx={{
                marginTop: "50% !important",
                fontSize: 12,
                width: "100px",
                display: "block",
                margin: "0 auto",
              }}
            >
              Services
            </Button>
            <br />
            <Button
              color="primary"
              variant="outlined"
              onClick={() => navigate("/mural")}
              align="right"
              sx={{
                fontSize: 12,
                mt: 2,
                width: "100px",
                display: "block",
                margin: "0 auto",
              }}
            >
              Mural
            </Button>
          </Box>
        </GridBox>
      </Grid>
    </Box>
  );
};
