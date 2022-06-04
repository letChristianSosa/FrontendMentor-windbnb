import "./CardStyle.css";

const Card = ({ title, rating, type, beds, superhost, photo }) => {
  return (
    <div className="card">
      <img src={photo} alt="" className="photo" />
      <div className="firstLine">
        <div>
          <p className={`${superhost ? "superhost" : ""}`}>
            {superhost ? "SUPERHOST" : ""}
          </p>
          <p className="type">
            {type} {beds ? " . " + beds + " beds" : ""}
          </p>
        </div>
        <p className="rating">{rating}</p>
      </div>
      <div className="secondLine">
        <p className="title">{title}</p>
      </div>
    </div>
  );
};

export default Card;
