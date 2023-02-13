import { useCarrito } from "./CustomProvider"
import Itemcount from "./Itemcount"

const ItemDitail = ({stock = 5}) => {


    const onAdd = (parametro) => {
        console.log(parametro)
    }


    return (
        <div>
            <h1>Detalle de producto</h1>
            <img src="https://picsum.photos/200/300" alt="picsum" />
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam id dolore
                similique culpa, exercitationem facilis voluptatum? Beatae quia accusantium
                dolore! Est aliquid ad cupiditate at saepe nihil molestias ab earum magni sequi,
                perferendis sint nesciunt aut voluptas temporibus, vero blanditiis enim vel
                obcaecati eveniet delectus eius. Porro eaque sit doloribus.</p>
            <Itemcount stock = {stock}  onAdd={onAdd}/>
        </div>

    )
}

export default ItemDitail