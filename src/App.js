import React, { useEffect } from 'react';
import { useState } from "react";

import './App.css';
import Content from './Content';
import Header from './Header';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';

const App = () => {

const API_URL = "http://localhost:3500/items";
const [items,setItems] = useState([]);
const [newItem,setNewItem] = useState('');
const [search,setSearch] = useState('');
const [fetchError, setFetchError] = useState(null);
const [isLoading,setIsLoading] = useState(true);

useEffect (()=> {
  const fetchItem = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw Error("Did not receive expected data");
      const listItems = await response.json();
      setItems(listItems);
      setFetchError(null)
    } catch (err) {
      setFetchError(err.message)
    } finally {
      setIsLoading(false)
    }
  }
  setTimeout(()=> {
    fetchItem()
  },2000)
},[]);

const addItem = (item) => {
  const id = items.length ? items[items.length - 1].id + 1 : 1;
  const myNewItem = { id, checked: false, item};
  const listItems = [...items, myNewItem];
  setItems(listItems)
};

const handleCheck = (id) => {
  const listItems = items.map((item) => item.id === id ? {...item, checked: !item.checked} : item)
  setItems(listItems)
};

const handleDelete = (id) => {
  const listItems = items.filter((item) => item.id !== id);
  setItems(listItems)
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
      <main>
        {isLoading && <p>Loading Items...</p>}
        {fetchError && <p style={{color:"red",margin:"20px 10px"}}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          setItems={setItems}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />}
      </main>
      <Footer length={items.length}/>
    </div>
  );
};

export default App;
