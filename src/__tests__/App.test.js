import { render, screen, cleanup } from "@testing-library/react";
import App from "../App";

describe("App component", () => {
  afterEach(cleanup);
  it("snapshot test", () => {
    const { container } = render(<App />);
    expect(container).toMatchSnapshot();
  });

  it("renders correct heading", () => {
    render(<App />);
    expect(screen.getByRole("heading").textContent).toMatch(/Where's Waldo?/i);
  });

  it("displays the correct number of puzzles", () => {
    render(<App />);
    expect(screen.getAllByAltText(/waldo/i)).toHaveLength(6);
  });
});
