import { useRef } from "react";
import { useSelector } from "react-redux";
import { busRouteResponseTypes } from "../../../types/response/busRouteResponse";
import Card from "../card/Card";
import Modal from "../modal/Modal";
import style from "./Header.module.scss";

interface busRoutesTypes {
  allRoutes: busRouteResponseTypes[];
}
interface globalState {
  busRoutes: busRoutesTypes;
}
interface initialModalStateTypes {
  initialState: boolean;
  dispatchModalState: (props: { type: string; payload: boolean }) => void;
}

const NavHeader: React.FC<initialModalStateTypes> = ({
  initialState,
  dispatchModalState,
}) => {
  const allRoutes: any = useSelector<globalState>(
    (state) => state.busRoutes.allRoutes
  );

  const modalRef = useRef<HTMLDivElement | null>(null);
  const btnNotificationRef = useRef<HTMLButtonElement | null>(null);

  const handleOnClickNotificacions = () => {
    dispatchModalState({ type: "NOTIFICATION_BTN", payload: !initialState });
  };

  const handleOnMouseDown = (e: any) => {
    if (initialState === false) return;

    if (modalRef.current?.contains(e.target)) return;

    if (btnNotificationRef.current?.contains(e.target)) return;

    dispatchModalState({ type: "NOT_BTN", payload: false });
  };

  const setFilterElementsFollowed = () => {
    const copyAllRoutes: busRouteResponseTypes[] = [...allRoutes];
    return copyAllRoutes?.filter(
      (element: busRouteResponseTypes) => element?.followed === true
    );
  };

  const filteredElementsFollowed: busRouteResponseTypes[] =
    setFilterElementsFollowed();

  const isLengthEqualZero = filteredElementsFollowed.length > 0;

  return (
    <nav className={style.nav} onMouseDown={handleOnMouseDown}>
      <div className={style["nav__inner-box"]}>
        <div className={style["nav__box1"]}>
          <span>Bus-Routes</span>
        </div>
        <div className={style["nav__box2"]}>
          <button
            ref={btnNotificationRef}
            onClick={handleOnClickNotificacions}
            type="button"
            className={style["btn-ntfc"]}
          >
            <span className="material-symbols-rounded">notifications</span>
            {isLengthEqualZero && (
              <span className={style["btn-ntfc__element"]}></span>
            )}
          </button>
        </div>
      </div>
      {initialState && (
        <Modal>
          <div ref={modalRef} className={style["modal"]}>
            <h1 className={style["modal-title"]}>Arriving imminently</h1>

            <div className={style["modal-body"]}>
              {filteredElementsFollowed?.map(
                (element: busRouteResponseTypes) => (
                  <Card
                    key={element.id}
                    id={element.id}
                    destination={element.destination}
                    line={element.line}
                    followed={element.followed}
                  />
                )
              )}
            </div>
          </div>
        </Modal>
      )}
    </nav>
  );
};

export default NavHeader;
