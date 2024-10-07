import { createContext, useEffect, useState } from "react";
import { retrieveAllProducts } from "../TrendhubAPI/TrendhubApi";

export const TrendhubContext = createContext();

function ContextProvider({ children }) {
    const [allProducts, setAllProducts] = useState([]);
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    const getAllProductsApi = async () => {
        const response = await retrieveAllProducts();
        console.log(response.data);
        setAllProducts(response.data);
    };

    useEffect(() => {
        getAllProductsApi();
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
    }, [cartItems]);

    const addToCart = (product) => {
        setCartItems((prevItems) => {
            const isExists = prevItems.find((item) => item.id === product.id);
            if (isExists) {
                return prevItems.map((items) =>
                    items.id === product.id ? { ...items, quantity: items.quantity + 1 } : items
                );
            } else {
                return [...prevItems, { ...product, quantity: 1 }];
            }
        });
    };

    return (
        <TrendhubContext.Provider value={{ allProducts, addToCart, cartItems, setCartItems }}>
            {children}
        </TrendhubContext.Provider>
    );
}

export default ContextProvider;