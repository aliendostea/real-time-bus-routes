import style from "./MaterialIcon.module.scss";

const MaterialIcon: React.FC<{
  size?: string;
  iconName?: string;
  color?: string;
  shape?: string;
}> = ({ size, iconName, color, shape }) => {
  const classes = [
    "material-symbols-rounded",
    size && style[`icon-${size}`],
    color && style[`icon-${color}`],
    shape && style[`icon-${shape}`],
  ].join(" ");
  return <span className={classes}> {iconName} </span>;
};

export default MaterialIcon;
