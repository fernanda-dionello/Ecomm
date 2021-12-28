import { css } from "@emotion/react";

export const button = () => {
    return css`
    border: none;
    background: #533A7B;
    box-shadow: 0px 8px 25px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    color: #FFF;
    font-size: 14px;
    font-weight: bold;
    padding: 8px 12px;
    cursor: pointer;

    &:active, &:hover {
        filter: brightness(140%);
    }

    &:focus {
        outline: solid lightblue;
    }
    `
}

