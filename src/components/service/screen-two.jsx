import { useState } from "react";
import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useService } from "../../hooks/use-service";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
function ScreenTwo({ taxes }) {
  const [selectedTax, setSelectedTax] = useState(null);
  const [step, setStep] = useState(0);
  const [videoLinkVisible, setVideoLinkVisible] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [pdfListVisible, setPdfListVisible] = useState(false);
  const [videoVisible, setVideoVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [selectedSubTax, setSelectedSubTax] = useState(null);
  const [selectedSubTaxTwo, setSelectedSubTaxTwo] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const onSelectTax = (tax) => {
    setSelectedTax(tax);
    // setStep(1);
    if (tax?.content?.length > 0) {
      setStep(1);
    }
  };

  const onCloseVideo = () => {
    setVideoVisible(false);
    setVideoLinkVisible(true);
  };
  const onPdfclose = () => {
    setVideoVisible(false);
    setVideoLinkVisible(false);
    setContentVisible(false);
    setPdfListVisible(true);
    setPdfVisible(false);
  };
  const onSelectSubTax = (subTax) => {
    setVideoVisible(false);
    setVideoLinkVisible(false);
    setPdfVisible(false);
    setSelectedSubTax(subTax);
    // setStep(2);
    if (subTax?.content?.length > 0) {
      setStep(2);
    }
  };

  const onBack = () => {
    setVideoVisible(false);
    setVideoLinkVisible(false);
    setContentVisible(false);
    setPdfVisible(false);
    setStep(0);
  };
  const onBackStepTwo = () => {
    setVideoVisible(false);
    setVideoLinkVisible(false);
    setContentVisible(false);
    setPdfVisible(false);
    setStep(1);
  };
  const onVideoLink = () => {
    setVideoLinkVisible(!videoLinkVisible);
    setPdfVisible(false);
    setContentVisible(false);
  };
  const onPDflink = () => {
    setPdfVisible(!pdfVisible);
    setVideoLinkVisible(false);
    setContentVisible(false);
  };
  const onPDfSublink = () => {
    setPdfVisible(!pdfVisible);
  };
  const onVideoSublink = () => {
    setVideoLinkVisible(!videoLinkVisible);
    setPdfVisible(false);
    setContentVisible(false);
  };
  const onContentLink = () => {
    setContentVisible(true);
    setVideoLinkVisible(false);
    setPdfVisible(false);
  };
  var settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 10000,
  };
  const playPausedtax = (value) => {
    let video1 = document.getElementById(`service-video`);
    if (video1.paused == false) {
      video1.pause();
    } else {
      video1.play();
    }
  };
  const playPaused = (value) => {
    let video2 = document.getElementById(`service-video2`);
    if (video2.paused == false) {
      video2.pause();
    } else {
      video2.play();
    }
  };
  // console.log(taxes);
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
          <div className="content screen-two">
            <div className="heading">
              <h1>{taxes?.Service}</h1>
              <p>{taxes?.content?.[0]?.Data}</p>
            </div>
            {step === 0 && (
              <Grid
                container
                direction="row"
                justifyContent="center"
                alignItems="center"
                spacing={{ xs: 2, md: 3 }}
                columns={{ xs: 4, sm: 8, md: 12 }}
                id="main-tab"
                className="main-show"
              >
                {taxes?.children?.length
                  ? taxes?.children?.map((tax) => (
                      <Grid item xs={2} sm={3} md={3}>
                        <div
                          className="tax-box"
                          onTouchStart={onSelectTax.bind(this, tax)}
                        >
                          <img src={tax?.icon} className="img-fluid" alt />
                          <h4>{tax?.Service}</h4>
                        </div>
                      </Grid>
                    ))
                  : null}
              </Grid>
            )}

            {step === 1 && (
              <div className="mt-5">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  // id="main-tabinner"
                >
                  <Grid item xs={2} sm={3} md={3}>
                    <Link
                      to=""
                      onTouchStart={onBack.bind(this)}
                      className="backarrow"
                    >
                      <ArrowBackIosIcon />
                    </Link>
                    <div className="tax-box-description">
                      <img src={selectedTax?.icon} className="img-fluid" alt />
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={6} md={6}>
                    <div className="tax-box-description">
                      <p>
                        {
                          selectedTax.content.find(
                            (item) => item.Type === "Text"
                          ).Data
                        }
                      </p>
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={3} md={3}>
                    {selectedTax && (
                      <div className="modal-link">
                        {selectedTax?.content?.filter(
                          (item) => item.Type === "Video"
                        ).length ? (
                          <div className="modal-name">
                            <Link
                              to=""
                              className="videolink"
                              onTouchStart={onVideoLink.bind(this)}
                            >
                              <img src="./img/youtube.png" />
                            </Link>
                            {videoLinkVisible && (
                              <div className="video-list">
                                <ul>
                                  {selectedTax?.content

                                    ?.filter((item) => item.Type === "Video")
                                    .map((video, index) => (
                                      <li key={index}>
                                        <span
                                          onClick={setSelectedVideo.bind(
                                            this,
                                            video
                                          )}
                                        >
                                          <span className="video-thumbnail">
                                            <span>{video?.DisplayName}</span>
                                          </span>
                                        </span>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            )}

                            {selectedVideo && (
                              <div
                                className={`modal pdf ${
                                  selectedVideo ? "open" : ""
                                }`}
                              >
                                <div className="modal-box">
                                  <Link
                                    to=""
                                    onTouchStart={setSelectedVideo.bind(
                                      this,
                                      null
                                    )}
                                    className="modal-close"
                                  >
                                    X
                                  </Link>
                                  <video
                                    id={`service-video2`}
                                    onTouchStart={playPaused}
                                    autoPlay
                                    controls
                                    controlsList="nodownload nofullscreen noplaybackrate"
                                    disablePictureInPicture
                                  >
                                    <source
                                      src={selectedVideo.Data}
                                      type="video/mp4"
                                    />
                                  </video>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : null}
                        {selectedTax?.content?.filter(
                          (item) => item.Type === "PDF"
                        ).length ? (
                          <div className="modal-name">
                            <span
                              className="videolink"
                              //onTouchStart={onPdfVisible.bind(this, item)}
                              onTouchStart={onPDflink.bind(this)}
                            >
                              <img src="./img/text-format.png" />
                            </span>
                            {pdfVisible && (
                              <div className="video-list pdf-list">
                                <ul>
                                  {selectedTax?.content
                                    ?.filter((item) => item.Type === "PDF")
                                    .map((item) => (
                                      <li>
                                        <span
                                          onClick={setSelectedPdf.bind(
                                            this,
                                            item
                                          )}
                                        >
                                          <span>{item?.DisplayName}</span>
                                        </span>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            )}

                            {selectedPdf && (
                              <div
                                className={`modal pdf ${
                                  selectedPdf ? "open" : ""
                                }`}
                              >
                                <div className="modal-box">
                                  <Link
                                    to=""
                                    onTouchStart={setSelectedPdf.bind(
                                      this,
                                      null
                                    )}
                                    className="modal-close"
                                  >
                                    X
                                  </Link>

                                  <iframe
                                    src={selectedPdf?.Data + "#toolbar=0"}
                                  ></iframe>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Grid>
                  <Grid item md={12}>
                    <h5>
                      {selectedTax && selectedTax?.Service
                        ? selectedTax?.Service
                        : ""}
                    </h5>
                  </Grid>
                </Grid>
                <div className="slide-width">
                  <Slider {...settings}>
                    {selectedTax?.children?.length > 0 &&
                      selectedTax?.children?.map((item) => (
                        <div className="mt-5">
                          <div
                            className="tax-box-trasfer-price"
                            onClick={onSelectSubTax.bind(this, item)}
                          >
                            {item?.Service}
                          </div>
                        </div>
                      ))}
                  </Slider>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="vertical-center">
                <Grid
                  container
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
                  spacing={{ xs: 2, md: 3 }}
                  columns={{ xs: 4, sm: 8, md: 12 }}
                  // id="price-box"
                >
                  <Grid item xs={2} sm={3} md={3}>
                    <Link
                      to=""
                      onTouchStart={onBackStepTwo.bind(this)}
                      className="backarrow"
                    >
                      <ArrowBackIosIcon />
                    </Link>
                    <div className="tax-box-trasfer-price">
                      {selectedSubTax?.Service}
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={6} md={6}>
                    <div className="tax-box-description">
                      {selectedSubTax && (
                        <p>
                          {
                            selectedSubTax?.content?.find((item) =>
                              item.Type === "Text" ? item : ""
                            )?.Data
                          }
                        </p>
                      )}
                    </div>
                  </Grid>
                  <Grid item xs={2} sm={3} md={3}>
                    {selectedSubTax && (
                      <div className="modal-link">
                        {selectedSubTax?.content?.filter(
                          (item) => item.Type === "Video"
                        ).length ? (
                          <div className="modal-name">
                            <Link
                              to=""
                              className="videolink"
                              onTouchStart={onVideoSublink.bind(this)}
                            >
                              <img src="./img/youtube.png" />
                            </Link>
                            {videoLinkVisible && (
                              <div className="video-list">
                                <ul>
                                  {selectedSubTax?.content
                                    ?.filter((item) => item.Type === "Video")
                                    .map((video, index) => (
                                      <li key={index}>
                                        <Link
                                          to=""
                                          onClick={setSelectedVideo.bind(
                                            this,
                                            video
                                          )}
                                        >
                                          <span className="video-thumbnail">
                                            <span>{video?.DisplayName}</span>
                                          </span>
                                        </Link>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            )}

                            {selectedVideo && (
                              <div
                                className={`modal pdf ${
                                  selectedVideo ? "open" : ""
                                }`}
                              >
                                <div className="modal-box">
                                  <Link
                                    to=""
                                    onTouchStart={setSelectedVideo.bind(
                                      this,
                                      null
                                    )}
                                    className="modal-close"
                                  >
                                    X
                                  </Link>
                                  <video
                                    id={`service-video`}
                                    onTouchStart={playPausedtax}
                                    autoPlay
                                    controls
                                    controlsList="nodownload nofullscreen noplaybackrate"
                                    disablePictureInPicture
                                  >
                                    <source
                                      src={selectedVideo?.Data}
                                      type="video/mp4"
                                    />
                                  </video>
                                  {/* <iframe src={selectedVideo?.Data}></iframe> */}
                                </div>
                              </div>
                            )}
                          </div>
                        ) : null}
                        {selectedSubTax?.content?.filter(
                          (item) => item.Type === "PDF"
                        ).length ? (
                          <div className="modal-name">
                            <Link
                              to=""
                              className="videolink"
                              //onTouchStart={onPdfVisible.bind(this, item)}
                              onTouchStart={onPDfSublink.bind(this)}
                            >
                              <img src="./img/text-format.png" />
                            </Link>
                            {pdfVisible && (
                              <div className="video-list pdf-list">
                                <ul>
                                  {selectedSubTax?.content
                                    ?.filter((item) => item.Type === "PDF")
                                    .map((item) => (
                                      <li>
                                        <span
                                          onClick={setSelectedSubTaxTwo.bind(
                                            this,
                                            item
                                          )}
                                        >
                                          <span>{item?.DisplayName}</span>
                                        </span>
                                      </li>
                                    ))}
                                </ul>
                              </div>
                            )}

                            {selectedSubTaxTwo && (
                              <div
                                className={`modal pdf ${
                                  selectedSubTaxTwo ? "open" : ""
                                }`}
                              >
                                <div className="modal-box">
                                  <Link
                                    to=""
                                    onTouchStart={setSelectedSubTaxTwo.bind(
                                      this,
                                      null
                                    )}
                                    className="modal-close"
                                  >
                                    X
                                  </Link>

                                  <iframe
                                    src={selectedSubTaxTwo?.Data + "#toolbar=0"}
                                  ></iframe>
                                </div>
                              </div>
                            )}
                          </div>
                        ) : null}
                      </div>
                    )}
                  </Grid>
                </Grid>
              </div>
            )}
          </div>
        </Container>
      </Box>
    </>
  );
}

export default ScreenTwo;
