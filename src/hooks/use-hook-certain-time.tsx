import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import createBusRouteAdapter from "../adapters/busRoute";
import { API_MOCKS } from "../services/endpoints";
import { routesFollowedActions } from "../store/busRoutesFollowed";
import { busRouteResponseTypes } from "../types/response/busRouteResponse";
import useHttp from "./use-http";

interface busRoutesTypes {
  allRoutes: busRouteResponseTypes[];
}
interface globalState {
  busRoutes: busRoutesTypes;
}

const useHookAfterCertainTime = ({
  busRoute,
  setBusRoute,
  intervalMaximumNumber = 10,
}: {
  busRoute?: busRouteResponseTypes[];
  setBusRoute?: (props: busRouteResponseTypes[]) => void;
  intervalMaximumNumber?: number;
}) => {
  const dispatch = useDispatch();
  const allRoutes: any = useSelector<globalState>(
    (state) => state.busRoutes.allRoutes
  );
  const [intervalTimerNumber, setNumber] = useState<number>(0);
  const { sendRequest } = useHttp();

  const setNewResultsRequest = useCallback(
    (data: any) => {
      let adapter;
      if (process.env.REACT_APP_DEV_LOCAL !== "true") {
        adapter = data?.data?.ibus.map((element: any) =>
          createBusRouteAdapter(element, allRoutes)
        );
      } else {
        adapter = data?.map((element: any) =>
          createBusRouteAdapter(element, allRoutes)
        );
      }

      const newArrayBusRoute = adapter?.filter(
        (element: busRouteResponseTypes) => {
          return allRoutes?.some(
            (item: busRouteResponseTypes) =>
              (item.id === element.id &&
                item.timeInMinutes !== element.timeInMinutes) ||
              item.id !== element.id
          );
        }
      );

      const arrayFilterBusRoute: busRouteResponseTypes[] = [...allRoutes];

      newArrayBusRoute.forEach((element: busRouteResponseTypes) => {
        const itemIndexToDelete = arrayFilterBusRoute?.findIndex(
          (item: busRouteResponseTypes) => item.id === element.id
        );
        arrayFilterBusRoute.splice(itemIndexToDelete, 1);
      });

      const newBusRoute: busRouteResponseTypes[] | any[] = [
        ...arrayFilterBusRoute,
        ...newArrayBusRoute,
      ];

      dispatch(routesFollowedActions.setAllBusRoutes(newBusRoute));

      setNumber(0);
    },
    [allRoutes, dispatch]
  );

  useEffect(() => {
    const isTrue = false;
    if (isTrue) return;

    if (intervalTimerNumber === intervalMaximumNumber) {
      sendRequest(
        {
          url: API_MOCKS[1].url,
        },
        setNewResultsRequest
      );
    }
  }, [
    intervalTimerNumber,
    intervalMaximumNumber,
    sendRequest,
    setNewResultsRequest,
  ]);

  useEffect(() => {
    const interval = setInterval(() => {
      setNumber((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return [intervalTimerNumber];
};

export default useHookAfterCertainTime;
