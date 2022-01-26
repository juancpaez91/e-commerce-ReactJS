import Item from "../item/Item"

const items = [
    {id:"1", name:"articulo1", price: "100"},
    {id:"2", name:"articulo2", price: "200"},
    {id:"3", name:"articulo3", price: "300"},
    {id:"4", name:"articulo4", price: "400"},
    {id:"5", name:"articulo5", price: "500"},
];

const ItemListContainer = () => {
    return (
        <div>
            {items.map(({id,name,price}) => (
                <Item key={id} name={name} price={price}/>
            ))}
        </div>
        );
    };

export default ItemListContainer;
