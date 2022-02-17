import React from "react";
import { render, fireEvent } from "@testing-library/react";

import "@testing-library/jest-dom";

import App from "../App";

test("Affichage du debut à 1", () => {
  const { getByTestId } = render(<App />);

  expect(getByTestId("counter")).toHaveTextContent("1");
});

test("On incrémente le cpmteur si on clicke sur le +  ", () => {
  const { getByTestId, getByText } = render(<App />);

  fireEvent.click(getByText("_increment"));
  expect(getByTestId("count")).toHaveTextContent("2");

  fireEvent.click(getByText("_increment"));
  expect(getByTestId("count")).toHaveTextContent("Fizz");
});
