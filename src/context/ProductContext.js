import React, { createContext, useState } from 'react';

export const productContext = createContext(); // Creando el contexto

export const ProductData = ({ children }) =>{  // Proporcionando los datos a todos los hijos
    const [carProducts, setCarProducts] = useState([])
    const [numProducts, setNumProducts] = useState(0);

    return(
        <productContext.Provider value = {{carProducts, setCarProducts, numProducts, setNumProducts}} >
             {children}
        </productContext.Provider>
    )
}