import Nav from "./NavBar";
const Header = () => {

    const isHeader = true;

    return (
        <header className="header">
            <h1 className="headerTitle">Cerveceria del valle sinú</h1>
            <Nav 
                isHeader={isHeader}
            />
        </header>
    )
}

export default Header; 