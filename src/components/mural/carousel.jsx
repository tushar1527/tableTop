import { useState, useEffect, useRef } from "react";
import Carousel from "react-bootstrap/Carousel";
import PdfViewer from "./pdf-viewer";
import "./carousel.css";

function MyCarousel({ onBackDropClick, type, urls, itemTop, itemLeft }) {
  const [prevIndex, setPrevIndex] = useState(0);

  useEffect(() => {
    // if (itemTop > 700) {
    //   document.getElementById("my-carousel").style.top = `${itemTop}px`;
    //   document.getElementById("my-carousel").style.left = `${itemLeft + 500}px`;
    // } else {
    //   document.getElementById("my-carousel").style.top = `${itemTop + 200}px`;
    //   document.getElementById("my-carousel").style.left = `${itemLeft + 500}px`;
    // }
  }, []);

  const [autoplay, Setautoplay] = useState(false);
  const videoRef = useRef(null);
  let carouselarray = document.querySelectorAll(
    ".carousel-inner > .carousel-item > video"
  );
  const videoCarousel =
    carouselarray.length &&
    carouselarray.item(0).id &&
    carouselarray.item(0).id == "player";

  const handleSelect = (selectedIndex, e) => {
    if (videoCarousel) {
      carouselarray.item(selectedIndex).play();
      carouselarray.item(prevIndex).pause();
    }

    setPrevIndex(selectedIndex);
  };

  return (
    <div id="my-carousel-wrapper">
      <div id="carousel-backdrop" onClick={onBackDropClick}></div>
      <div id="my-carousel" className="ratio ratio-16x9">
        <Carousel interval={null} onSelect={handleSelect}>
          {urls.map((url, i) => (
            <Carousel.Item key={i}>
              {type === "video" && (
                <video
                  autoPlay={i == 0 ? true : false}
                  ref={videoRef}
                  id="player"
                  src={url}
                  loop
                  controls
                  data-index={i + 1}
                ></video>
              )}
              {type === "image" && <img src={url} />}
              {type === "text" && typeof url === "string" && (
                <div className="text-container">{url}</div>
              )}
              {type === "pdf" && <PdfViewer url={url} />}
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default MyCarousel;
