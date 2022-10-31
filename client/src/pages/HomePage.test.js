/**
* @jest-environment jsdom
*/

import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("check for countries button", () => {
  render(<HomePage />);
  const button = screen.getByText("countries");
  expect(button).toBeInTheDocument();
});

test("check for capitals button", () => {
  render(<HomePage />);
  const button = screen.getByText("capitals");
  expect(button).toBeInTheDocument();
});

test("check for flags button", () => {
  render(<HomePage />);
  const button = screen.getByText("flags");
  expect(button).toBeInTheDocument();
});

test("check for borders button", () => {
  render(<HomePage />);
  const button = screen.getByText("borders");
  expect(button).toBeInTheDocument();
});
