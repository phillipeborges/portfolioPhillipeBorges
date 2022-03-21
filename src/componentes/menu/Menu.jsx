import "./menu.scss"

export default function Menu({menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " +(menuOpen && "ativa")}> 
        <ul>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#inicio">Inicio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#portfolio">Portfólio</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#trabalhos">Trabalhos</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#depoimentos">Depoimentos</a>
            </li>
            <li onClick={()=>setMenuOpen(false)}>
                <a href="#contato">Contato</a>
            </li>
        </ul>
    </div>
  )
}
