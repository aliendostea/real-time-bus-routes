import style from "./FollowButton.module.scss";

interface btnTypes {
  label: string;
  children?: boolean;
  icon?: boolean;
  iconType?: string;
  theme?: string;
  btnType: string;
  size?: boolean;
  fullwidth?: boolean;
  disabled?: boolean;
  followed?: boolean;
  onClick: () => void;
}

const FollowButton: React.FC<btnTypes> = ({
  label,
  children = false,
  icon = false,
  iconType,
  theme = "",
  btnType = "normal",
  size = false,
  fullwidth = false,
  disabled = false,
  followed = false,
  onClick,
}) => {
  const classes = [
    style.btn,
    size && style[`btn_${size}`],
    theme && style[`btn_${theme}`],
    btnType && style[`btn_${btnType}`],
    iconType && style[`btn_${iconType}`],
    followed && style[`btn--active`],
    fullwidth && style.btn_fluid,
  ].join(" ");

  return (
    <button className={classes} onClick={onClick} type="button">
      {children && children}
      {icon && <span className="material-symbols-rounded">{iconType} </span>}
      {followed && (
        <span className={`${style["btn_check"]} material-symbols-rounded`}>
          {" "}
          check{" "}
        </span>
      )}
      {label && <span className={style.btn_text}>{label}</span>}
    </button>
  );
};

export default FollowButton;
