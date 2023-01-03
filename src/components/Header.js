import Nav from "./NavBar";
const Header = () => {
    return (
        <header className="header">
            <h1 className="headerTitle">Cerveceria del valle sinú</h1>
            <Nav isHeader={true}/>
        </header>
    )
}

export default Header; 