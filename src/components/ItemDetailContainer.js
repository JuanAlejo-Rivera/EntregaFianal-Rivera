import { useParams } from "react-router-dom"
import ItemDitail from "./ItemDitail"
import { db } from "../firebase"

const ItemDetailContainer = () => {
    // console.log(window.location.pathname)
const params = useParams()
console.log(params.id)

  return (
    <ItemDitail/>
  )
}

export default ItemDetailContainer