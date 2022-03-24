import { Link } from "react-router-dom";

function CardItem(props) {
  return (
    <>
      <li className="cardsItem">
        <Link className="cardsItemLink" to={props.path}>
          <figure className="cardsItemPicWrap" data-category={props.label}>
            <img
              className="cardsItemImg"
              alt="Travel Image"
              src={props.src}
            />
          </figure>
          <div className="cardsItemInfo">
            <h5 className="cardsItemText">{props.text}</h5>
          </div>
        </Link>
      </li>
    </>
  );
}

export default CardItem;
