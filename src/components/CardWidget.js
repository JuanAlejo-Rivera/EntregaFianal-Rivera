import { NavLink } from "react-router-dom"
import { useCarrito } from "./CustomProvider"

const Cardwidget = () => {

  const {totalProductos} = useCarrito()

  return (
    <NavLink to="/carrito">
      <span className="material-icons">shopping_cart</span>
      {totalProductos}
    </NavLink>
  )
}

export default Cardwidget