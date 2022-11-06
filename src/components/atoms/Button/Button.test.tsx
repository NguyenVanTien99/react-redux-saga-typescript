import React from "react";
import { render } from "@testing-library/react";
import Button from "./";

test("renders Button", () => {
  render(<Button content="Click Me" />);
});
