import React from "react";
import { render } from "@testing-library/react";

import { ErrorBoundary } from "./ErrorBoundary";

beforeAll(() => {
  jest.spyOn(ErrorBoundary.prototype, "componentDidCatch");
  jest.spyOn(console, "error").mockImplementation(() => {});
});

afterAll(() => {
  (console.error as jest.Mock).mockRestore();
  (ErrorBoundary.prototype.componentDidCatch as jest.Mock).mockRestore();
});

afterEach(() => {
  jest.clearAllMocks();
});

const BrokenComponent = ({ shouldThrow }: { shouldThrow?: boolean }) => {
  if (shouldThrow) {
    throw new Error();
  } else {
    return null;
  }
};

describe("Error Boundary", () => {
  it("работает", () => {
    const { rerender } = render(
      <ErrorBoundary>
        <BrokenComponent />
      </ErrorBoundary>
    );

    rerender(
      <ErrorBoundary>
        <BrokenComponent shouldThrow />
      </ErrorBoundary>
    );

    expect(ErrorBoundary.prototype.componentDidCatch).toHaveBeenCalledTimes(1);
  });
});
