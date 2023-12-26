import React, { useEffect, useRef } from "react";
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Carousel, Col, Row } from "react-bootstrap";
function Slideshow({ videos }) {
  const [index, setIndex] = React.useState(0);
  let ref = useRef(null);

  useEffect(() => {
    if (index >= 6) {
      setIndex(0);
    } else {
      setTimeout(() => setIndex(index + 1), 2500);
    }
  }, [index]);

  var settings = {
    dots: false,
    arrows: true,
    infinite: true,
    // swipeToSlide: true,
    draggable: false,
    touchMove: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 120000,
  };

  const onPauseVideo = () => {
    ref.current.pause();
  };
  const playPaused = (index) => {
    let video1 = document.getElementById(`video${index}`);
    if (video1.paused == false) {
      video1.pause();
    } else {
      video1.play();
    }
  };
  // let data1 = document.getElementsByClassName("active");
  // for (let i = 0; i < data1.length; i++) {
  //   if (data1[i].className == "active carousel-item") {
  //     console.log("Active");
  //     document.getElementById(`video${data1[i].id}`).play();
  //   }
  // }

  // const sliderVideos = document.querySelectorAll(".slider-video");
  // const handler = () => {
  //   sliderVideos.forEach((video, key) => {
  //     video.play();
  //     video.currentTime = 0;
  //     video.load();
  //   });
  // };
  return (
    <>
      <div style={{ position: "relative", marginRight: "10%" }}>
        <Row>
          <Col md={12}>
            <div
              style={{
                fontWeight: "bold",
                color: "#fff",
                fontSize: "1.5vw",
                textAlign: "center",
                marginTop: "2%",
              }}
            >
              KPMG Innovation Kaleidoscope
            </div>
          </Col>
          <Col md={12}>
            <div
              style={{
                maxWidth: "80%",
                margin: "0 auto",
                paddingTop: "120px",
              }}
            >
              <Carousel
                controls={true}
                fade={true}
                indicators={false}
                interval={12000}
                pause={false}
                touch={true}
                className="hero-slider"
              >
                {videos?.length
                  ? videos.map((item, index) => (
                      <Carousel.Item key={index} id={index}>
                        <video
                          className="slider-video"
                          id={`video${index}`}
                          autoPlay
                          muted
                          loop
                          interval={120000}
                          style={{ width: "100%", height: "768px" }}
                          onTouchStart={playPaused.bind(this, index)}
                          // onSlid={handler}
                          loading="lazy"
                        >
                          <source src={item} type="video/mp4" />
                        </video>
                      </Carousel.Item>
                    ))
                  : null}
              </Carousel>
            </div>
          </Col>
        </Row>
      </div>
    </>
  );
}

export default Slideshow;
