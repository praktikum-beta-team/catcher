import React from "react";
import { render } from "@testing-library/react";
import { App } from "./App";

describe("<App />", () => {
  test("should display app component", async () => {
    render(<App />);
  });
});
