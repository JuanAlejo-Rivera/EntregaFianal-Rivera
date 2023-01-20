import { Link } from "react-router-dom";
import Nav from "./NavBar";
const Header = () => {

    const isHeader = true;

    return (
        <header className="header">
            <Link to = "/">
            <h1 className="headerTitle">Cerveceria del valle sinú</h1>
            </Link>
            <Nav 
                isHeader={isHeader}
            />
        </header>
    )
}

export default Header; 