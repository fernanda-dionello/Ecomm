import React from "react";
import { render, screen } from "@testing-library/react";
import ProductItem from "./ProductItem";
import faker, { image } from "faker";
import { ProductItemType } from "./types/product-item";

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
    expect(screen.getByText(Product.title)).toBeInTheDocument();
  });
});