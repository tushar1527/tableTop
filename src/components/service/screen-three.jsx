import React, { useState, useEffect } from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { YouTube } from "@mui/icons-material";
import { useService } from "../../hooks/use-service";
import Plexusgreen from "../../assets/img/two.svg";
import Plexusgreentwo from "../../assets/img/five.svg";

function ScreenThree({ innovation }) {
  const [step, setStep] = useState(0);
  const [selectedInnovation, setSelectedInnovation] = useState(null);
  const [selectedSubInnovation, setSelectedSubInnovation] = useState(null);
  const [selectedMedia, setSelectedMedia] = useState();

  const onSelectSubInnovation = (value) => {
    setSelectedSubInnovation(value);
    if (value.content.length) {
      setStep(1);
    }
  };

  useEffect(() => {
    if (innovation?.children?.length) {
      setSelectedInnovation(innovation?.children?.[0]);
    }
  }, [innovation]);
  return (
    <>
      <Box>
        <Container
          maxWidth="fluid"
          sx={{
            alignItems: "center",
            display: "flex",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              md: "row",
            },
            px: 3,
          }}
        >
          <div className="content screen-three">
            <div className="heading">
              <h1>{innovation?.Service}</h1>
              <p>
                {innovation?.content.find((item) => item.Type === "Text")?.Data}
              </p>
            </div>
            {step === 0 && (
              <>
                <div className="round-moving">
                  <div className="daddy">
                    <div className="mommy">
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                      <div></div>
                    </div>
                  </div>
                  <div className="link-round">
                    <div className="main-link">
                      <img src={Plexusgreen} />

                      <Link to="">KPMG Innovation Kaleidoscope</Link>
                    </div>
                    <div className="submenu-link">
                      {/* <i></i> */}
                      <img src={Plexusgreentwo} />
                      <ul>
                        {innovation?.children?.length &&
                          innovation?.children?.map((item) => (
                            <li
                              onTouchStart={setSelectedInnovation?.bind(
                                this,
                                item
                              )}
                            >
                              <span> {item.Service}</span>
                            </li>
                          ))}
                      </ul>
                    </div>
                  </div>
                </div>
                {selectedInnovation && selectedInnovation?.children?.length && (
                  <div className="threetab">
                    <ul>
                      {selectedInnovation?.children?.length &&
                        selectedInnovation?.children?.map((item) => (
                          <li
                            onTouchStart={onSelectSubInnovation?.bind(
                              this,
                              item
                            )}
                          >
                            {item.Service}
                          </li>
                        ))}
                    </ul>
                  </div>
                )}
              </>
            )}
            {step === 1 && (
              <>
                <div className="heading">
                  <h2>
                    <Link
                      to=""
                      onTouchStart={setStep.bind(this, 0)}
                      className="backarrow"
                    >
                      <ArrowBackIosIcon />
                    </Link>
                    {selectedSubInnovation.Service}
                  </h2>
                </div>
                <Grid
                  container
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  id="threetab-inner"
                >
                  {" "}
                  <Grid item md={12}>
                    {selectedSubInnovation?.content?.length &&
                      selectedSubInnovation?.content?.map((item) => (
                        <div className={`tax-box-description text ${"open"}`}>
                          <p>{item.Data}</p>
                        </div>
                      ))}
                  </Grid>
                </Grid>
              </>
            )}
          </div>
        </Container>
      </Box>
    </>
  );
}

export default ScreenThree;
