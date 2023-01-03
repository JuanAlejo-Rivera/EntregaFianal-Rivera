
const Nav = (parametro) => {
    if (parametro.isHeader) {
        return (
            <nav className="header_navbar">
                <a className="header__link" href="#">Inicio</a>
                <a className="header__link" href="#">Cervezas</a>
                <a className="header__link" href="#">Vinos</a>
            </nav>
        )
    } else {
        return (
            <nav className="header_navbar">
                {/* social links */}
                <a href="#">Facebook</a>
            </nav>
        )
    }
}

export default Nav