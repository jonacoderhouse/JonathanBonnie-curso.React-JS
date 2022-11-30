import './App.css';
import Navbar from "./componentes/Navbar/Navbar"
import ItemListContainer from "./componentes/ItemListContainer/ItemListoConteiner"
import ItemDailConteiner from './componentes/itemDetailContainer/ItemDailConteiner';


const App = () => {

  const bienvenidaEcommerce = "Bienvenido a mi E-commerce"

  return (
    <>
    <Navbar/>
    <ItemListContainer greeting = {bienvenidaEcommerce}/>
    <ItemDailConteiner/>
    </>

  );
}

export default App;