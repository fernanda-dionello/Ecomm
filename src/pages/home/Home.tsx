import { css } from "@emotion/css";
import faker from "faker";
import React, { memo, useEffect, useState } from "react";
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductItemType } from "../../components/ProductItem/types/product-item";
import useGetProducts from "../../hooks/useGetProducts";
import { container } from "./home-styles";

const Home: React.FC = () => {
  const Product: ProductItemType = {
    id: faker.datatype.number(),
    category: faker.commerce.productAdjective(),
    image: faker.image.imageUrl(),
    title: faker.commerce.productName(),
    description: faker.commerce.productDescription(),
    price: faker.datatype.number(),
  };

  const [value, setValue] = useState<number>(0);
  const { getProducts } = useGetProducts();
  const [products, setProducts] = useState<ProductItemType[]>([]);
  let numero;

  console.log("let", numero);
  console.log("state", value);
  numero = 10;

  useEffect(() => {
    const fetchData = async () => {
      setProducts(await getProducts());
      console.log(products);
    };
    fetchData();
  }, [value]);

  return (
    <div
      className={css`
        ${container()}
      `}
    >
      <button onClick={() => setValue(value + 1)}>Increment</button>
      <ProductItem productItem={Product} />
      <ProductItem productItem={Product} />
      <ProductItem productItem={Product} />
      <ProductItem productItem={Product} />
    </div>
  );
};

export default memo(Home);
