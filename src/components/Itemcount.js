import { useState } from "react"

const Itemcount = ({ stock, onAdd }) => {

    const [contador, setContador] = useState(1)

    const handleSumar = () => {
        if (contador < stock) {
            setContador(contador + 1)
        }
    }

    const handleRestar = () => {
        if (contador > 1) {
            setContador(contador - 1)
        }
    }

    const handleConfirmar = () => {
        onAdd(contador)
    }

    const handleResetear = () => {
        setContador(1)
    }

    return (
        <div>
            <button onClick={handleResetear}>Reset</button>
            <button onClick={handleSumar}>+</button>
            <p>Cantidad: {contador}</p>
            <button onClick={handleRestar}>-</button>
            <button onClick={handleConfirmar}>Confirmar</button>
        </div>
    )
}

export default Itemcount