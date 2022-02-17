import { Card } from "react-bootstrap";
import ItemCounter  from "../item-counter/ItemCounter"
import { Link } from "react-router-dom";


const Item = ({id, name, price, image, stock=10, description, showItem}) => {

    return <div>
        <Card style={{ width: '18rem' }} id={id} onClick={() => showItem(id)}>
            <Card.Body>
                <Card.Img variant="top" src={image} />
                <Card.Title >
                    <Link to={"/item/" + id} >{name}</Link>
                </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
                <Card.Text>{description} </Card.Text>
                <ItemCounter stock={stock}/>
            </Card.Body>
        </Card>
    </div>;
};

export default Item;
