import { css } from "@emotion/css";
import faker from "faker";
import React from "react"
import ProductItem from "../../components/ProductItem/ProductItem";
import { ProductItemType } from "../../components/ProductItem/types/product-item";
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

    return (
        <div className={css`${container()}`}>
            <ProductItem productItem={Product} />
            <ProductItem productItem={Product} />
            <ProductItem productItem={Product} />
            <ProductItem productItem={Product} />
        </div>
    );
}

export default Home;