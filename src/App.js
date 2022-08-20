import React from 'react';
import { useState } from "react";

import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';

const App = () => {

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
    <div>
      <Header/>
      <Content items={items} setItems={setItems} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
};

export default App;
