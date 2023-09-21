import App from "../App";
import { render } from "@testing-library/react";

test("Render the App", () => {
  render(<App />);
  expect(true).toBeTruthy();
});
