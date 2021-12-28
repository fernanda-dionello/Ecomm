import React from "react";
import { ProductItemType } from "./types/product-item";
type ProductItemProps = { productItem: ProductItemType };

const ProductItem: React.FC<ProductItemProps> = (prop: ProductItemProps) => {
  return (
    <div>
      <span>{prop.productItem.title}</span>
      <img alt={prop.productItem.title} src={prop.productItem.image} />
    </div>
  );
};

export default ProductItem;
