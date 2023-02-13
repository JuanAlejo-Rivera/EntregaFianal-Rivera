// import { handelClick } from "./Utils"
import { useState } from "react"
import { db } from "../firebase"

const Carrito = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")

    const handleClick = (e) => {
        console.log(nombre,email)
    }

    const handleChangeName = (e) => {
        setNombre(e.target.value) 
    }

    const handleChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    return (
        <div>
            <div>
                <input type="text" onChange={handleChangeName} placeholder="Nombre" />
            </div>
            <div>
                <input type="text" onChange={handleChangeEmail} placeholder="Email" />
            </div>
            <button onClick={handleClick}>Termianr compra</button>
        </div>
    )
}

export default Carrito