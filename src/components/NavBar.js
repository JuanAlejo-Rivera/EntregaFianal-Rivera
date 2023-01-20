
const Nav = (props) => {

    const{isHeader, hrefLinkFooter, textLinkFooter} = props

    if (isHeader) {
        return (
            <nav className="header_navbar">
                <a className="header__link" href="#">Inicio</a>
                <a className="header__link" href="#">Cervezas</a>
                <a className="header__link" href="#">Vinos</a>
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