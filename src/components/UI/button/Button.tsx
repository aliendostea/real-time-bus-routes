import { useEffect, useState } from "react";
import style from "./Button.module.scss";

interface btnTypes {
  label?: string;
  children?: boolean;
  icon?: boolean;
  iconType?: string;
  theme?: string;
  btnType: string;
  size?: boolean;
  fullwidth?: boolean;
  iconRotation?: boolean;
  disabled?: boolean;
  onClick: () => void;
}

const Button: React.FC<btnTypes> = ({
  label,
  children = false,
  icon = false,
  iconType,
  theme = "",
  btnType = "normal",
  size = false,
  fullwidth = false,
  iconRotation = false,
  disabled = false,
  onClick,
}) => {
  const [isClicked, setIsClicked] = useState<boolean>(false);

  const classes = [
    style.btn,
    size && style[`btn_${size}`],
    theme && style[`btn_${theme}`],
    btnType && style[`btn_${btnType}`],
    iconType && style[`btn_${iconType}`],
    fullwidth && style.btn_fluid,
    iconRotation || (disabled && isClicked && style.btn_disabled),
    isClicked && iconRotation && style.btn_iconRotation,
  ].join(" ");

  const handleOnClick = () => {
    onClick();
    setIsClicked(true);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setIsClicked(false);
    }, 2000);

    return () => clearTimeout(interval);
  }, [isClicked]);

  return (
    <button
      className={classes}
      onClick={handleOnClick}
      type="button"
      disabled={isClicked}
    >
      {children && children}
      {icon && <span className="material-symbols-rounded">{iconType} </span>}
      {label && <span className={style.btn_text}>{label}</span>}
    </button>
  );
};

export default Button;
