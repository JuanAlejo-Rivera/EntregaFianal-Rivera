import { useCarrito } from "./CustomProvider"
import Nav from "./NavBar"
const Footer = () => {

const {totalProductos} = useCarrito()

    return (
        <footer>
            <p>copyright &copy; 2022</p>
            <Nav
                textLinkFooter="Instagram"
                hrefLinkFooter="https://www.facebbok.com"
            />
        </footer>
    )
}

export default Footer