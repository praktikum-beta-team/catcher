import React from "react";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import { ErrorBoundary } from "./ErrorBoundary";

Enzyme.configure({ adapter: new Adapter() });

describe("ErrorHandler", () => {
  const Child = () => null;
  const wrapper = shallow(
    <ErrorBoundary>
      <Child />
    </ErrorBoundary>
  );
  const error = new Error("Foo");
  const throwError = () => {
    wrapper.find(Child).simulateError(error);
  };

  it("Перехватывает ошибку", () => {
    expect(throwError).not.toThrow();
  });

  it("Выводит текст ошибки", () => {
    expect(wrapper.find("summary").text()).toEqual(error.toString());
  });
});
