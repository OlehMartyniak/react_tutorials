import { useState } from "react";
import {FaTrashAlt} from "react-icons/fa";

const Content = () => {

    const groceryList = [
        {
            id: 1,
            checked: false,
            item: "Tomatoes"
        },
        {
            id: 2,
            checked: false,
            item: "Orange Juice"
        },
        {
            id: 3,
            checked: false,
            item: "Ice-Cream"
        }
    ];

    const [items,setItems] = useState(groceryList);

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
        setItems(listItems);
        localStorage.setItem("shoppingList",JSON.stringify(listItems))
    };

    const handleDelete = (id) => {
        const listItems = items.filter((item) => item.id !== id);
        setItems(listItems);
        localStorage.setItem("shoppingList",JSON.stringify(listItems))
    };

    return (
        <main>
            <ul>
                {items.map(item =>
                    <li className="item" key={item.id} onDoubleClick={()=> handleCheck(item.id)}>

                        <input type="checkbox" checked={item.checked} onChange={()=> handleCheck(item.id)}/>
                        <label style={(item.checked) ? {textDecoration: 'line-through'} : null}>{item.item}</label>
                        <FaTrashAlt role="button" tabIndex="0" onClick={()=> handleDelete(item.id)}/>

                    </li>)}
            </ul>
        </main>
    );
};

export default Content;