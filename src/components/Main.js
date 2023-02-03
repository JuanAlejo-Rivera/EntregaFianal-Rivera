import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom"
import ItemDetailContainer from "./ItemDetailContainer"
import Carrito from "./Carrito"

const Main = () => {
    return (
        <main>
            <Routes>
                {/* <h2>Home</h2>
                <ItemListContainer /> */}
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/productos/:categoria" element={<ItemListContainer/>}/>
                <Route path="/item/:id" element={<ItemDetailContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>


                {/* <Route path="/Vinos" element={<p>Vinos</p>}/> */}

                {/* <Route path="producto/1" element={<DetalleProducto/>}/> */}
            </Routes>
        </main>
    )
}

export default Main