import "./inicio.scss"
import { init } from 'ityped'
import { useEffect, useRef } from "react"

export default function Inicio() {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, { 
      showCursor: true, 
      backDelay:  1500,
      backSpeed: 60,
      strings: ["Web Developer", "UX/UI Designer", "Streamer", "Gamer"],
    });
  },[])

  return (
    <div className="inicio" id="inicio">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Olá! Eu sou</h2>
          <h1>Phillipe Borges</h1>
          <h3>Desenvolvedor: <span ref={textRef}></span></h3>
        </div>
        <a href="#portfolio">
          <img src="assets/baixo.png" alt="" />
        </a>
      </div>
    </div>
  )
}
