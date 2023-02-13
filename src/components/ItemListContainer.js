import { useEffect, useState } from "react"
import ItemList from "./ItemList"
import { db } from "../firebase"
import { collection, getDocs, Query } from "firebase/firestore"
import { toast } from "react-toastify"



const ItemListContainer = () => {

  const [load, setLoad] = useState(false)
  const [productos, setProductos] = useState([])


  useEffect(() => {
    toast.info("Cargando productos")

    const productosCollection = collection(db, "Productos")//CollectionReference/Query
    const pedidoFirestore = getDocs(productosCollection)

    pedidoFirestore
      .then((respuesta) => {

        const productos = respuesta.docs.map(doc => ({ ...doc.data(), id: doc.id }))
        setProductos(productos)
        setLoad(true)
        toast.dismiss()
        toast.success("productos cargados")
      })
      .catch((error) => {
        toast.error("Hubo un error, vuelva a intentarlo" + error.message)
      })

  }, [])

  return (
    <>
      <p>{load ? null : "Cargando..."}</p>
      <ItemList productos={productos} />
    </>
  )
}

export default ItemListContainer