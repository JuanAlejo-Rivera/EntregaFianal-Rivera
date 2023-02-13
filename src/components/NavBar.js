import { Link, NavLink } from "react-router-dom"
import Cardwidget from "./CardWidget"

const Nav = (props) => {

    const { isHeader, hrefLinkFooter, textLinkFooter } = props

    if (isHeader) {
        return (
            <nav className="header_navbar">
                <NavLink className="header__link" to="/productos/cervezas">Cervezas</NavLink>
                <NavLink className="header__link" to="/productos/vinos">Vinos</NavLink>
                <Cardwidget/>
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