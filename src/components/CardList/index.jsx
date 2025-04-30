import "../../styles/components/CardList/cardlist.scss";
import Card from "../Card";
import logements from "../../data/logements.json";

export default function CardList() {
  return (
    <section className="card-list">
      {logements.map((logement) => (
        <Card key={logement.id} title={logement.title} cover={logement.cover} id={logement.id} />
      ))}
    </section>
  );
}
