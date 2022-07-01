import style from "./LoaderDots.module.scss";

const LoaderDots = () => {
  return (
    <div className={style.dots}>
      <div className={style["dots-element"]}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default LoaderDots;
