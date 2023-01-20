import { BrowserRouter } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header"
import ItemListContainer from "./ItemListContainer";
import Main from "./Main"


const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Main />
      <Footer />
    </BrowserRouter>
  )
}

export default App;
