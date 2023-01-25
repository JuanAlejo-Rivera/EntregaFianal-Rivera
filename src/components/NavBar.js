import { Link } from "react-router-dom"

const Nav = (props) => {

    const { isHeader, hrefLinkFooter, textLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="header_navbar">
                <Link className="header__link" to="/productos/cervezas">Cervezas</Link>
                <Link className="header__link" to="/productos/vinos">Vinos</Link>
                <Link to="/carrito">
                    <span className="material-icons">shopping_cart</span>
                </Link>
            </nav>
        )
    } else {
        return (
            <nav className="header_navbar">
                <a href={hrefLinkFooter}>{textLinkFooter}</a>
            </nav>
        )
    }
}

export default Nav