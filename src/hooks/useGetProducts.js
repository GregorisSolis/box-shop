import axios from "axios";
import { useEffect, useState } from "react";

export const useGetProducts = (API) => {
    const [products, setProducts] = useState([]);

    useEffect(async () => {
        const resp = await axios(API);
        setProducts(resp.data);
    }, []);
    
    return products
}

