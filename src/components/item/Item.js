import { Card } from "react-bootstrap";

const Item = ({name, price}) => {
    return <div>
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title >{name} </Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{price}</Card.Subtitle>
                <Card.Text>
                    Some quick example text to build on the card title and make up the bulk of
                    the card's content.
                </Card.Text>
                <Card.Link href="#">Comprark</Card.Link>
                <Card.Link href="#">agregar al carrito </Card.Link>
            </Card.Body>
        </Card>
    </div>;
};

export default Item;
