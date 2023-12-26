import React, { useState, useEffect, createRef, useRef } from "react";
import Carousel from "../components/mural/carousel";
import Navigation from "../components/History/widgets/Navigation";
import base64 from "base-64";
import "../assets/css/Mural.css";

//#region <Asset Imports>
import Ground from "../assets/images/Ground.png";
import Airport from "../assets/images/Airport.png";
import Building from "../assets/images/Building.png";
import Building2 from "../assets/images/Building-2.png";
import Building3 from "../assets/images/Building-3.png";
import IREbuildings from "../assets/images/I&RE buildings.png";
import TMTbuilding from "../assets/images/TMT building.png";
import CMhospital from "../assets/images/CM hospital.png";
import CMmall from "../assets/images/CM mall.png";
import EDTech from "../assets/images/EDTech Services school.png";
import ESGelectric from "../assets/images/ESG electric lines.png";
import FSbank from "../assets/images/FS bank.png";
import SLBCcoal from "../assets/images/SL BC coal.png";
import Coalfactory from "../assets/images/Coal factory.png";
import Coal from "../assets/images/Coal.png";
import Train1 from "../assets/images/Train1.png";
import Train2 from "../assets/images/Train2.png";
import IREdock from "../assets/images/I&RE dock.png";
import Industry from "../assets/images/Industry.png";
import SLBCbuilding from "../assets/images/SL BC building.png";
import SLRAgovernment from "../assets/images/SLRA government.png";
import SLRAhole from "../assets/images/SLRA hole.png";
import Cinema from "../assets/images/Cinema.png";
import Twintower from "../assets/images/Twin tower.png";
import IMAbuilding from "../assets/images/IM&A building.png";
import TMTDrone from "../assets/images/Drone.webm";
import TMTMovieposter from "../assets/images/TMT Movie poster.png";
import TMTMovieposter2 from "../assets/images/TMT Movie poster2.png";
import TMTMovieposter3 from "../assets/images/TMT Movie poster3.png";
import TMTStadium from "../assets/images/TMT Stadium.png";
import Mobileqr from "../assets/images/Mobile qr.png";
import Dampond from "../assets/images/Dam water.png";
import Lamp from "../assets/images/Lamp.png";
import Mantralya from "../assets/images/Mantralya.png";
import Cafe from "../assets/images/Cafe.png";
import Windmill from "../assets/images/Windmill.webm";
import Streetlightleft from "../assets/images/Street light left.png";
import Streetlightright from "../assets/images/Street light right.png";
import Yellowbus from "../assets/images/Yellow bus.png";
import yellowcargoing from "../assets/images/yellow car going.png";
import redcarcoming from "../assets/images/red car coming.png";
import greycarleft from "../assets/images/grey car left.png";
import whitecar from "../assets/images/white car.png";
import yellowcab from "../assets/images/yellow cab.png";
import darkgreycar from "../assets/images/dark grey car.png";
import greencar from "../assets/images/green car.png";
import imacars from "../assets/images/ima cars.png";
import streetlight1 from "../assets/images/streetlight1.png";
import streetlight2 from "../assets/images/streetlight2.png";
import Consumermarkets from "../assets/images/Consumer markets.png";
import EnergyNatural from "../assets/images/Energy & Natural  Resources.png";
import FinancialServices from "../assets/images/Financial Services.png";
import GovernmentPublic from "../assets/images/Government &  Public Services.png";
import InfrastructureRealEstate from "../assets/images/Infrastructure & Real Estate.png";
import IndustrialManufacturingAuto from "../assets/images/Industrial Manufacturing  & Auto.png";
import TechnologyMediatelecom from "../assets/images/Technology, Media & telecom.png";
import Services from "../assets/images/Services.png";
import BusinessConsulting from "../assets/images/Business Consulting.png";
import DigitalTrustCyber from "../assets/images/Digital Trust- Cyber.png";
import RiskAdvisory from "../assets/images/Risk Advisory.png";
import TechEnablement from "../assets/images/Tech Enablement.png";
import OneMA from "../assets/images/One M&A.png";
import ManagedServices from "../assets/images/Managed Services.png";
import Tax from "../assets/images/Tax.png";
import StrategicInitiatives from "../assets/images/Strategic Initiatives.png";
import ESGtrees1 from "../assets/images/ESG trees 1.png";
import ESGTree2 from "../assets/images/ESG Tree 2.png";
import ESGtree3 from "../assets/images/ESG tree 3.png";
import Damwater from "../assets/images/Dam water.webm";
import Boat from "../assets/images/Boat.webm";
import fire from "../assets/images/fire2.webm";
import imageIcon from "../assets/images/imageIcon.png";
import pptIcon from "../assets/images/pptIcon.png";
import pdfIcon from "../assets/images/pdfIcon.png";
//#endregion

let completemap = {};
// const completemap = {
//   "Consumer markets": ["CMmall", "EDTech"],
//   "Energy & Natural Resources": [
//     "Solarpanel1",
//     "Solarpanel2",
//     "Solarpanel3",
//     "Solarpanel4",
//     "ESGelectric",
//     "Lamp",
//     "Windmill1",
//     "Windmill2",
//     "Windmill3",
//     "Windmill4",
//   ],
//   "Financial Services": ["FSbank"],
//   "Government & Public Services": [
//     "SLRAgovernment",
//     "CMhospital",
//     "Mantralya",
//     "Yellowbus1",
//     "Yellowbus2",
//     "Yellowbus3",
//   ],
//   "Infrastructure & Real Estate": [
//     "IREdock",
//     "IREbuilding",
//     "Train1",
//     "Train2",
//   ],
//   "Industrial Manufacturing & Auto": [
//     "Coal",
//     "IMAbuilding",
//     "Coalfactory",
//     "Car1",
//     "Car2",
//     "Car3",
//     "Car4",
//     "Car5",
//     "Car6",
//     "Car7",
//     "Car8",
//     "Car9",
//     "Car10",
//     "Car11",
//     "Car12",
//     "Car13",
//   ],
//   "Technology, Media & telecom": [
//     "Mobileqr",
//     "TMTbuilding",
//     "SLRAhole",
//     "TMTStadium",
//     "TMTDrone",
//     "EDTech",
//     "TMTMovieposter1",
//     "TMTMovieposter2",
//     "TMTMovieposter3",
//   ],
//   service1: [],
//   "Business Consulting": ["Coal", "SLBCbuilding", "Mobileqr"],
//   "Digital Trust": ["Mobileqr"],
//   "Risk Advisory": ["SLRAhole", "SLRAgovernment"],
//   "Tech Enablement": ["Twintower"],
//   "One M&A": ["FSbank", "Whitebluebuilding", "Trianglebuilding"],
//   "Managed Services": ["Airport", "Cinema", "CMhospital"],
//   Tax: ["Mantralya", "Twintower", "Govermentbuilding", "Cafe"],
//   "Strategic Initiatives": [
//     "ESGTree3",
//     "ESGTree2",
//     "ESGTree1",
//     "Dampond",
//     "Windmill1",
//     "Windmill2",
//     "Windmill3",
//     "Windmill4",
//   ],
// };

const USERNAME = "kpmg_mural";
const PASSWORD = "password";

let itemTop = null;
let itemLeft = null;
let hotspot_label = "";
let mediaRef = null;
let ssname = "";
let sectorIcon = [];
let serviceIcon = [];

const MEDIA_STATUS = {
  text: false,
  image: false,
  pdf: false,
  video: false,
};

const MEDIA_ANIMATION_DURATION_REQ = {
  text: 0.7,
  image: 0.7,
  pdf: 0.7,
  video: 0.7,
};

const ANIMATION_DELAY = {
  text: 0,
  image: 0,
  pdf: 0,
  video: 0,
};

function dataMapGenerator(data) {
  const dataMap = {};

  data.forEach(
    ({
      hotspot_label,
      resource_name,
      resource_type,
      content_url,
      content_type,
    }) => {
      if (!dataMap[hotspot_label]) {
        dataMap[hotspot_label] = {
          sector: [],
          service: [],
          datacontent: {},
        };
      }

      const hotspotRef = dataMap[hotspot_label];

      if (resource_type == "sector") {
        if (!hotspotRef.sector.includes(resource_name)) {
          hotspotRef.sector.push(resource_name);
        }
      } else if (resource_type == "service") {
        if (!hotspotRef.service.includes(resource_name)) {
          hotspotRef.service.push(resource_name);
        }
      }

      if (!hotspotRef.datacontent[resource_name]) {
        hotspotRef.datacontent[resource_name] = {
          video: [],
          text: [],
          image: [],
          pdf: [],
        };
      }
      hotspotRef.datacontent[resource_name][content_type].push(content_url);
    }
  );
  dataMap.ESGTree1 = dataMap.ESGTree;
  dataMap.ESGTree2 = dataMap.ESGTree;
  dataMap.ESGTree3 = dataMap.ESGTree;
  delete dataMap.ESGTree;

  dataMap.Windmill1 = dataMap.Windmill;
  dataMap.Windmill2 = dataMap.Windmill;
  dataMap.Windmill3 = dataMap.Windmill;
  dataMap.Windmill4 = dataMap.Windmill;
  delete dataMap.Windmill;

  dataMap.TMTMovieposter1 = dataMap.TMTMovieposter;
  dataMap.TMTMovieposter2 = dataMap.TMTMovieposter;
  dataMap.TMTMovieposter3 = dataMap.TMTMovieposter;
  delete dataMap.TMTMovieposter;

  dataMap.Solarpanel1 = dataMap.Solarpanel;
  dataMap.Solarpanel2 = dataMap.Solarpanel;
  dataMap.Solarpanel3 = dataMap.Solarpanel;
  dataMap.Solarpanel4 = dataMap.Solarpanel;
  delete dataMap.Solarpanel;

  dataMap.Yellowbus1 = dataMap.Yellowbus;
  dataMap.Yellowbus2 = dataMap.Yellowbus;
  dataMap.Yellowbus3 = dataMap.Yellowbus;
  delete dataMap.Yellowbus;

  dataMap.Train1 = dataMap.Train;
  dataMap.Train2 = dataMap.Train;
  delete dataMap.Train;

  dataMap.Car1 = dataMap.Cars;
  dataMap.Car2 = dataMap.Cars;
  dataMap.Car3 = dataMap.Cars;
  dataMap.Car4 = dataMap.Cars;
  dataMap.Car5 = dataMap.Cars;
  dataMap.Car6 = dataMap.Cars;
  dataMap.Car7 = dataMap.Cars;
  dataMap.Car8 = dataMap.Cars;
  dataMap.Car9 = dataMap.Cars;
  dataMap.Car10 = dataMap.Cars;
  dataMap.Car11 = dataMap.Cars;
  dataMap.Car12 = dataMap.Cars;
  dataMap.Car13 = dataMap.Cars;
  delete dataMap.Cars;

  return dataMap;
}

function completemapgenerator(data) {
  completemap = {};

  data.forEach(({ hotspot_label, resource_name }) => {
    if (!completemap[resource_name]) {
      completemap[resource_name] = [];
    }

    const mapref = completemap[resource_name];

    if (!mapref.includes(hotspot_label)) {
      if (hotspot_label == "ESGTree") {
        mapref.push(hotspot_label, "ESGTree1", "ESGTree2", "ESGTree3");
      } else if (hotspot_label == "Windmill") {
        mapref.push(
          hotspot_label,
          "Windmill1",
          "Windmill2",
          "Windmill3",
          "Windmill4"
        );
      } else if (hotspot_label == "TMTMovieposter") {
        mapref.push(
          hotspot_label,
          "TMTMovieposter1",
          "TMTMovieposter2",
          "TMTMovieposter3"
        );
      } else if (hotspot_label == "Solarpanel") {
        mapref.push(
          hotspot_label,
          "Solarpanel1",
          "Solarpanel2",
          "Solarpanel3",
          "Solarpanel4"
        );
      } else if (hotspot_label == "Yellowbus") {
        mapref.push(hotspot_label, "Yellowbus1", "Yellowbus2", "Yellowbus3");
      } else if (hotspot_label == "Cars") {
        mapref.push(
          hotspot_label,
          "Car1",
          "Car2",
          "Car3",
          "Car4",
          "Car5",
          "Car6",
          "Car7",
          "Car8",
          "Car9",
          "Car10",
          "Car11",
          "Car12",
          "Car13"
        );
      } else if (hotspot_label == "Train") {
        mapref.push(hotspot_label, "Train1", "Train2");
      } else {
        mapref.push(hotspot_label);
      }
    }
  });

  const removeitem = [
    "ESGTree",
    "Windmill",
    "TMTMovieposter",
    "Solarpanel",
    "Yellowbus",
    "Cars",
    "Train",
  ];

  for (let sector in completemap) {
    completemap[sector].forEach((hotspot) => {
      if (removeitem.includes(hotspot)) {
        const index = completemap[sector].indexOf(hotspot);
        completemap[sector].splice(index, 1);
      }
    });
  }
}

function calculateDelay(data) {
  // Set MEDIA_STATUS
  for (let media_type in MEDIA_STATUS) {
    MEDIA_STATUS[media_type] = data[media_type].length > 0;
  }

  // Set ANIMATION_DELAY
  let delay = 0;
  for (let media_type in MEDIA_STATUS) {
    if (MEDIA_STATUS[media_type]) {
      ANIMATION_DELAY[media_type] = delay;
      delay += MEDIA_ANIMATION_DURATION_REQ[media_type];
    }
  }
}

const Mural = () => {
  const [activeGroup, setActiveGroup] = useState({ prev: null, current: null });
  const [activeHotspot, setActiveHotspot] = useState({
    prev: null,
    current: null,
  });
  const [dataMap, setDataMap] = useState({});
  const [Icons, setIcons] = useState({});
  const [sectorList, setSectorList] = useState([]);
  const [serviceList, setServiceList] = useState([]);
  const [sectors, Setsectors] = useState([]); //icons
  const [services, Setservices] = useState([]); //icons

  //Show hide content state
  const [modalbtn, setModalbtn] = useState(false);
  const [infoModal, setInfoModal] = useState(null);
  const [animation, Setanimation] = useState(false);

  /**
   * @type{React.RefObject<HTMLDivElement>}
   */
  const backdropRef = createRef(null);
  let buttons = createRef(null);

  // Fetch Data
  useEffect(() => {
    const fetchData = async () => {
      let jwt = localStorage.getItem("mural_jwt");
      const exp = jwt
        ? parseInt(JSON.parse(base64.decode(jwt.split(".")[1])).exp)
        : 0;

      if (!(parseInt((Date.now() / 1000).toFixed(0)) < exp)) {
        const fd = new FormData();
        fd.append("user", USERNAME);
        fd.append("pass", PASSWORD);

        // const authRes = await fetch(
        //   "https://kpmg.experientialetc.com/jwt/jwtAuthorize.php",
        //   {
        //     method: "POST",
        //     body: fd,
        //   }
        // );
        // jwt = (await authRes.json()).key;
        // localStorage.setItem("mural_jwt", jwt);

        const authRes = await fetch(
          "http://10.188.7.135/jwt/jwtAuthorize.php",
          {
            method: "POST",
            body: fd,
          }
        )
          .then(async function (sucess) {
            jwt = (await sucess.json()).key;
            localStorage.setItem("mural_jwt", jwt);
          })
          .catch(function (err) {
            console.log(err, "Authorization failed");
          });
      }

      //Authorization ended here //////////////////////////////////////////

      // const res = await fetch(
      //   "https://kpmg.experientialetc.com/api/tabletop/fetchMuralHotspotApi.php",
      //   {
      //     method: "POST",
      //     headers: {
      //       Authorization: "Bearer " + jwt,
      //     },
      //   }
      // );
      // const json = await res.json();
      // /**
      //  * @type {{
      //  * content_type: string,
      //  * content_url: string,
      //  * hotspot_label: string
      //  * }[]}
      //  */
      // const muralContent = json.mural_hotspot;

      const res = await fetch(
        "http://10.188.7.135/api/tabletop/fetchMuralHotspotApi.php",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + jwt,
          },
        }
      )
        .then(async function (sucess) {
          const json = await sucess.json();
          /**
           * @type {{
           * content_type: string,
           * content_url: string,
           * hotspot_label: string
           * }[]}
           */
          const muralContent = json.mural_hotspot;
          completemapgenerator(muralContent);
          setDataMap(dataMapGenerator(muralContent));
        })
        .catch(function (err) {
          console.log(err, "mural content data not fetched");
        });

      //Mural content fetching ended here//////////////////////////////

      // const Iconres = await fetch(
      //   "https://kpmg.experientialetc.com/api/tabletop/fetchResourceIconApi.php",
      //   {
      //     method: "POST",
      //     headers: {
      //       Authorization: "Bearer " + jwt,
      //     },
      //   }
      // );

      // const json2 = await Iconres.json();
      // setIcons(json2.response);

      //Icon fetching here/////////////////////////////////
      const Iconres = await fetch(
        "http://10.188.7.135/api/tabletop/fetchResourceIconApi.php",
        {
          method: "POST",
          headers: {
            Authorization: "Bearer " + jwt,
          },
        }
      )
        .then(async function (sucess) {
          const json2 = await sucess.json();
          setIcons(json2.response);
        })
        .catch(function (err) {
          console.log(err, "Icon fetching failed");
        });

      //Icon fetching ended here/////////////////////////////////
    };

    fetchData();
  }, []);

  //Icon handler
  useEffect(() => {
    Setsectors([]);
    Setservices([]);
    sectorIcon = [];
    serviceIcon = [];
    Object.entries(Icons).map(function (eachIcon) {
      if (eachIcon[1].resource_type == "sector") {
        sectorIcon.push(eachIcon[1]);
      } else if (eachIcon[1].resource_type == "service") {
        serviceIcon.push(eachIcon[1]);
      }
    });
    Setsectors(sectorIcon);
    Setservices(serviceIcon);
  }, [Icons]);

  // Group Handler
  useEffect(() => {
    if (activeGroup.current === null) return;

    if (activeGroup.current && backdropRef)
      backdropRef.current.style.zIndex = 0;

    const currentGroup = completemap[activeGroup.current];
    if (currentGroup) {
      currentGroup.forEach((h) => {
        document.getElementById(h).style.zIndex = 1;
      });
    }

    if (activeGroup.current == "Infrastructure & Real Estate") {
      document.getElementById("boat").style.zIndex = 1;
    } else if (activeGroup.current == "Industrial Manufacturing & Auto") {
      document.getElementById("fire1").style.zIndex = 1;
      document.getElementById("fire2").style.zIndex = 1;
    }

    if (activeGroup.current === activeGroup.prev) return;

    const prevGroup = completemap[activeGroup.prev];
    if (prevGroup) {
      prevGroup.forEach((h) => {
        document.getElementById(h).style.zIndex = 0;
      });
    }

    if (activeGroup.prev == "Infrastructure & Real Estate") {
      document.getElementById("boat").style.zIndex = 0;
    } else if (activeGroup.prev == "Industrial Manufacturing & Auto") {
      document.getElementById("fire1").style.zIndex = 0;
      document.getElementById("fire2").style.zIndex = 0;
    }
  }, [activeGroup]);

  // Hotspot Handler
  useEffect(() => {
    if (activeHotspot.current === null) return;

    if (activeGroup.current) {
      const currentGroup = completemap[activeGroup.current];
      currentGroup.forEach((h) => {
        if (h === activeHotspot.current) return;
        document.getElementById(h).style.zIndex = 0;
      });

      if (
        activeHotspot.current !== "IREdock" &&
        activeGroup.current == "Infrastructure & Real Estate"
      ) {
        document.getElementById("boat").style.zIndex = 0;
      } else if (
        activeHotspot.current !== "Coalfactory" &&
        activeGroup.current == "Industrial Manufacturing & Auto"
      ) {
        document.getElementById("fire1").style.zIndex = 0;
        document.getElementById("fire2").style.zIndex = 0;
      }

      if (!dataMap[activeHotspot.current]) return;
      mediaRef = dataMap[activeHotspot.current].datacontent[ssname];
      if (!mediaRef) return;
      calculateDelay(mediaRef);
      setModalbtn(true);
    } else {
      document.getElementById(activeHotspot.current).style.zIndex = 1;
      backdropRef.current.style.zIndex = 0;
      if (activeHotspot.current == "IREdock") {
        document.getElementById("boat").style.zIndex = 1;
      } else if (activeHotspot.current == "Coalfactory") {
        document.getElementById("fire1").style.zIndex = 1;
        document.getElementById("fire2").style.zIndex = 1;
      }

      if (!dataMap[activeHotspot.current]) return;
      setSectorList(dataMap[activeHotspot.current].sector);
      setServiceList(dataMap[activeHotspot.current].service);
    }
  }, [activeHotspot]);

  useEffect(() => {
    if (!modalbtn && mediaRef) setModalbtn(true);
  }, [modalbtn]);

  useEffect(() => {
    setModalbtn(false);
  }, []);

  function enablegroup(event) {
    if (activeHotspot.current) {
      document.getElementById(activeHotspot.current).style.zIndex = 0;
      setSectorList([]);
      setServiceList([]);
      setModalbtn(false);
      mediaRef = null;
      if (activeHotspot.current == "Coalfactory") {
        document.getElementById("fire1").style.zIndex = 0;
        document.getElementById("fire2").style.zIndex = 0;
      }
      if (activeHotspot.current == "IREdock") {
        document.getElementById("boat").style.zIndex = 0;
      }
    }

    ssname = event.target.id;

    setActiveGroup((state) => ({
      prev: state.current,
      current: event.target.id,
    }));
  }

  function individualitem(event) {
    hotspot_label = event.target.id;

    if (activeHotspot.current === hotspot_label) return;

    setActiveHotspot((state) => ({
      prev: state.current,
      current: event.target.id,
    }));

    //#region <Menu Positioning>

    let itemval = document.getElementById(event.target.id);
    let itemin = itemval.getBoundingClientRect();
    itemTop = itemin.top;
    itemLeft = itemin.left;
    let button = buttons.current;

    button.style.top = `${itemin.top.toFixed()}px`;
    button.style.left = `${itemin.left + 550}px`;
    if (activeGroup.current) {
      button.style.left = `${itemin.left + 250}px`;
    }
    let Sectorlist = document.getElementById("Sectorlist");
    Sectorlist.style.top = `${itemin.top.toFixed()}px`;
    Sectorlist.style.left = `${itemin.left.toFixed() - 300}px`;

    let Servicelist = document.getElementById("Servicelist");
    Servicelist.style.top = `${itemin.top.toFixed()}px`;
    Servicelist.style.left = `${itemin.left + 150}px`;

    if (itemin.left == 0 || itemin.top == 496.794677734375) {
      button.style.top = `${500}px`;
      button.style.left = `${850}px`;
      Sectorlist.style.top = `${500}px`;
      Sectorlist.style.left = `${500}px`;
      Servicelist.style.top = `${500}px`;
      Servicelist.style.left = `${900}px`;
    }

    if (
      Math.abs(itemin.top - 108.00000762939453) < 1 ||
      Math.abs(itemin.left - 1008.0000610351562) < 1
    ) {
      Sectorlist.style.top = `${300}px`;
      Servicelist.style.top = `${300}px`;
      button.style.top = `${300}px`;
      button.style.left = `${1260}px`;
    }

    if (itemin.top == 0) {
      Sectorlist.style.top = `${60}px`;
      Servicelist.style.top = `${60}px`;
      button.style.top = `${60}px`;
    }

    if (itemin.left == 288) {
      Sectorlist.style.left = `${300}px`;
      Servicelist.style.left = `${645}px`;
      button.style.left = `${960}px`;
    }

    if (
      Math.abs(itemin.top - 97.1964340209961) < 1 &&
      Math.abs(itemin.left - 3663.357421875) < 1
    ) {
      Servicelist.style.left = `${4130}px`;
      Sectorlist.style.left = `${3785}px`;
      button.style.left = `${4445}px`;
    }

    if (
      Math.abs(itemin.top - 615.5982666015625) < 1 &&
      Math.abs(itemin.left - 2177.27685546875) < 1
    ) {
      button.style.left = `${2540}px`;
    }

    if (
      Math.abs(itemin.top - 432.0000305175781) < 1 &&
      Math.abs(itemin.left - 2868.473388671875) < 1
    ) {
      button.style.left = `${3252}px`;
    }

    if (
      Math.abs(itemin.top - 529.1964721679688) < 1 &&
      Math.abs(itemin.left - 3398.39306640625) < 1
    ) {
      button.style.left = `${3800}px`;
    }

    if (
      Math.abs(itemin.top - 324) < 1 &&
      Math.abs(itemin.left - 3456.000244140625) < 1
    ) {
      button.style.left = `${3800}px`;
    }
    if (
      Math.abs(itemin.top - 858.5982666015625) < 1 &&
      Math.abs(itemin.left - 4325.75927734375) < 1
    ) {
      button.style.top = `${586}px`;
      button.style.left = `${4822}px`;
    }

    if (
      Math.abs(itemin.top - 853.1964721679688) < 1 &&
      Math.abs(itemin.left - 5270.39306640625) < 1
    ) {
      button.style.top = `${586}px`;
      button.style.left = `${5222}px`;
      Servicelist.style.left = `${4900}px`;
      Sectorlist.style.left = `${4600}px`;
    }

    if (
      Math.abs(itemin.top - 961.1964721679688) < 1 &&
      Math.abs(itemin.left - 2649.598388671875) < 1
    ) {
      button.style.top = `${650}px`;
    }

    if (
      Math.abs(itemin.top - 831.5982666015625) < 1 &&
      Math.abs(itemin.left - 2995.196533203125) < 1
    ) {
      button.style.top = `${600}px`;
    }

    if (
      Math.abs(itemin.top - 205.19644165039062) < 1 &&
      Math.abs(itemin.left - 4780.794921875) < 1
    ) {
      button.style.left = `${5242}px`;
    }

    if (
      Math.abs(itemin.top - 313.1964416503906) < 1 &&
      Math.abs(itemin.left - 4953.5986328125) < 1
    ) {
      button.style.left = `${4320}px`;
    }

    if (
      Math.abs(itemin.top - 183.5982208251953) < 1 &&
      Math.abs(itemin.left - 1900.794677734375) < 1
    ) {
      button.style.left = `${2260}px`;
    }

    if (
      Math.abs(itemin.top - 405.0000305175781) < 1 &&
      Math.abs(itemin.left - 3830.39306640625) < 1
    ) {
      button.style.left = `${4160}px`;
    }

    if (
      Math.abs(itemin.top - 388.7946472167969) < 1 &&
      Math.abs(itemin.left - 2476.794677734375) < 1
    ) {
      button.style.left = `${2800}px`;
    }

    if (
      Math.abs(itemin.top - 842.3928833007812) < 1 &&
      Math.abs(itemin.left - 3283.196533203125) < 1
    ) {
      button.style.top = `${680}px`;
      button.style.left = `${3570}px`;
    }

    if (
      Math.abs(itemin.top - 162) < 1 &&
      Math.abs(itemin.left - 1900.794677734375) < 1
    ) {
      button.style.left = `${2180}px`;
    }

    if (
      Math.abs(itemin.top - 291.5982360839844) < 1 &&
      Math.abs(itemin.left - 2131.196533203125) < 1
    ) {
      button.style.left = `${2400}px`;
    }

    if (
      Math.abs(itemin.top - 237.5982208251953) < 1 &&
      Math.abs(itemin.left - 2188.794677734375) < 1
    ) {
      button.style.left = `${2450}px`;
    }

    if (
      Math.abs(itemin.top - 345.5982360839844) < 1 &&
      Math.abs(itemin.left - 2246.39306640625) < 1
    ) {
      button.style.left = `${2480}px`;
    }

    if (
      Math.abs(itemin.top - 345.5982360839844) < 1 &&
      Math.abs(itemin.left - 2361.598388671875) < 1
    ) {
      button.style.left = `${2626}px`;
    }

    if (
      Math.abs(itemin.top - 529.1964721679688) < 1 &&
      Math.abs(itemin.left - 2592) < 1
    ) {
      button.style.left = `${2860}px`;
    }

    if (
      Math.abs(itemin.top - 712.794677734375) < 1 &&
      Math.abs(itemin.left - 2995.196533203125) < 1
    ) {
      button.style.left = `${3300}px`;
    }

    if (
      Math.abs(itemin.top - 345.5982360839844) < 1 &&
      Math.abs(itemin.left - 3110.39306640625) < 1
    ) {
      button.style.left = `${3400}px`;
    }

    if (
      Math.abs(itemin.top - 270) < 1 &&
      Math.abs(itemin.left - 3571.196533203125) < 1
    ) {
      button.style.left = `${3850}px`;
    }

    if (
      Math.abs(itemin.top - 464.39288330078125) < 1 &&
      Math.abs(itemin.left - 3456.000244140625) < 1
    ) {
      button.style.left = `${3750}px`;
    }

    if (
      Math.abs(itemin.top - 113.39286041259766) < 1 &&
      Math.abs(itemin.left - 4118.39306640625) < 1
    ) {
      button.style.left = `${4422}px`;
    }

    if (
      Math.abs(itemin.top - 194.3928680419922) < 1 &&
      Math.abs(itemin.left - 4262.39306640625) < 1
    ) {
      button.style.left = `${4550}px`;
    }

    if (
      Math.abs(itemin.top - 637.1964721679688) < 1 &&
      Math.abs(itemin.left - 4204.794921875) < 1
    ) {
      button.style.left = `${4480}px`;
    }

    if (
      Math.abs(itemin.top - 810.0000610351562) < 1 &&
      Math.abs(itemin.left - 3513.598388671875) < 1
    ) {
      button.style.top = `${625}px`;
      button.style.left = `${3801}px`;
    }

    if (
      Math.abs(itemin.top - 172.79464721679688) < 1 &&
      Math.abs(itemin.left - 3582.71435546875) < 1
    ) {
      button.style.left = `${3845}px`;
    }

    if (
      Math.abs(itemin.top - 356.39288330078125) < 1 &&
      Math.abs(itemin.left - 3467.51806640625) < 1
    ) {
      button.style.left = `${3680}px`;
    }

    if (
      Math.abs(itemin.top - 734.3928833007812) < 1 &&
      Math.abs(itemin.left - 3283.196533203125) < 1
    ) {
      button.style.top = `${625}px`;
      button.style.left = `${3500}px`;
    }

    if (
      Math.abs(itemin.top - 734.3928833007812) < 1 &&
      Math.abs(itemin.left - 3335.035888671875) < 1
    ) {
      button.style.top = `${630}px`;
      button.style.left = `${3565}px`;
    }

    setTimeout(() => {
      const rect = Servicelist.getBoundingClientRect();
      if (rect.width > 0) {
        button.style.left = `${rect.left + rect.width + 50}px`;
      }
    }, 100);
    //#endregion
  }

  function showmainbtn(event) {
    ssname = event.target.id;
    mediaRef = dataMap[activeHotspot.current].datacontent[event.target.id];
    calculateDelay(mediaRef);

    if (modalbtn) setModalbtn(false);
    else setModalbtn(true);
  }

  function videohandle(event) {
    event.target.pause();
  }

  function reset() {
    const hostspots = document.getElementsByClassName("hotspot");
    for (let i = 0; i < hostspots.length; i++) {
      hostspots.item(i).style.zIndex = 0;
    }
    backdropRef.current.style.zIndex = -1;
    setActiveGroup((state) => ({
      prev: state.current,
      current: null,
    }));
    setActiveHotspot((state) => ({
      prev: state.current,
      current: null,
    }));

    setSectorList([]);
    setServiceList([]);

    hotspot_label = "";
    ssname = "";
    mediaRef = null;

    setModalbtn(false);

    MEDIA_STATUS.text = false;
    MEDIA_STATUS.image = false;
    MEDIA_STATUS.pdf = false;
    MEDIA_STATUS.video = false;

    ANIMATION_DELAY.text = 0;
    ANIMATION_DELAY.image = 0;
    ANIMATION_DELAY.pdf = 0;
    ANIMATION_DELAY.video = 0;
  }

  const carouselBackdropClickHandler = () => {
    setInfoModal(null);
    document.getElementById("video").play();
  };

  return (
    <div className="App">
      <div id="Parent">
        {/* Hotspots */}
        <>
          <img className="bg-image" src={Ground} />
          <img
            className="hotspot airport-image"
            id="Airport"
            src={Airport}
            onClick={individualitem}
          />
          <img
            className="hotspot building-image"
            id="Trianglebuilding"
            src={Building}
            onClick={individualitem}
          />
          <img
            className="hotspot building3-image"
            id="Govermentbuilding"
            src={Building3}
            onClick={individualitem}
          />
          <img
            className="hotspot IREbuilding-image"
            id="IREbuilding"
            src={IREbuildings}
            onClick={individualitem}
          />
          <img
            className="hotspot TMTbuilding-image"
            id="TMTbuilding"
            src={TMTbuilding}
            onClick={individualitem}
          />
          <img
            className="hotspot CMhospital-image"
            id="CMhospital"
            src={CMhospital}
            onClick={individualitem}
          />
          <img
            className="hotspot CMmall-image"
            id="CMmall"
            src={CMmall}
            onClick={individualitem}
          />
          <img
            className="hotspot Twintower-image"
            id="Twintower"
            src={Twintower}
            onClick={individualitem}
          />
          <img
            className="hotspot EDTech-image"
            id="EDTech"
            src={EDTech}
            onClick={individualitem}
          />
          <img
            className="hotspot building2-image"
            id="Whitebluebuilding"
            src={Building2}
            onClick={individualitem}
          />
          <img
            className="hotspot ESGelectric-image"
            id="ESGelectric"
            src={ESGelectric}
            onClick={individualitem}
          />
          <img
            className="hotspot Cinema-image"
            id="Cinema"
            src={Cinema}
            onClick={individualitem}
          />
          <img
            className="hotspot FSbank-image"
            id="FSbank"
            src={FSbank}
            onClick={individualitem}
          />
          <img
            className="hotspot SLBCcoal-image"
            id="SLBCcoal"
            src={SLBCcoal}
            // onClick={individualitem}
          />
          <img
            src={Industry}
            className="hotspot Industry-image"
            id="Industry"
            onClick={individualitem}
          />

          <img
            src={Coalfactory}
            id="Coalfactory"
            onClick={individualitem}
            className="hotspot Coalfactory-image"
          />
          <video
            className="fire1 hotspot"
            id="fire1"
            src={fire}
            autoPlay
            loop
            muted
          />
          <video
            className="fire2 hotspot"
            id="fire2"
            src={fire}
            autoPlay
            loop
            muted
          />

          <img
            src={Coal}
            className="hotspot Coal-image"
            id="Coal"
            onClick={individualitem}
          />
          <img
            src={Train1}
            className="hotspot Train1-image"
            id="Train1"
            onClick={individualitem}
          />
          <img
            src={Train2}
            className="hotspot Train2-image"
            id="Train2"
            onClick={individualitem}
          />
          <div>
            <img
              className="hotspot IREdock-image"
              id="IREdock"
              src={IREdock}
              onClick={individualitem}
            />
            <video
              className="boat hotspot"
              id="boat"
              src={Boat}
              autoPlay
              loop
              muted
            />
          </div>

          <img
            className="hotspot SLBCbuilding-image"
            id="SLBCbuilding"
            src={SLBCbuilding}
            onClick={individualitem}
          />
          <img
            className="hotspot SLRAgovernment-image"
            id="SLRAgovernment"
            src={SLRAgovernment}
            onClick={individualitem}
          />
          <img
            className="hotspot IMAbuilding-image"
            id="IMAbuilding"
            src={IMAbuilding}
            onClick={individualitem}
          />
          <video
            className="hotspot TMTDrone-image"
            id="TMTDrone"
            src={TMTDrone}
            onClick={individualitem}
            autoPlay
            loop
            muted
          />
          <img
            className="hotspot TMTMovieposter-image"
            id="TMTMovieposter1"
            src={TMTMovieposter2}
            onClick={individualitem}
          />
          <img
            className="hotspot TMTMovieposter-image2"
            id="TMTMovieposter2"
            src={TMTMovieposter}
            onClick={individualitem}
          />
          <img
            className="hotspot TMTStadium-image"
            id="TMTStadium"
            src={TMTStadium}
            onClick={individualitem}
          />
          <img
            className="hotspot TMTMovieposter-image3"
            id="TMTMovieposter3"
            src={TMTMovieposter3}
            onClick={individualitem}
          />
          <img
            className="hotspot Mobileqr-image"
            id="Mobileqr"
            src={Mobileqr}
            onClick={individualitem}
          />
          <img
            className="hotspot ESGtrees1"
            id="ESGTree1"
            src={ESGtrees1}
            onClick={individualitem}
          />
          <img
            className="hotspot ESGTree2"
            id="ESGTree2"
            src={ESGTree2}
            onClick={individualitem}
          />
          <img
            className="hotspot ESGtree3"
            id="ESGTree3"
            src={ESGtree3}
            onClick={individualitem}
          />
          <img
            className="hotspot SLRAhole-image"
            id="SLRAhole"
            src={SLRAhole}
            onClick={individualitem}
          />
          <img
            className="hotspot Dampond-image"
            id="Dampond"
            src={Dampond}
            onClick={individualitem}
          />
          <img
            className="hotspot Lamp-image"
            id="Lamp"
            src={Lamp}
            onClick={individualitem}
          />
          <img
            className="hotspot Mantralya-image"
            id="Mantralya"
            src={Mantralya}
            onClick={individualitem}
          />
          <img
            className="hotspot Cafe-image"
            id="Cafe"
            src={Cafe}
            onClick={individualitem}
          />
          <video
            className="hotspot Windmill-image"
            id="Windmill1"
            src={Windmill}
            onClick={individualitem}
            autoPlay
            loop
            muted
          />
          <video
            className="hotspot Windmill-image2"
            id="Windmill2"
            src={Windmill}
            onClick={individualitem}
            autoPlay
            loop
            muted
          />
          <video
            className="hotspot Windmill-image3"
            id="Windmill3"
            src={Windmill}
            onClick={individualitem}
            autoPlay
            loop
            muted
          />
          <video
            className="hotspot Windmill-image4"
            id="Windmill4"
            src={Windmill}
            onClick={individualitem}
            autoPlay
            loop
            muted
          />
          <img
            className="hotspot Streetlightleft-image"
            id="Solarpanel1"
            src={Streetlightleft}
            onClick={individualitem}
          />
          <img
            className="hotspot Streetlightright-image"
            id="Solarpanel2"
            src={Streetlightright}
            onClick={individualitem}
          />
          <img
            className="hotspot Streetlightleft-image2"
            id="Solarpanel3"
            src={Streetlightleft}
            onClick={individualitem}
          />
          <img
            className="hotspot Streetlightright-image2"
            id="Solarpanel4"
            src={Streetlightright}
            onClick={individualitem}
          />
          <img
            className="hotspot Yellowbus-image"
            id="Yellowbus1"
            src={Yellowbus}
            onClick={individualitem}
          />
          <img
            className="hotspot Yellowbus-image2"
            id="Yellowbus2"
            src={Yellowbus}
            onClick={individualitem}
          />
          <img
            className="hotspot Yellowbus-image3"
            id="Yellowbus3"
            src={Yellowbus}
            onClick={individualitem}
          />
          <img
            className="hotspot yellowcargoing-image"
            id="Car1"
            src={yellowcargoing}
            onClick={individualitem}
          />
          <img
            className="hotspot redcarcoming-image"
            id="Car2"
            src={redcarcoming}
            onClick={individualitem}
          />
          <img
            className="hotspot greycarleft-image"
            id="Car3"
            src={greycarleft}
            onClick={individualitem}
          />
          <img
            className="hotspot greycarleft-image2"
            id="Car4"
            src={greycarleft}
            onClick={individualitem}
          />
          <img
            className="hotspot greycarleft-image3"
            id="Car5"
            src={greycarleft}
            onClick={individualitem}
          />
          <img
            className="hotspot greycarleft-image4"
            id="Car6"
            src={greycarleft}
            onClick={individualitem}
          />
          <img
            className="hotspot greycarleft-image5"
            id="Car7"
            src={greycarleft}
            onClick={individualitem}
          />
          <img
            className="hotspot whitecar-image"
            id="Car8"
            src={whitecar}
            onClick={individualitem}
          />
          <img
            className="hotspot whitecar-image2"
            id="Car9"
            src={whitecar}
            onClick={individualitem}
          />
          <img
            className="hotspot darkgreycar-image"
            id="Car10"
            src={darkgreycar}
            onClick={individualitem}
          />
          <img
            className="hotspot greencar-image"
            id="Car11"
            src={greencar}
            onClick={individualitem}
          />
          <img
            className="hotspot imacars-image"
            id="imacars"
            src={imacars}
            onClick={individualitem}
          />
          <img
            className="hotspot yellowcab-image"
            id="Car12"
            src={yellowcab}
            onClick={individualitem}
          />
          <img
            className="hotspot yellowcab-image2"
            id="Car13"
            src={yellowcab}
            onClick={individualitem}
          />
          <img
            className="hotspot streetlight1-image"
            id="streetlight1"
            src={streetlight1}
            // onClick={individualitem}
          />
          <img
            className="hotspot streetlight1-image2"
            id="streetlight1"
            src={streetlight1}
            // onClick={individualitem}
          />
          <img
            className="hotspot streetlight1-image3"
            id="streetlight1"
            src={streetlight1}
            // onClick={individualitem}
          />
          <img
            className="hotspot streetlight2-image"
            id="streetlight2"
            src={streetlight2}
            // onClick={individualitem}
          />
          <img
            className="hotspot streetlight2-image2"
            id="streetlight2"
            src={streetlight2}
            // onClick={individualitem}
          />
          <img
            className="hotspot streetlight2-image3"
            id="streetlight2"
            src={streetlight2}
            // onClick={individualitem}
          />
          <img
            className="hotspot streetlight2-image4"
            id="streetlight2"
            src={streetlight2}
            // onClick={individualitem}
          />
          <img
            className="hotspot streetlight2-image5"
            id="streetlight2"
            src={streetlight2}
            // onClick={individualitem}
          />
        </>

        {/* Sectors List */}
        <div id="primary">
          {sectors.map(function (eachsecIcon) {
            return (
              <button
                className="primary-btn"
                onClick={enablegroup}
                key={eachsecIcon.resource_name}
              >
                <img
                  src={eachsecIcon.icon_url}
                  id={eachsecIcon.resource_name}
                  className="primary-icon"
                />
                <img
                  src={eachsecIcon.label_url}
                  id={eachsecIcon.resource_name}
                  className="primary-text"
                />
              </button>
            );
          })}
        </div>

        {/* Services List */}
        <div id="service">
          <button
            className="service-btnmain"
            onClick={() => Setanimation(!animation)}
          >
            <img src={Services} className="service-btnimage" id="service1" />
          </button>
          <div id={animation ? "fixserviceanimation" : "serviceanimation"}>
            {services.map(function (eachserIcon) {
              return (
                <button
                  className="service-btn"
                  onClick={enablegroup}
                  key={eachserIcon.resource_name}
                >
                  <img
                    src={eachserIcon.label_url}
                    id={eachserIcon.resource_name}
                  />
                </button>
              );
            })}
          </div>
        </div>

        <div className="modalbtns" ref={buttons}>
          {modalbtn && (
            <>
              <div
                className="flip-box-inner"
                style={{ animationDelay: ANIMATION_DELAY.text + "s" }}
              >
                <button
                  className="modalbtn"
                  onClick={() =>
                    setInfoModal({
                      type: "text",
                      urls: mediaRef["text"],
                    })
                  }
                  hidden={mediaRef && mediaRef["text"].length === 0}
                >
                  <div id="btnicon-container">
                    <img src={pptIcon} className="btnicon" />
                  </div>
                </button>
              </div>
              <div
                className="flip-box-inner2"
                style={{ animationDelay: ANIMATION_DELAY.image + "s" }}
              >
                <button
                  className="modalbtn"
                  onClick={() =>
                    setInfoModal({
                      type: "image",
                      urls: mediaRef["image"],
                    })
                  }
                  hidden={mediaRef && mediaRef["image"].length === 0}
                >
                  <div id="btnicon-container">
                    <img src={imageIcon} className="btnicon" />
                  </div>
                </button>
              </div>
              <div
                className="flip-box-inner3"
                style={{ animationDelay: ANIMATION_DELAY.pdf + "s" }}
              >
                <button
                  className="modalbtn"
                  onClick={() =>
                    setInfoModal({
                      type: "pdf",
                      urls: mediaRef["pdf"],
                    })
                  }
                  hidden={mediaRef && mediaRef["pdf"].length === 0}
                >
                  <div id="btnicon-container">
                    <img src={pdfIcon} className="btnicon" />
                  </div>
                </button>
              </div>
              <div
                className="flip-box-inner4"
                style={{ animationDelay: ANIMATION_DELAY.video + "s" }}
              >
                <button
                  className="modalbtn"
                  onClick={() =>
                    setInfoModal({
                      type: "video",
                      urls: mediaRef["video"],
                    })
                  }
                  hidden={mediaRef && mediaRef["video"].length === 0}
                >
                  <div id="videoicon-container">
                    <video
                      className="videoicon"
                      id="video"
                      onClick={videohandle}
                      src={mediaRef["video"][0]}
                      autoPlay
                      loop
                      muted
                    />
                  </div>
                </button>
              </div>
            </>
          )}
        </div>

        {/* Sectors Menu */}
        <div
          style={sectorList.length ? { display: "block" } : { display: "none" }}
        >
          <div id="Sectorlist">
            {sectorList.map((sectorName) => {
              return (
                <button
                  className="Highlightbtn"
                  onClick={showmainbtn}
                  key={sectorName}
                  id={sectorName}
                >
                  {sectorName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Menu */}
        <div
          style={
            serviceList.length ? { display: "block" } : { display: "none" }
          }
        >
          <div id="Servicelist">
            {serviceList.map((serviceName) => {
              return (
                <button
                  className="Highlightbtn"
                  onClick={showmainbtn}
                  key={serviceName}
                  id={serviceName}
                >
                  {serviceName}
                </button>
              );
            })}
          </div>
        </div>

        {/* Carousel */}
        {infoModal && (
          <Carousel
            onBackDropClick={carouselBackdropClickHandler}
            type={infoModal.type}
            urls={infoModal.urls}
            itemTop={itemTop}
            itemLeft={itemLeft}
          />
        )}

        <Navigation />
        <div id="backdrop" ref={backdropRef} onClick={reset}></div>
      </div>
    </div>
  );
};

export default Mural;
