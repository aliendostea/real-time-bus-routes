import { useDispatch } from "react-redux";
import { motion } from "framer-motion";
import { routesFollowedActions } from "../../../store/busRoutesFollowed";
import MaterialIcon from "../materialIcon/MaterialIcon";
import FollowButton from "../followButton/FollowButton";

import style from "./Card.module.scss";

interface busRouteResponseTypes {
  id: string;
  line?: string | number;
  status?: string;
  timeInMinutes?: number;
  destination?: string;
  timeInSeconds?: number;
  followed: boolean;
}

const Card: React.FC<busRouteResponseTypes> = ({
  id,
  destination,
  line,
  followed,
}) => {
  const dispatch = useDispatch();
  const classes = [style.card, style["slide-top"]].join(" ");

  const handleFollowOnClick = (id: string, followed: boolean) => {
    dispatch(routesFollowedActions.setItemFollowed(id));
  };

  return (
    <motion.div className={classes}>
      <span className={style["card-box1"]}>
        <MaterialIcon
          size="normal"
          iconName="place"
          color="white"
          shape="circle"
        />
        <p className={style["card-box1__destination"]}>{destination}</p>
      </span>
      <span className={style["card-box2"]}>
        <MaterialIcon
          size="normal"
          iconName="directions_bus"
          color="white"
          shape="circle"
        />
        <p>{line}</p>
      </span>

      <FollowButton
        label="Follow"
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

export default Card;
