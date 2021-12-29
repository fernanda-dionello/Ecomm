
export const priceToBRL = (price: number) => {
    return isNaN(price) ? "" : (price.toLocaleString("pt-BR", {style: "currency", currency: "BRL"}));
}