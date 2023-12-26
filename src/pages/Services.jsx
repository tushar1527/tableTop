import React, { useEffect, useState } from "react";
import { Box, Container } from "@mui/material";
import { HistoryTable } from "../components/dashboard/services/history-list-table";
import axios from "axios";

const data = ["Service 1", "Service 2", "Service 3", "Service 4", "Service 5"];

const HistoryList = () => {
  const [history, setHistory] = useState([]);

  const fetchHisotryData = () => {
    axios.get("https://jsonplaceholder.typicode.com/posts").then(
      (response) => {
        var result = response.data;
        if (result && result?.length) {
          const groups = Math.ceil(result.length / 5);
          setHistory(
            new Array(Math.ceil(result.length / groups))
              .fill()
              .map((_) => result.splice(0, groups))
              .map((d, i) => ({ year: data[i], data: d }))
          );
        }
      },
      (error) => {
        console.log(error);
      }
    );
  };

  useEffect(() => {
    fetchHisotryData();
  }, []);
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
        }}
      >
        <Container maxWidth="xl" sx={{ height: "calc(100vh - 200px)" }}>
          <HistoryTable history={history} />
        </Container>
      </Box>
    </>
  );
};

export default HistoryList;
