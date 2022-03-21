import "./portfolioList.scss";

export default function PortfolioList({ id, title, ativa, setSelected }) {
  return (
    <li
      className={ativa ? "portfolioList ativa" : "portfolioList"}
      onClick={() => setSelected(id)}
    >
      {title}
    </li>
  );
}
