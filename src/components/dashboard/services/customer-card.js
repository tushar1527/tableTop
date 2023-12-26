import { Box, Card, CardContent, Button } from "@mui/material";
import { useState } from "react";

export const HistoryCard = ({ data = {} }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Box sx={{ position: "relative" }}>
      {!expanded && (
        <Card
          component="section"
          sx={{
            m: 1,
            p: 2,
            display: "flex",
            justifyContent: "space-between",
            color: "common.black",
            alignItems: "center",
            background: expanded ? "primary.dark" : "white",
            backgroundSize: "200%",
            transition: "width 2s ease-in-out",
          }}
        >
          <Box
            sx={{
              textAlign: "left",
            }}
          >
            <b>#{data.id}</b>
          </Box>

          <CardContent
            sx={{
              p: 0,
              display: "flex",
              justifyContent: "flex-end",
              paddingTop: "5px",
            }}
          >
            <Button
              color="primary"
              variant="outlined"
              onClick={() => setExpanded(true)}
              align="right"
              sx={{
                fontSize: 9,
                width: "70x",
                alignSelf: "flex-end",
                p: 0.5,
              }}
            >
              Read More
            </Button>
          </CardContent>
        </Card>
      )}
      {expanded ? (
        <Box
          sx={{
            position: "relative",
            transition: "all 2s, height 2s, transform 2s",
          }}
        >
          <Card
            component="p"
            sx={{
              "@keyframes appear": {
                "0%": {
                  opacity: 1,
                  transform: "rotateY(180deg)",
                },
                "100%": {
                  opacity: 1,
                  transform: "rotateY(0deg)",
                },
              },
              "@keyframes slideIn": {
                "0%": {
                  transform: "translateY(-200px) scale(2)",
                },
                "100%": {
                  transform: "translateY(0px) scale(1)",
                },
              },
              animation: "appear 0.1s linear",
              m: 1,
              fontSize: "12px",
              height: "auto",
              mt: 1,
              mb: 2,
              background: "aliceblue",
              p: 2,
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              transition: "width 2s, height 4s",
              boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
              // "&::after": {
              //   content: '""',
              //   position: "absolute",
              //   width: 0,
              //   height: 0,
              //   marginLeft: "-3em",
              //   marginTop: "-1.6em",
              //   left: "100%" /* change to 0% for left arrow */,
              //   boxSizing: "border-box",
              //   border: "0.6em solid black",
              //   borderColor: "transparent transparent aliceblue aliceblue",
              //   transformOrigin: "50% 50%",
              //   transform:
              //     "rotate(-226deg)" /* change to 45 deg for left arrow */,
              //   boxShadow: "-5px 5px 10px 0 rgba(0, 0, 0, 0.1)",
              // },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Box component="section" sx={{ backgroundColor: '#fff', display: 'block', width: '100%', textAlign: 'right', p: 1, borderRadius: 1, mb: 2, boxShadow: 'rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px', animation: "slideIn 0.4s linear", }}>
                <b>#{data.id}</b>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "baseline",
              }}
            >
              <Box sx={{ textAlign: "left", pb: 1 }}>
                <b>User</b> - {data.userId}
              </Box>
            </Box>
            <Box sx={{ textAlign: "left", pb: 1 }}>
              <b>Title</b> - {data.title}
            </Box>
            <Box sx={{ textAlign: "left", pb: 1 }}>
              <b>Description</b> - {data.body}
            </Box>
            <CardContent
              sx={{
                p: 0,
                display: "flex",
                justifyContent: "flex-end",
              }}
            >
              <Button
                color="error"
                variant="contained"
                onClick={() => setExpanded(false)}
                align="right"
                sx={{
                  fontSize: 9,
                  width: "70x",
                  p: 0.5,
                }}
              >
                Show less
              </Button>
            </CardContent>
          </Card>
        </Box>
      ) : null}
    </Box>
  );
};
