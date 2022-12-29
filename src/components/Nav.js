
const Nav = (parametro) => {
    if (parametro.isHeader) {
        return (
            <nav className="header_navbar">
                <a className="header__link" href="#">link</a>
                <a className="header__link" href="#">link</a>
                <a className="header__link" href="#">link</a>
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