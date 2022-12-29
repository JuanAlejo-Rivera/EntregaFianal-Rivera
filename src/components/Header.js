import Nav from "./Nav";
const Header = () => {
    return (
        <header className="header">
            <h1 className="headerTitle">Titulo</h1>
            <Nav isHeader={true}/>
        </header>
    )
}

export default Header; 