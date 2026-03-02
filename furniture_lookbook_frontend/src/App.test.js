import { render, screen } from "@testing-library/react";
import App from "./App";

describe("Lookbook single-page app", () => {
  test("renders hero headline and primary CTA", () => {
    render(<App />);
    expect(
      screen.getByRole("heading", {
        name: /modern rustic pieces, carved with patience/i,
      })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("button", { name: /explore signature pieces/i })
    ).toBeInTheDocument();
  });

  test("renders key sections", () => {
    render(<App />);

    expect(
      screen.getByRole("heading", { name: /brand philosophy/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /signature pieces/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("heading", { name: /featured craft highlight/i })
    ).toBeInTheDocument();

    expect(
      screen.getByRole("contentinfo", { name: /footer/i })
    ).toBeInTheDocument();
  });
});
