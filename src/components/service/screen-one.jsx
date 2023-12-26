import { Box } from "@mui/system";
import { Container } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import BusinessConsulting from "../../assets/img/bc.png";
import { useService } from "../../hooks/use-service";
function ScreenOne({ advisory }) {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedSubService, setSelectedSubService] = useState(null);
  const [activeAnimation, setActiveAnimation] = useState(false);
  const [selectedContent, setSelectedContent] = useState(null);
  const [videoLinkVisible, setVideoLinkVisible] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const [pdfVisible, setPdfVisible] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState(null);
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [selectedServiceIndex, setSelectedServiceIndex] = useState(null);

  const onPDfAdvisory = () => {
    setPdfVisible(!pdfVisible);
    setVideoLinkVisible(false);
    setContentVisible(false);
  };

  const onContentVisible = () => {
    setVideoLinkVisible(!videoLinkVisible);
    setPdfVisible(false);
  };

  const playPausedAdvisory = (value) => {
    let video1 = document.getElementById(`service-video-advisory`);
    if (video1.paused == false) {
      video1.pause();
    } else {
      video1.play();
    }
  };

  useEffect(() => {
    if (selectedService) {
      if (selectedService?.content?.length) {
        setSelectedContent(selectedService.content);
      }
      if (!activeAnimation) {
        setActiveAnimation(true);
      }
      setVideoLinkVisible(false);
      setContentVisible(false);
      setPdfVisible(false);
    }
  }, [selectedService]);

  const onHandleSubService = (sub_service) => {
    setSelectedContent(sub_service.content);
    setSelectedSubService(sub_service);
    setVideoLinkVisible(false);
    setContentVisible(false);
    setPdfVisible(false);
  };

  const onHandleService = (service, index) => {
    setSelectedService(service);
    setSelectedServiceIndex(index);
    setSelectedSubService(null);
  };

  useEffect(() => {
    if (selectedSubService) {
      setSelectedService(null);
    }
  }, [selectedSubService]);

  return (
    <>
      <Box>
        <Container
          maxWidth="xl"
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
          <div className="content screen-one">
            <div className="heading">
              <h1>{advisory?.Service}</h1>
              <p>{advisory?.content[0].Data}</p>
            </div>
            <div className="animation-box ">
              <div
                id="main_ui"
                className={activeAnimation ? "active-animation-box" : ""}
              >
                <div className="animation-inner">
                  <div className="spinner-outer">
                    <div className="hm-spinner"></div>
                  </div>
                  <button className="cn-button" id="cn-button">
                    <img src="./img/kpmg-logo-1.png" />
                  </button>

                  <ul className="newcircle">
                    {advisory?.children?.length
                      ? advisory?.children?.map((child, index) => (
                          <li
                            className={
                              index === selectedServiceIndex
                                ? "active-animation"
                                : ""
                            }
                            key={index}
                            onTouchStart={onHandleService.bind(
                              this,
                              child,
                              index
                            )}
                          >
                            <span className="advisory-name">
                              {child.Service}
                            </span>
                          </li>
                        ))
                      : null}
                  </ul>
                  <div
                    className={
                      advisory?.children?.[selectedServiceIndex]
                        ? `submenucat subservice${selectedServiceIndex}`
                        : ""
                    }
                  >
                    {advisory?.children?.[selectedServiceIndex]?.children
                      ?.length
                      ? advisory?.children?.[selectedServiceIndex].children.map(
                          (item, childIndex) => (
                            <span
                              onTouchStart={onHandleSubService.bind(this, item)}
                              key={childIndex}
                              className={
                                item?.Service === selectedSubService?.Service
                                  ? "active"
                                  : ""
                              }
                            >
                              <Link to="">{item.Service}</Link>
                            </span>
                          )
                        )
                      : null}
                  </div>
                </div>
              </div>
            </div>
            <div className="content-text" id="content-box">
              {selectedContent?.length ? (
                <p className="tax-box-description">
                  {selectedContent?.find((item) => item.Type === "Text")?.Data}
                </p>
              ) : null}

              {selectedContent?.length && (
                <div className="modal-link">
                  {selectedContent?.filter((item) => item.Type === "Video")
                    .length ? (
                    <div className="modal-name">
                      <Link
                        to=""
                        className="videolink"
                        onTouchStart={onContentVisible.bind(this, true)}
                      >
                        <img src="./img/youtube.png" />
                      </Link>
                      {videoLinkVisible && (
                        <div className="video-list">
                          <ul>
                            {selectedContent
                              ?.filter((item) => item.Type === "Video")
                              .map((video, index) => (
                                <li key={index}>
                                  <Link
                                    to=""
                                    onClick={setSelectedVideo.bind(this, video)}
                                    // onTouchStart=00{setVideoVisible.bind(this, true)}
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
                          className={`modal advisory ${
                            selectedVideo ? "open" : ""
                          }`}
                        >
                          <div className="modal-box">
                            <Link
                              to=""
                              onTouchStart={setSelectedVideo.bind(this, false)}
                              className="modal-close"
                            >
                              X
                            </Link>
                            <video
                              id={`service-video-advisory`}
                              onTouchStart={playPausedAdvisory}
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
                  {selectedContent?.filter((item) => item.Type === "PDF")
                    .length ? (
                    <div className="modal-name">
                      <Link
                        to=""
                        className="videolink"
                        //onTouchStart={onPdfVisible.bind(this, item)}
                        onTouchStart={onPDfAdvisory.bind(this)}
                      >
                        <img src="./img/text-format.png" />
                      </Link>
                      {pdfVisible && (
                        <div className="video-list pdf-list">
                          <ul>
                            {selectedContent
                              ?.filter((item) => item.Type === "PDF")
                              .map((item) => (
                                <li>
                                  <span
                                    onClick={setSelectedPdf.bind(this, item)}
                                  >
                                    {item?.DisplayName}
                                  </span>
                                </li>
                              ))}
                          </ul>
                        </div>
                      )}

                      {selectedPdf && (
                        <div
                          className={`modal pdf ${selectedPdf ? "open" : ""}`}
                        >
                          <div className="modal-box">
                            <Link
                              to=""
                              onTouchStart={setSelectedPdf.bind(this, null)}
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
            </div>
          </div>
        </Container>
      </Box>
    </>
  );
}

export default ScreenOne;
