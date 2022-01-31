import { useState } from "react";
import { Button } from "react-bootstrap";


const ItemCounter = ({stock}) => {
const [counter, setCounter] = useState(0);


const updateCounter = () =>{
    if (counter<stock) {
        setCounter(counter+1)
    }
    else{
        alert("No tenemos stock suficiente")
    }
}

const decrementCounter =() =>{
    if (counter <= stock && counter!=0) {
        setCounter(counter-1)
        
    } 
    else {
        alert("ya no quedan articulos en tu changuito")
    }
}

return (
    <>
        <Button variant="primary" onClick={updateCounter}> Agregar al carrito </Button>
            <p> {counter} </p>
        <Button variant="primary" onClick={decrementCounter}> Quitar del carrito </Button>
    </>
);

};

export default ItemCounter