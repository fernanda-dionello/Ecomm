import { css } from "@emotion/css";
import React from "react";
import { ProductItemType } from "./types/product-item";
import { container } from "./product-item-styles";
import Button from "../Button/Button";
import { priceToBRL } from "../../pipes/price-to-brl/index"

type ProductItemProps = { productItem: ProductItemType };

const ProductItem: React.FC<ProductItemProps> = (prop: ProductItemProps) => {
  return (
    <li className={css`${container()}`}>
      <img alt={prop.productItem?.title} src={prop.productItem?.image} />
      <span role="contentinfo">{prop.productItem?.title}</span>
      <p className="description">{prop.productItem?.description}</p>
      <span className="price">{priceToBRL(prop.productItem?.price)}</span>
      <Button>Comprar</Button>
    </li>
  );
};

export default ProductItem;
