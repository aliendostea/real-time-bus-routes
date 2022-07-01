const Layout: React.FC<{
  initialState: boolean;
  children: any;
  dispatchModalState: (props: { type: string; payload: boolean }) => void;
}> = ({ children, initialState, dispatchModalState }) => {
  const handleOnMouseDown = () => {
    if (initialState === false) return;

    dispatchModalState({ type: "NOT_BTN", payload: false });
  };
  return (
    <main key="main" className="main-content" onMouseDown={handleOnMouseDown}>
      {children}
    </main>
  );
};

export default Layout;
