import { useCallback, useState } from "react";
import { apiUrl } from "../../api/apiUrl";

const useGetProducts = (initalLimit = 4) => {
    const [limit, setLimit] = useState(initalLimit);

    const updateLimit = (limit: number) => {
        setLimit(limit)
    };

    const getProducts = useCallback(() => {
        return fetch(`${apiUrl}/products?limit=${limit}`).then((res) =>
            res.json()
        );
    }, [limit]);

    return {getProducts, updateLimit, setLimit, limit};
}

export default useGetProducts;
