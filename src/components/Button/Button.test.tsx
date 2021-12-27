import React from "react";
import { render } from "@testing-library/react";
import Button from "./Button";

const setUp = (isDisabled = false) => {
  return render(<Button disabled={isDisabled}>Comprar</Button>);
};

describe("Button tests", () => {
  test("should render component", () => {
    const { container } = setUp();

    expect(container.querySelector("button")).toBeInTheDocument();
  });

  test("should have a label", async () => {
    const { findByText } = setUp();
    const text = await findByText(/Comprar/i);

    expect(text).toBeInTheDocument();
  });

  test("should start with disabled false", () => {
    const { container } = setUp();
    const button = container.querySelector("button");

    expect(button?.disabled).toBeFalsy(); // ? SAFE OPERATOR evita o lançamento de uma excessão, verifica o valor da prop antes de acessa-la
  });

  test("should set disabled true", () => {
    const { container } = setUp(true);
    const button = container.querySelector("button");

    expect(button?.disabled).toBeTruthy();
  });
});
