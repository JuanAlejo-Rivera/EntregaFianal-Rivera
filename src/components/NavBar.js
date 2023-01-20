import { Link } from "react-router-dom"

const Nav = (props) => {

    const{isHeader, hrefLinkFooter, textLinkFooter} = props

    if (isHeader) {
        return (
            <nav className="header_navbar">
                <Link className="header__link" to="/cervezas">Cervezas</Link>
                <Link className="header__link" to="/vinos">Vinos</Link>
                <span className="material-icons">shopping_cart</span>
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