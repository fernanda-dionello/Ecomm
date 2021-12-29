import { useCallback, useState } from "react";
import { apiUrl } from "../../api/apiUrl";

const useGetProducts = (initalLimit = 4) => {
    const [limit, setLimit] = useState(initalLimit);
    const updateLimit = (limit: number) => {
        setLimit(limit)
    };
    const getProducts = useCallback(() => {
        console.log("Entrou no callback", limit)
        return fetch(`${apiUrl}/products?limit=${limit}`).then((res) =>
            res.json()
        );
    }, [limit]);
    return {getProducts, updateLimit, limit};
}

export default useGetProducts;
