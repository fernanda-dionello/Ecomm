import React from "react";
import fetchMock from "jest-fetch-mock";
import useGetProducts from "./useGetProducts";
import { ProductItemType } from "../../components/ProductItem/types/product-item";
import faker from "faker";
import { apiUrl } from "../../api/apiUrl";
import { act, cleanup, renderHook } from '@testing-library/react-hooks'

describe("useGetProducts hook tests", () => {

  let productList: ProductItemType[] = Array.from({length: 5}).map(() => {
    return {
      id: faker.datatype.number({max: 150, min: 50}),
      title: faker.commerce.productName(),
      price: faker.datatype.number(),
      category: faker.commerce.department(),
      description: faker.commerce.productDescription(),
      image: faker.image.imageUrl()
    }
  });

  beforeEach(() => {
    fetchMock.resetMocks();
  });

  afterEach(() => {
    cleanup();
  })

  test("should call the correct router to list the products", async () => {
    const { result } = renderHook(() => useGetProducts());
    const { getProducts } = result.current; 
    fetchMock.mockResponseOnce(JSON.stringify({}));
    await getProducts();

    expect(fetch).toHaveBeenCalledWith(
      `${apiUrl}/products?limit=4`
    );
  });

  test("should return a list of products", async () => {
    const { result } = renderHook(() => useGetProducts());
    const { getProducts } = result.current; 
    fetchMock.mockResponseOnce(JSON.stringify(productList));
    const products = await getProducts();
    
    expect(products).toEqual(productList);
  });

  test.only("should update limit of url", async() => {
    const { result } = renderHook(() => useGetProducts(10));
    const { getProducts, updateLimit} = result.current;
    fetchMock.mockResponseOnce(JSON.stringify({}));
    act(() => updateLimit(2));
    await getProducts();
    
    expect(result.current.limit).toBe(2);
    // expect(fetch).toHaveBeenCalledWith(`${apiUrl}/products?limit=2`)
  });
});
