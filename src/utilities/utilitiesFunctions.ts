import { busRouteResponseTypes } from "../types/response/busRouteResponse";

export const findFollowed = (
  id: string,
  allRoutes: busRouteResponseTypes[]
) => {
  if (allRoutes?.length === 0 || allRoutes === undefined) return false;

  const [item] = allRoutes?.filter(
    (element: busRouteResponseTypes) => element.id === id
  );

  return item.followed;
};
