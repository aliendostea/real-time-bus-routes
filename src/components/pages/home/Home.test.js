import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "./Home";

describe(Home, () => {
  test("render home", () => {
    render(<Home />);
    const parentElement = screen.getByTestId("parent-element-home");
    expect(parentElement).toBeInTheDocument();
  });
  test("render Button Home: Btn Refresh", () => {
    render(<Home />);

    const button = screen.getByRole("button", { name: "refresh Refresh" });
    expect(button).toBeInTheDocument();
  });

  it("render all items API home", async () => {
    window.fetch = jest.fn();
    window.fetch.mockResolvedValueOnce({
      json: async () => [
        {
          routeId: "0590",
          line: "59",
          "text-ca": "imminent",
          "t-in-s": 5,
          destination: "Pl. Reina Maria Cristina",
          "t-in-min": 0,
        },
      ],
    });

    render(<Home />);

    const parentElementInit = await screen.findAllByTestId(
      "parent-element-home"
    );
    expect(parentElementInit).toHaveLength(1);

    await waitFor(() => {
      screen.getByText("Paral·lel", { exact: false });
    });

    /* const parentElement = await screen.findAllByTestId("parent-element-home");
    expect(parentElement).toHaveLength(2); */
  });
});
