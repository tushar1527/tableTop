import { useWeather } from "../../../hooks/use-weather";
import dark_cloud from "../../../assets/images/new-weathers/dark-cloud.png";
import fog from "../../../assets/images/new-weathers/fog.png";
import light_cloud from "../../../assets/images/new-weathers/light-cloud.png";
import sunny from "../../../assets/images/new-weathers/sunny.png";
import HeavyRainThunder from "../../../assets/images/weathers/Heavy Rain & Thunder_00000.png";
import LightRainThunder from "../../../assets/images/weathers/Light Rain_00000.png";
import LightRain from "../../../assets/images/weathers/Light Rain_00000.png";
import PartlyCloudy from "../../../assets/images/weathers/Partly_Cloudy_00000.png";
import Showers from "../../../assets/images/weathers/Showers_00000.png";
import Snow from "../../../assets/images/weathers/Snow_00000.png";
import HeavyRainNew from "../../../assets/images/weathers/Heavy-Rain.png";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const weatherIcon = (name = "", css) => {
  let weather = name.toLowerCase();
  switch (weather) {
    case "dark clouds":
      return <img src={dark_cloud} alt="sunny" style={css} />;
      break;
    case "fog":
      return <img src={fog} alt="sunny" style={css} />;
      break;
    case "heavy rain thunder":
      return <img src={HeavyRainThunder} alt="sunny" style={css} />;
      break;
    case "heavy rain":
      return <img src={HeavyRainNew} alt="sunny" style={css} />;
      break;
    case "light clouds":
      return <img src={light_cloud} alt="sunny" style={css} />;
      break;
    case "light rain thunder":
      return <img src={LightRainThunder} alt="sunny" style={css} />;
      break;
    case "light rain":
      return <img src={LightRain} alt="sunny" style={css} />;
      break;
    case "party cloudy":
      return <img src={PartlyCloudy} alt="sunny" style={css} />;
      break;
    case "showers":
      return <img src={Showers} alt="sunny" style={css} />;
      break;
    case "snow":
      return <img src={Snow} alt="sunny" style={css} />;
      break;
    case "sunny":
      return <img src={sunny} alt="sunny" style={css} />;
      break;
    case "smoke":
      return <img src={PartlyCloudy} alt="sunny" style={css} />;
    case "clouds":
      return <img src={light_cloud} alt="sunny" style={css} />;
    case "rain":
      return <img src={LightRain} alt="sunny" style={css} />;
    default:
      return <img src={PartlyCloudy} alt="sunny" style={css} />;
      break;
  }
};

var settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
};
const WeatherInfo = () => {
  const { weatherData = {}, moreWeatherData = [] } = useWeather();

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        position: "relative",
        height: "100vh",
        alignItems: "center",
        // marginTop: "40%",
      }}
    >
      <div>
        <div
          style={{
            marginLeft: "5%",
            color: "white",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "20px",
            position: "relative",
            top: "0",
          }}
        >
          <div
            style={{
              position: "relative",
              left: 0,
              right: 0,
              top: "20%",
              marginTop: "0%",
            }}
          >
            {weatherData && weatherData?.name}
          </div>
          {weatherIcon(weatherData && weatherData.weather?.main, {
            margin: "0 auto",
            display: "block",
            width: "100%",
            maxWidth: "700px",
          })}
          <div
            style={{
              position: "relative",
              left: 0,
              right: 0,
              marginTop: "-5%",
            }}
          >
            {(weatherData?.main?.temp - 273.1).toFixed(0)} °C
          </div>
        </div>
        <div
          style={{
            width: "100%",
            position: "relative",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "-5%",
            maxWidth: "1300px",
          }}
        >
          <Slider {...settings}>
            {moreWeatherData &&
              moreWeatherData?.map((item, index) => (
                <div>
                  <div key={index}>
                    {item && (
                      <div
                        key={index}
                        style={{
                          display: "inline-block",
                        }}
                      >
                        <div
                          style={{
                            color: "white",
                            textAlign: "center",
                            fontWeight: "bold",
                            fontSize: "18px",
                            position: "relative",
                          }}
                        >
                          <div
                            style={{
                              position: "relative",
                              left: 0,
                              right: 0,
                              marginTop: "25%",
                              fontSize: "24px",
                            }}
                          >
                            {item && item?.name}
                          </div>

                          {weatherIcon(
                            item &&
                              item?.weather?.length &&
                              item?.weather[0]?.main,
                            {
                              width: "100%",
                              marginLeft: "10px",
                              marginBottom: "10px",
                              maxWidth: "400px",
                            }
                          )}
                          <div
                            style={{
                              position: "absolute",
                              left: 0,
                              right: 0,
                              bottom: 0,
                              fontSize: "24px",
                            }}
                          >
                            {(item && item?.main?.temp - 273.1).toFixed(1)} °C
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default WeatherInfo;
