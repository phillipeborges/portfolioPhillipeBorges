import "./depoimentos.scss"

export default function Depoimentos() {

  const data = [
    {
      id: 1,
      name: "Manuel Alves",
      title: "CEO BraCorp",
      img:
        "assets/Manuel.png",
      icon: "assets/twitter.png",
      desc:
        "Melhores indicações para adquirir sua placa de vídeo. Acesse: www.compufree.golpe e seja passado pra trás, assim como eu fui.",
    },
    {
      id: 2,
      name: "Cayo Magno",
      title: "Infectologista",
      img:
        "assets/Cayo.png",
      icon: "assets/youtube.png",
      desc:
        "A terra nao é plana, vacinas funcionam, nós fomos à lua, aquecimento global é real, defenda a ciência.",
      featured: true,
    },
    {
      id: 3,
      name: "Adão Raul",
      title: "Desenvolvedor Sênior Imigrante",
      img:
        "assets/Panasync2.png",
      icon: "assets/linkedin.png",
      desc:
        "Compro jogos sem saber o que são, só por estar em promoção. Se vou me decepcionar depois, é outra história",
    },
  ];

  return (
    <div className="depoimentos" id="depoimentos">
        <h1>Depoimentos</h1>
        <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img
                className="user"
                src={d.img}
                alt=""
              />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">
              {d.desc}
            </div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
        </div>
    </div>
  )
}
