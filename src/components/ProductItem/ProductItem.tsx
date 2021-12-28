import React from "react";
import { ProductItemType } from "./types/product-item";
type ProductItemProps = { productItem: ProductItemType };

const ProductItem: React.FC<ProductItemProps> = (prop: ProductItemProps) => {
  return (
    <div>
      <img alt={prop.productItem.title} src={prop.productItem.image} />
      <span role="contentinfo">{prop.productItem.title}</span>
      <p>{prop.productItem.description}</p>
      <span>{prop.productItem.price}</span>
    </div>
  );
};

export default ProductItem;
