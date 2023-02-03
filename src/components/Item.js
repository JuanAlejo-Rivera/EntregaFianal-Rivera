import { Link } from "react-router-dom"
const Item = ({producto}) => {
    return (
        
            <article key={producto.id}>
                <h3>{producto.title}</h3>
                <img src={`https://picsum.photos/200/300?random=${producto.id}`} alt={producto.title} />´
                <p>{producto.price}</p>
                {/* <a href={"/producto/"+producto.id}>Ver mas</a> */}
                <Link to={"/item/"+producto.id}>Ver mas</Link>
            </article>
        
    )
}

export default Item

