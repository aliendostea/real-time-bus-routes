import { findFollowed } from "../utilities/utilitiesFunctions";

const createBusRouteAdapter = (
  route: {
    routeId: string;
    line: string;
    "text-ca": string;
    "t-in-s": number;
    destination: string;
    "t-in-min": number;
  },
  allRoutes?: any
) => {
  return {
    id: route.routeId,
    line: route.line,
    status: route["text-ca"],
    timeInSeconds: route["t-in-s"],
    destination: route.destination,
    timeInMinutes: route["t-in-min"],
    followed: findFollowed(route.routeId, allRoutes),
  };
};

export default createBusRouteAdapter;
