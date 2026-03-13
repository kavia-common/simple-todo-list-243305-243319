import { render, screen } from "@testing-library/react";
import App from "./app/App";

test("renders todo title", () => {
  render(<App />);
  const title = screen.getByRole("heading", { name: /todo list/i });
  expect(title).toBeInTheDocument();
});
