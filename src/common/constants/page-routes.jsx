import Pages from "../../pages";
import History from "../../pages/history-highlights";
import Mural from "../../pages/mural-page";
import Service from "../../pages/service-page";
import TempHistory from "../../pages/temp-history";
import { componentRoutes } from "./component-routes";

export const pageRoutes = [
  {
    path: componentRoutes.root,
    component: Pages,
  },
  {
    path: componentRoutes.history,
    component: History,
  },
  {
    path: componentRoutes.mural,
    component: Mural,
  },
  {
    path: componentRoutes.services,
    component: Service,
  },
];
