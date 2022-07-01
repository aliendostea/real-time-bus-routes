import { render, screen, fireEvent, getByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import NavHeader from "./Header.tsx";
import Modal from "../modal/Modal";

describe(NavHeader, () => {
  test("render titleNav: Bus-Routes", () => {
    render(<NavHeader />);

    const titleNav = screen.getByText("Bus-Routes");
    expect(titleNav).toBeInTheDocument();
  });

  test("render buttonNavNotifications", () => {
    const { getByRole } = render(<NavHeader />);

    const buttonNavNotifications = getByRole("button");
    expect(buttonNavNotifications).toBeInTheDocument();

    /*  fireEvent.click(buttonNavNotifications.firstElementChild); */
  });

  let portalRoot = document.getElementById("portal");
  if (!portalRoot) {
    portalRoot = document.createElement("div");
    portalRoot.setAttribute("id", "modal-root");
    document.body.appendChild(portalRoot);
  }

  test("click button to open modal", () => {
    render(<NavHeader />);

    const titleModalNull = screen.queryByText("Arriving imminently", {
      exact: false,
    });
    expect(titleModalNull).toBeNull();

    const buttonNavNotifications = screen.getByRole("button");
    fireEvent.click(buttonNavNotifications.firstElementChild);

    const titleModal = screen.getByText("modal not found", { exact: false });
    expect(titleModal).toBeInTheDocument();
  });

  /* test("render bodyModal", () => {
    render(<NavHeader />, <Modal />);

    const buttonNavNotifications = screen.getByRole("button");
    fireEvent.click(buttonNavNotifications);

    const titleModal = screen.getByText("Arriving imminently", {
      exact: false,
    });

    expect(titleModal);
  }); */
});
