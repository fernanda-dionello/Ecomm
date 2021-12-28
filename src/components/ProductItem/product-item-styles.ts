import { css } from "@emotion/react"

export const container = () => {
    return css`
        width: 200px;
        height: 450px;
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        position: relative;

        img {
            display: block;
            width: 200px;
            height: 250px;
        }

        span[role="contentinfo"] {
            font-weight: bold;
            font-size: 14px;
        }

        p.description {
            font-weight: 300;
            font-size: 14px;
            color: #65655E;
        }

        span.price {
            font-size: 14px;
            font-weight: bold;
            color: #533A7B;
        }
    `;
}
