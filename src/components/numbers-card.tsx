import "./numbers-card.css";

const NumbersCard = (props: {
  imageAlt: string;
  imageSrc: string;
  number: string;
  text: string;
}) => {
  return (
    <div className="numbers-card-numbers-card">
      <img
        alt={props.imageAlt}
        src={props.imageSrc}
        className="numbers-card-image"
      />
      <span className="numbers-card-number">{props.number}</span>
      <span className="numbers-card-text">{props.text}</span>
    </div>
  );
};

NumbersCard.defaultProps = {
  imageSrc: "/message-200h.png",
  text: "sessions",
  imageAlt: "image",
  number: "2,148",
};

export default NumbersCard;