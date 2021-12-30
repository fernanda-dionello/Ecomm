import { css } from "@emotion/css";
import faker from "faker";
import React, { useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductItemType } from "../../components/ProductItem/types/product-item";
import { container } from "./home-styles";
import useGetProducts from "../../hooks/useGetProducts/useGetProducts";

const Home: React.FC = () => {
  const { getProducts } = useGetProducts();
  const [products, setProducts] = useState<ProductItemType[]>([]);

  useEffect(() => {
    getProducts().then(setProducts);
  }, []);

  return (
    <ul
      className={css`
        ${container()}
      `}
    >
      {products.map((product, index) => (
        <ProductItem productItem={product} key={index} />
      ))}
    </ul>
  );
};

export default Home;
