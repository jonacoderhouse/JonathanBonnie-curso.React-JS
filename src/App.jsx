//componentes
import './App.css';
import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListConteiner"
import ItemDailConteiner from './componentes/itemDetailContainer/ItemDailConteiner';
import Cart from "./componentes/Cart/Cart"
import { BrowserRouter, Routes, Route } from "react-router-dom"



const App = () => {

  const bienvenidaEcommerce = "Bienvenido a mi E-commerce"

  return (
    <>
      <BrowserRouter>
        <Navbar />   
        <Routes>
          <Route path='/' element={<ItemListContainer greeting={bienvenidaEcommerce} />} />
          <Route path='/productos/:id' element={<ItemDailConteiner />} /> 
          <Route path='/category/:category' element={<ItemListContainer />} />
          <Route path='/CartWidget' element={<Cart/>}/>
        </Routes>
      </BrowserRouter>
    </>

  );
}

export default App;