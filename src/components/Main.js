import ItemListContainer from "./ItemListContainer"
import { Route, Routes } from "react-router-dom"

const Main = () => {
    return (
        <main>
            <Routes>
                {/* <h2>Home</h2>
                <ItemListContainer /> */}
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/Cervezas" element={<p>Cenvezas</p>}/>
                <Route path="/Vinos" element={<p>Vinos</p>}/>
            </Routes>
        </main>
    )
}

export default Main