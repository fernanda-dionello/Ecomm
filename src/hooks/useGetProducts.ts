import { useState } from "react";
import { ProductItemType } from "../components/ProductItem/types/product-item";

const useGetProducts = () => {
  const getProducts = () => {
    return fetch("https://fakestoreapi.com/products?limit=5").then((res) =>
      res.json()
    );
  };
  return { getProducts };
};

export default useGetProducts;
