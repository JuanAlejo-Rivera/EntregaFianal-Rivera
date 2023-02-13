import { createContext, useContext, useEffect, useState } from "react";


const contexto = createContext()
const Provider = contexto.Provider

export const useCarrito = () => {
    const valorDelContexto = useContext(contexto)
    return valorDelContexto
}


const CustomProvider = ({ children }) => {

    // useEffect(()=>{})
    const [carrito, setCarrito] = useState([])
    const [totalProductos, setTotalProductos] = useState(0)

    const agregarProducto = (producto, cantidad) => {
// setCarrito(copia)
    }

    const eliminarProducto = (id) => { }

    const vaciarCarrito = () => { 
        setCarrito([])
    }

    const estaEnCarrito = () => { }

    const valorDelContexto = {
        carrito: carrito,
        totalProductos: totalProductos,
        // setCarrito : setCarrito,
        // setTotalProductos : setTotalProductos
        agregarProducto: agregarProducto
    }

    return (
        <Provider value={valorDelContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider