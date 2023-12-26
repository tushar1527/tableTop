import { Box } from "@mui/system";
import { useEffect } from "react";
import "../assets/css/service.css";
import Navigation from "../components/History/widgets/Navigation";
import { Loader } from "../components/loader";
import ScreenOne from "../components/service/screen-one";
import ScreenThree from "../components/service/screen-three";
import ScreenTwo from "../components/service/screen-two";
import { useLoader } from "../hooks/use-loader";
import { useService } from "../hooks/use-service";

function Service() {
  const { loadServicesData, servicesContent } = useService();
  const { loading } = useLoader();

  useEffect(() => {
    loadServicesData();
  }, [loadServicesData]);

  return loading ? (
    <Loader />
  ) : (
    <>
      <main className="service-page">
        <video autoPlay loop muted>
          <source src="./img/BG.mp4" type="video/mp4" />
        </video>
        <div className="content-box">
          <Box
            sx={{
              display: "flex",
              height: "100vh",
            }}
          >
            <Box sx={{ position: "relative", width: "100vw" }}>
              <ScreenOne advisory={servicesContent?.[0]} />
            </Box>
            <Box sx={{ position: "relative", width: "100vw" }}>
              <ScreenTwo taxes={servicesContent?.[1]} />
            </Box>
            <Box sx={{ position: "relative", width: "100vw" }}>
              <ScreenThree innovation={servicesContent?.[2]} />
            </Box>
            <Box sx={{ position: "relative" }}>{/* <Firms /> */}</Box>
            <div className="history-table-menu">
              <Navigation />
            </div>
          </Box>
        </div>
      </main>
    </>
  );
}

export default Service;
