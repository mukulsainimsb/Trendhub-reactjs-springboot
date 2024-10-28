import { createContext, useEffect, useState } from "react";
import { retrieveAllProducts, logout, loginapi, getUserByEmail } from "../TrendhubAPI/TrendhubApi";
import { useNavigate } from "react-router-dom";

export const TrendhubContext = createContext();

function ContextProvider({ children }) {
    const [allProducts, setAllProducts] = useState([]);
    const[currentUser,setCurrentUser]=useState({
        username : '',
        email : '',
        phone : ''
    });

    const[errorMessage,setErrorMessage]=useState('')
    const[isAuthenticated,setAuthenticated]=useState(false);
    const [cartItems, setCartItems] = useState(() => {
        const savedCartItems = localStorage.getItem("cartItems");
        return savedCartItems ? JSON.parse(savedCartItems) : [];
    });

    const getAllProductsApi = async () => {
        const response = await retrieveAllProducts();
        console.log(response.data);
        setAllProducts(response.data);
    };

    const handleuser = async (username) => {
        try {
            const response = await getUserByEmail(username);
            setCurrentUser({
                username : response.data.username,
                email : response.data.email,
                phone : response.data.phone
            })
        } catch (error) {
            console.error("Error in handleuser:", error);
        }
    };

    const handleLogin = async (username, password) => {
        try {
            const user = await loginapi(username, password);
            handleuser(username);
            setAuthenticated(true)
            setErrorMessage('');
            
        } catch (error) {
            console.error("Login failed:", error);
            setAuthenticated(false);
            setErrorMessage('Invalid username or password');
        }
    };

    const handleLogout = () => {
        setAuthenticated(false)
        logout(); 
        console.log(isAuthenticated)
    };
    useEffect(() => {
        if (isAuthenticated) {
            getAllProductsApi();
        } else {
            setAllProducts([]);
        }
    }, [isAuthenticated]);

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
        <TrendhubContext.Provider value={{ allProducts, 
        addToCart, 
        cartItems, 
        setCartItems,
        handleLogin,
        handleLogout,
        isAuthenticated,
        setAuthenticated,
        errorMessage,
        currentUser
        }}>
            {children}
        </TrendhubContext.Provider>
    );
}

export default ContextProvider;