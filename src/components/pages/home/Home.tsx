import { useCallback, useEffect, useMemo } from "react";
import useHttp from "../../../hooks/use-http";
import useHookAfterCertainTime from "../../../hooks/use-hook-certain-time";
import createBusRouteAdapter from "../../../adapters/busRoute";
import HorizontalCard from "../../UI/horizontalCard/HorizontalCard";
import { useDispatch, useSelector } from "react-redux";
import { API_MOCKS } from "../../../services/endpoints";
import { routesFollowedActions } from "../../../store/busRoutesFollowed";
import { busRouteResponseTypes } from "../../../types/response/busRouteResponse";
import Button from "../../UI/button/Button";
import LoaderDotsTwo from "../../UI/loaderDotsTwo/LoaderDotsTwo";

import style from "./Home.module.scss";

interface busRoutesTypes {
  allRoutes: busRouteResponseTypes[];
}
interface globalState {
  busRoutes: busRoutesTypes;
}

const Home = () => {
  const dispatch = useDispatch();
  const allRoutes: any = useSelector<globalState>(
    (state) => state.busRoutes.allRoutes
  );
  const { isLoading, sendRequest } = useHttp();
  const [intervalTimerNumber] = useHookAfterCertainTime({});

  const setResultsRequestOnInit = useCallback(
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

      dispatch(routesFollowedActions.setAllBusRoutes(adapter));
    },
    // eslint-disable-next-line
    [dispatch]
  );

  useEffect(() => {
    const isTrue = false;
    if (isTrue) return;

    sendRequest(
      {
        url: API_MOCKS[0].url,
      },
      setResultsRequestOnInit
    );
  }, [sendRequest, setResultsRequestOnInit]);

  const handleOnClickRefresh = () => {
    const setResultsRequestOnRefresh = (data: any) => {
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

      dispatch(routesFollowedActions.setAllBusRoutes(adapter));
    };

    sendRequest(
      {
        url: API_MOCKS[2].url,
      },
      setResultsRequestOnRefresh
    );
  };

  const sortBusRouteByTime = () => {
    const copyBusRoute = [...allRoutes];

    const newBusRoute = copyBusRoute?.sort((a, b) => {
      return a.timeInMinutes - b.timeInMinutes;
    });
    return newBusRoute;
  };

  const sortedBusRouteByTime = sortBusRouteByTime();
  const sortedBusRouteByTimeMemoize = useMemo(
    () => sortedBusRouteByTime,
    [sortedBusRouteByTime]
  );

  return (
    <div data-testid="parent-element-home" className={style.home}>
      <span className={style["span-number"]}> {intervalTimerNumber} </span>
      <span className={style["span-btn"]}>
        <Button
          label="Refresh"
          btnType="circle"
          icon={true}
          iconRotation={true}
          iconType="refresh"
          onClick={handleOnClickRefresh}
        />
      </span>
      {sortedBusRouteByTimeMemoize?.map((element: busRouteResponseTypes) => (
        <HorizontalCard
          id={element.id}
          key={element.id}
          destination={element.destination}
          line={element.line}
          status={element.status}
          timeInMinutes={element.timeInMinutes}
          timeInSeconds={element.timeInSeconds}
          followed={element.followed}
        />
      ))}

      {isLoading && <LoaderDotsTwo />}
    </div>
  );
};

export default Home;
