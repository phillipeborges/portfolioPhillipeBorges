import "./barradecima.scss"
import {Person, Mail} from "@material-ui/icons"

export default function Barradecima({ menuOpen, setMenuOpen }) {
  return (
    <div className={"barradecima " +  (menuOpen && "ativa")}>
      <div className="wrapper">
        <div className="left">
          <a href="#inicio" className="logo">
            Phillipe
            </a>
          <div className="itemContainer">
            <Person className="icon" />   
            <span>(99) 9 8888-7777</span>
            </div>
            <div className="itemContainer">
            <Mail className="icon" />   
            <span>dev.phillipeborges@outlook.com</span>
          </div>
        </div>
        <div className="right">
          <div className="menuhamburguer" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="Linha1"></span>
            <span className="Linha2"></span>
            <span className="Linha3"></span>
          </div>
        </div>
      </div>
    </div>
  )
}
