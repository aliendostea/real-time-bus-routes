import { API_KEY } from "./apiKey";

interface apiMocksTypes {
  url: string;
}
interface apiMocksTmbIbus {
  url: string;
}
////  http://localhost:3100/bus-routes
export const API_MOCKS: apiMocksTypes[] = [
  { url: `${process.env.REACT_APP_DEV_API_TMB_IBUS}/bus-routes` },
  { url: `${process.env.REACT_APP_DEV_API_TMB_IBUS}/bus-routes-2` },
  { url: `${process.env.REACT_APP_DEV_API_TMB_IBUS}/bus-routes-3` },
];

export const API_TMB_IBUS: apiMocksTmbIbus[] = [
  {
    url: `api_url_here&app_key=${API_KEY}`,
  },
];
