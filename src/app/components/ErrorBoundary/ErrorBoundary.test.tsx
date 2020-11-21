import React from "react";
import { shallow } from "enzyme";

import { ErrorBoundary } from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  const Child = () => null;

  it("выводит дочерние компоненты, если исключение не выброшено", () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    expect(wrapper.find(Child).exists()).toBe(true);
  });

  it("вызывает componentDidCatch, если выброшено исключение", () => {
    const wrapper = shallow(
      <ErrorBoundary>
        <Child />
      </ErrorBoundary>
    );

    jest.spyOn(ErrorBoundary.prototype, "componentDidCatch");
    wrapper.find(Child).simulateError(new Error());

    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalledTimes(1);
  });
});
