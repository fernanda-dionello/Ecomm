import { css } from "@emotion/css";
import React, { memo, useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductItemType } from "../../components/ProductItem/types/product-item";
import useGetProducts from "../../hooks/useGetProducts";
import { container } from "./home-styles";

const Home: React.FC = () => {

  const { getProducts } = useGetProducts();
  const [products, setProducts] = useState<ProductItemType[]>([]);

  useEffect(() => {
    // setLimit(4);
    getProducts().then(setProducts); //it's equal to "getProducts().then((res) => setProducts(res))""
  }, [getProducts]);

  return (
    <ul
      className={css`
        ${container()}
      `}
    >
      {products.map((product, index) => <ProductItem key={index} productItem={product} />)}
    </ul>
  );
};

export default memo(Home);
