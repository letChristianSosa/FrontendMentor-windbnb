import Card from "../Card/Card";
import "./ContainerCardsStyle.css";
import stays from "../../stays.json";

const ContainerCards = () => {
  return (
    <div className="container">
      <div className="locationStays">
        <h1>Stays in Finland</h1>
        <p>+12 stays</p>
      </div>
      <div className="containerCards">
        {stays.map((element) => {
          return (
            <Card
              key={element.title}
              title={element.title}
              type={element.type}
              rating={element.rating}
              superhost={element.superHost}
              photo={element.photo}
              beds={element.beds}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ContainerCards;
