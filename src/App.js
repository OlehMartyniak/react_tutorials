import React from 'react';
import { useState } from "react";

import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

const App = () => {

//   const groceryList = [
//     {
//         id: 1,
//         checked: false,
//         item: "Tomatoes"
//     },
//     {
//         id: 2,
//         checked: false,
//         item: "Orange Juice"
//     },
//     {
//         id: 3,
//         checked: false,
//         item: "Ice-Cream"
//     }
// ];
// const [items,setItems] = useState(groceryList);

const [items,setItems] = useState(JSON.parse(localStorage.getItem("shoppingList")));

const [newItem,setNewItem] = useState('');

const [search,setSearch] = useState('');

const setAndSaveItems = (newItems) => {
  setItems(newItems);
  localStorage.setItem("shoppingList",JSON.stringify(newItems))
};

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false, item};
  const listItems = [...items, myNewItem];
  setAndSaveItems(listItems)
};

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
  setAndSaveItems(listItems)
};

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setAndSaveItems(listItems)
};

const handleSubmit = (e) => {
  e.preventDefault();
  if (!newItem) return;
  addItem(newItem)
  setNewItem('')
};

  return (
    <div>
      <Header/>
      <SearchItem search={search} setSearch={setSearch}/>
      <AddItem newItem={newItem} setNewItem={setNewItem} handleSubmit={handleSubmit}/>
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        setItems={setItems}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>
    </div>
  );
};

export default App;
