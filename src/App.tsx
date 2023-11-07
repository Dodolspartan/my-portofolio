import { Route, Routes } from "react-router-dom";
import FooterEl from './component/FooterEl'
import  Navigation  from './component/Navigation'
import WorkPages from "./pages/WorkPages";
import AboutPages from "./pages/AboutPages";
import ContactPages from "./pages/ContactPages";
import ProductPages from "./pages/ProductPages";
function App() {
 
  return (
    <>
      <div>
        <Navigation />
          <Routes>
            <Route path="/" Component={WorkPages}></Route>
            <Route path="/about" Component={AboutPages}></Route>
            <Route path="/contact" Component={ContactPages}></Route>
            <Route path="/produk" Component={ProductPages}></Route>
          </Routes>
        <FooterEl />
      </div>
          </>
  )
}

export default App
