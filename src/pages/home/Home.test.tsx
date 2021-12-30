import { act, cleanup, render } from "@testing-library/react";
import faker from "faker";
import fetchMock from "jest-fetch-mock";
import { ProductItemType } from "../../components/ProductItem/types/product-item";
import Home from "./Home";
import useGetProducts from "../../hooks/useGetProducts/useGetProducts";
jest.mock("../../hooks/useGetProducts/useGetProducts");

describe("Home tests", () => {
  let productList: ProductItemType[] = Array.from({ length: 4 }).map(() => {
    return {
      id: faker.datatype.number({ max: 150, min: 50 }),
      title: faker.commerce.productName(),
      price: faker.datatype.number(),
      category: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl(),
    };
  });

  let componentInstance: HTMLElement;

  beforeEach(() => {
    (useGetProducts as jest.Mock).mockReturnValue({
      getProducts: () => Promise.resolve(productList),
    });
    const { container } = render(<Home />);
    componentInstance = container;
    fetchMock.resetMocks();
  });

  afterEach(() => {
    cleanup();
  });
  test("should render product list", async () => {
    const productListHome = Array.from(
      componentInstance.querySelectorAll("ul li")
    ) as HTMLElement[];

    expect(await productListHome).toHaveLength(4);
  });
});
