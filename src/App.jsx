import Barradecima from "./componentes/barradecima/Barradecima"
import Inicio from "./componentes/inicio/Inicio"
import Portfolio from "./componentes/portfolio/Portfolio"
import Trabalhos from "./componentes/trabalhos/Trabalhos"
import Depoimentos from "./componentes/depoimentos/Depoimentos"
import Contato from "./componentes/contato/Contato"
import "./app.scss" 
import { useState } from "react"
import Menu from "./componentes/menu/Menu"

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
    <Barradecima menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
    <div className="sections">
      <Inicio/>
      <Portfolio/>
      <Trabalhos/>
      <Depoimentos/>
      <Contato/>
    </div>
    </div>
  );
}

export default App;
