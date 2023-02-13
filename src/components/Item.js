import { Link } from "react-router-dom"
const Item = ({producto}) => {
    return (
        
            <article key={producto.id} className = "product-card">
                <h3>{producto.title}</h3>
                <img className="product-card_image" src={producto.image} alt={producto.title} />
                <p>{producto.price}</p>
                {/* <a href={"/producto/"+producto.id}>Ver mas</a> */}
                <Link to={"/item/"+producto.id}>Ver mas</Link>
            </article>
        
    )
}

export default Item

