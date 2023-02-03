import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"

const ItemListContainer = () => {

  const [load, setLoad] = useState(false)
  const [productos, setProductos] = useState([])

  const props = useParams()
  console.log(props.categoria)
  useEffect(() => {
    const pedido = fetch("https://fakestoreapi.com/products")

    pedido.then((respuesta) => {

      const productos = respuesta.json()
      return productos
    })
      .then((productos) => {
        // productos.filter(props.categoria)    
        setProductos(productos)
        setLoad(true)
      })
      .catch((error) => {
        console.log(error)
      })
  }, [])

  const [contador, setContador] = useState(0)

  const handleClick = () => {
    setContador(contador + 1)
  }
  const [cargo, setCargo] = useState(true)

  useEffect(() => {
    console.log("Pidiendo algo al servidor")
    setTimeout(() => {
      console.log("Termino de pedir al servidor")
      setCargo(false)
    }, 2000)

  }, [])

  return (
    <div>
      {props.greeting}
      <p>Contador : {contador}</p>
      <button onClick={handleClick}>sumar</button>
      <p>{cargo ? "Cargando.. " : "Termino de cargar"}</p>
      <p>{load ? "Productos Cargados" : "Cargando..."}</p>
      <ItemList productos={productos} />
    </div>
  )
}

export default ItemListContainer