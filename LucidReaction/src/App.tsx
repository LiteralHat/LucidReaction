import React from 'react'
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["Potatoes", "San Francisco", "Weezer", "Hah"];

  const handleSelectItem = (item: string) => {
    console.log(item);
  }

  return <div><ListGroup items={items} heading='Words' onSelectItem={handleSelectItem} /></div>
};

export default App