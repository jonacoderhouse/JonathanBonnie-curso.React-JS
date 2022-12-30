
import './App.css';
//COMPONENTES
import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListConteiner"
import ItemDailConteiner from './componentes/itemDetailContainer/ItemDailConteiner';
import Cart from "./componentes/Cart/Cart"
import Checkout from "./componentes/Checkout/Checkout"
import Footer from './componentes/footer/Footer';

//HOOKS
import { BrowserRouter, Routes, Route } from "react-router-dom"
//CONTEXT
import { DarkModeProvider } from './context/DarkModeContext';

const App = () => {
  const bienvenidaEcommerce = "Bienvenido a mi E-commerce"
  const seleccionProductos = "BONNIE E-COMMERCE"
  return (
    <>
      <BrowserRouter>
        <DarkModeProvider>
          <Navbar />
          <Routes>
            <Route path='/' element={<ItemListContainer greeting={bienvenidaEcommerce} />} />
            <Route path='/productos/:id' element={<ItemDailConteiner/>} />
            <Route path='/category/:category' element={<ItemListContainer  greeting={seleccionProductos} />} />
            <Route path='/CartWidget' element={<Cart />} />
            <Route path='/cart' element={<Checkout />} />
          </Routes>
          <Footer  />
        </DarkModeProvider>
      </BrowserRouter>
    </>

  );
}

export default App;