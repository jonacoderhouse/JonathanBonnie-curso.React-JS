import './App.css';
import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListoConteiner"
import ItemCount from "./componentes/ItemCount/ItemCount"

const App = () => {

  const bienvenidaEcommerce = "Benvenuti nel mio e-commerce"
  let cantidadProducto = 10
  
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting = {bienvenidaEcommerce}/>
    <ItemCount stock = {cantidadProducto}/>
    </>

  );
}

export default App;