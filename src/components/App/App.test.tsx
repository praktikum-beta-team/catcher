import React from "react";
import { shallow } from "enzyme";

import { App } from "./App";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: () => jest.fn(),
}));

describe("App", () => {
  it("рендерится", () => {
    shallow(<App />);
  });
});
