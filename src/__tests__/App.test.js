import { render, screen, cleanup } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
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

  it('opens with the "Home" tab selected', () => {
    render(<App />);
    expect(screen.getAllByRole("tab")).toHaveLength(2);
    expect(screen.getAllByRole("tab")[0]).toHaveAttribute(
      "aria-selected",
      "true"
    );
    expect(screen.getAllByRole("tab")[1]).toHaveAttribute(
      "aria-selected",
      "false"
    );
  });

  it("clicking on each puzzle img redirects and updates DOM", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getAllByAltText(/waldo/i)[3]);
    expect(screen.getAllByRole("img")[4]).toHaveAttribute("src", "waldo4.jpg");
  });

  it("clicking on the Best Times tab navigates to the correct page", async () => {
    render(<App />);
    const user = userEvent.setup();
    await user.click(screen.getByText(/BEST TIMES/i));
    expect(screen.getByRole("rowgroup")).toBeInTheDocument();
  });
});
