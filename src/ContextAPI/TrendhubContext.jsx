import { createContext, useEffect, useState } from "react";
import { retrieveAllProducts } from "../TrendhubAPI/TrendhubApi";

export const TrendhubContext = createContext();

function ContextProvider({children}){
    const[allProducts,setAllProducts]=useState([]);
    const getAllProductsApi=async()=>{
        const response = await retrieveAllProducts();
        console.log(response.data)
        setAllProducts(response.data)
    }
    useEffect(
        ()=>{
            getAllProductsApi();
            },[])

    return(
        <TrendhubContext.Provider value={{allProducts}}>
            {children}
        </TrendhubContext.Provider>
    )
}

export default ContextProvider;