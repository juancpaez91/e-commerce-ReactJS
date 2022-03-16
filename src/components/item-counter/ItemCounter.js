import { useState } from "react";
import { Button } from "react-bootstrap";
import "./itemCounter.css"


const ItemCounter = ({stock, onClick}) => {
const [counter, setCounter] = useState(0);


const updateCounter = () =>{
    if (counter<stock) {
        setCounter(counter+1, onClick(counter+1))
    }
    else{
        alert("No tenemos stock suficiente")
    }
}

const decrementCounter =() =>{
    if (counter <= stock && counter!=0) {
        setCounter(counter-1, onClick(counter-1))
        
    } 
    else {
        alert("ya no quedan articulos en tu changuito")
    }
}

return (
    <div className="addToCart">
        <Button variant="primary" onClick={updateCounter}> + </Button>
            <h3 className="cantidadItems"> {counter} </h3>
        <Button variant="primary" onClick={decrementCounter}> - </Button>
    </div>
);

};

export default ItemCounter