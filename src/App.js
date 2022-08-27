import React from "react";
import { useState, useEffect } from "react";

import "./App.css";
import List from "./List";
import Form from "./Form";

const App = () => {
  const API_URL = "https://jsonplaceholder.typicode.com";

  const [items, setItems] = useState([]);
  const [requestedType, setRequestedType] = useState("users");

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}/${requestedType}`);
        const data = await response.json();
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchItems();
  }, [requestedType]);

  return (
    <div>
      <Form requestedType={requestedType} setRequestedType={setRequestedType} />
      <List items={items} />
    </div>
  );
};

export default App;
