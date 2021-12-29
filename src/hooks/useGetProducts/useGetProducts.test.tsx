import React from "react";
import fetchMock from "jest-fetch-mock";

const getProducts = () => {
  return fetch("https://fakestoreapi.com/products?limit=4").then((res) =>
    res.json()
  );
};

describe("useGetProducts hook tests", () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });
  test("should call the correct router to list the products", async () => {
    fetchMock.mockResponseOnce(JSON.stringify({}));
    await getProducts();

    expect(fetch).toHaveBeenCalledWith(
      "https://fakestoreapi.com/products?limit=4"
    );
  });
});
