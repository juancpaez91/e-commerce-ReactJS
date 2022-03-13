import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import ItemCounter  from "../item-counter/ItemCounter"
import "./itemCard.css"

const Item = ({id, name, price, image,}) => {
    return <div>
        <Card className="itemCard" style={{ width: '18rem' }} id={id}>
            <Card.Body>
                <Card.Img className="cardImage" variant="top" src={image} />
                <Card.Title >
                    <Link className="cardName" to={"/item/" + id} >{name}</Link>
                </Card.Title>
                <Card.Subtitle className="cardSubname">{price}</Card.Subtitle>
                {/* <Card.Text>{description} </Card.Text> */}
                {/* <ItemCounter/> */}
            </Card.Body>
        </Card>
    </div>;
};

export default Item;
