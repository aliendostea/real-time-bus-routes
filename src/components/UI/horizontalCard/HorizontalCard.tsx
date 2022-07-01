import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import LoaderDots from "../loaderDots/LoaderDots";
import MaterialIcon from "../materialIcon/MaterialIcon";
import { motion } from "framer-motion";
import FollowButton from "../followButton/FollowButton";
import { busRouteResponseTypes } from "../../../types/response/busRouteResponse";
import { routesFollowedActions } from "../../../store/busRoutesFollowed";

import style from "./HorizontalCard.module.scss";

const HorizontalCard: React.FC<busRouteResponseTypes> = ({
  id,
  destination,
  line,
  status,
  timeInMinutes,
  followed,
}) => {
  const dispatch = useDispatch();
  const [isMinutesChanged, setIsMinutesChanged] = useState<boolean>(false);
  const [isInitAnimationComplete, setIsInitAnimationComplete] =
    useState<boolean>(false);

  const handleFollowOnClick = (id: string, followed: boolean) => {
    dispatch(routesFollowedActions.setItemFollowed(id));
  };

  const followButtonLabel = followed ? "Followed" : "Follow";

  useEffect(() => {
    setIsMinutesChanged(true);

    const timeOut = setTimeout(() => {
      setIsMinutesChanged(false);
    }, 2500);

    return () => clearTimeout(timeOut);
  }, [timeInMinutes]);

  useEffect(() => {
    const timeOut = setTimeout(() => {
      setIsInitAnimationComplete(true);
    }, 2500);

    return () => clearTimeout(timeOut);
  }, []);

  return (
    <motion.div
      className={
        isInitAnimationComplete
          ? `${style.card}`
          : `${style.card} ${style["slide-top"]}`
      }
    >
      <span className={style["card-box1"]}>
        <MaterialIcon
          size="normal"
          iconName="place"
          color="white"
          shape="circle"
        />
        <p className={style["card-box1__destination"]}>{destination}</p>
      </span>
      <span className={style["card-box1"]}>
        <MaterialIcon
          size="normal"
          iconName="directions_bus"
          color="white"
          shape="circle"
        />
        <p>{line}</p>
      </span>

      {status && (
        <span className={style["card-box1"]}>
          <MaterialIcon
            size="normal"
            iconName="schedule"
            color="white"
            shape="circle"
          />

          {isMinutesChanged ? <LoaderDots /> : <p>{status}</p>}
        </span>
      )}
      <FollowButton
        label={followButtonLabel}
        btnType="normal2"
        theme="transparent"
        icon={true}
        iconType="horizontal_rule"
        followed={followed}
        onClick={() => handleFollowOnClick(id, followed)}
      />
    </motion.div>
  );
};

export default React.memo(HorizontalCard);
