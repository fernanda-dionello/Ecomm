import React from "react";
import { cleanup, render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";
import faker from "faker";
import { ProductItemType } from "./types/product-item";
import { priceToBRL } from "../../pipes/price-to-brl";

describe("ProductItem tests", () => {
  const Product: ProductItemType = {
    id: faker.datatype.number(),
    category: faker.commerce.productAdjective(),
    image: faker.image.imageUrl(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.datatype.number(),
  };

  let componentInstance: HTMLElement;

  beforeEach(() => {
    const { container } = render(<ProductItem productItem={Product} />);
    componentInstance = container;
  });

  afterEach(() => {
    cleanup();
  })

  test("should render a ProductItem", () => {
    expect(componentInstance).toBeDefined();
  });

  test("should have an image alt text", () => {
    expect(screen.getByAltText(Product.title)).toBeInTheDocument();
  });

  test("should have a source url for image", () => {
    const image = componentInstance.querySelector("img");
    expect(image?.src).toEqual(Product.image);
  });

  test("should have a product title", () => {
    const spanTag = screen.getByRole("contentinfo") as HTMLSpanElement;
    expect(spanTag.textContent).toBe(Product.title);
  });

  test("should have a product description", () => {
    expect(screen.getByText(Product.description)).toBeInTheDocument();
  });

  test("should show price type as a number", () => {
    const price = componentInstance.querySelector(".price");
    expect(price?.textContent).toBe(priceToBRL(Product.price));
  });
});
