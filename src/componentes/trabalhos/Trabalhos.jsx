import { useState } from "react";
import "./trabalhos.scss"

export default function Trabalhos() {
      const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
    {
      id: "1",
      icon: "./assets/mobile.png",
      title: "Programar é fácil",
      desc:
        "Programar não é fácil, sempre há aquele que vai dizer “Ah, programar é fácil”. NÃO! Você deveria dizer: “Nossa, você é um gênio, como você faz isso! Eu nunca conseguiria!”",
      img:
        "https://img.ifunny.co/images/4b39b38eb5ad9f962d96837831c1713a7b9a2aee3f6ceb01b3db1648a15c7874_1.jpg",
    },
    {
      id: "2",
      icon: "./assets/globe.png",
      title: "É só uma alteração pequena",
      desc:
        "Nunca “é só uma alteração pequena”. Mudanças não planejadas no decorrer ou após a entrega de um projeto podem provocar diversos bugs nas funcionalidades previstas.",
      img:
        "https://i.pinimg.com/474x/ae/6f/0c/ae6f0c06031ec9671943bd8be104955f.jpg",
    },
    {
      id: "3",
      icon: "./assets/writing.png",
      title: "O café acabou",
      desc:
        "Quero Cafééééé, ééééé, isso aqui é uma porcaria, que não... merda nenhuma. DESCULPE!",
      img:
        "https://c.tenor.com/2tfU35E41ywAAAAC/quero-caf%C3%A9.gif",
    },
  ];

  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="trabalhos" id="trabalhos">
      <div className="slider" 
      style={{ transform: `translateX( -${currentSlide *100}vw)` }}
      >
      {data.map((d) => (
          <div className="container">
            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p>{d.desc}</p>
                  <span>Leia mais</span>
                </div>
              </div>
              <div className="right">
                <img
                  src="https://99designs-blog.imgix.net/blog/wp-content/uploads/2018/10/attachment_100040756-e1538485934255.jpeg?auto=format&q=60&fit=max&w=930"
                  alt=""
                />
              </div>
            </div>
          </div>
        ))}
      </div>
      <img src="assets/arrow2.png" className="arrow left" alt="" onClick={()=>handleClick("left")}/>
      <img src="assets/arrow2.png" className="arrow right" alt="" onClick={()=>handleClick("")}/>
    </div>
  )
}
