import { useCallback, useState } from "react";
import { apiUrl } from "../api/apiUrl";
import { ProductItemType } from "../components/ProductItem/types/product-item";

const useGetProducts = () => {
  const [limit, setLimit] = useState(5);
  const getProducts = useCallback(() => {
    return fetch(`${apiUrl}/products?limit=${limit}`).then((res) =>
      res.json()
    );
  }, [limit]);
  return { getProducts, setLimit };
};

export default useGetProducts;
