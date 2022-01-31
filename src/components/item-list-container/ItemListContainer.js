import Item from "../item/Item"

const items = [
    {id:"1", name:"articulo1", price: "100", stock: 10},
    {id:"2", name:"articulo2", price: "200", stock: 20},
    {id:"3", name:"articulo3", price: "300", stock: 15},
    {id:"4", name:"articulo4", price: "400", stock: 12},
    {id:"5", name:"articulo5", price: "500", stock: 1},
];

const ItemListContainer = () => {
    return (
        <div>
            {items.map(({id,name,price,stock}) => (
                <Item key={id} name={name} price={price} stock={stock}/>
            ))}
        </div>
        );
    };

export default ItemListContainer;
