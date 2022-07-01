import { useReducer } from "react";
import { Provider } from "react-redux";
import Home from "./components/pages/home/Home";
import NavHeader from "./components/UI/header/Header";
import Layout from "./components/UI/Layout";
import store from "./store";

interface initialModalStateTypes {
  initialState: boolean;
}
type modalActions =
  | { type: "NOTIFICATION_BTN"; payload: boolean }
  | { type: "NOT_BTN"; payload: boolean };

const initialModalState = { initialState: false };

const modalReducer = (state: initialModalStateTypes, action: modalActions) => {
  if (action.type === "NOT_BTN") return { initialState: false };

  if (action.type === "NOTIFICATION_BTN")
    return { initialState: action.payload };

  return { initialState: false };
};

function App() {
  const [modalState, dispatchModalState] = useReducer<any>(
    modalReducer,
    initialModalState
  );

  const { initialState }: any = modalState;

  return (
    <>
      <Provider store={store}>
        <NavHeader
          initialState={initialState}
          dispatchModalState={dispatchModalState}
        />
        <Layout
          initialState={initialState}
          dispatchModalState={dispatchModalState}
        >
          <Home />
        </Layout>
      </Provider>
    </>
  );
}

export default App;
/// id call bus route API
/// 79
/// 1124
