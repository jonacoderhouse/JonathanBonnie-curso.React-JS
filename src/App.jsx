import './App.css';
import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListoConteiner"

const App = () => {

  const bienvenidaEcommerce = "Benvenuti nel mio e-commerce"
  
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting = {bienvenidaEcommerce}/>
    </>

  );
}

export default App;