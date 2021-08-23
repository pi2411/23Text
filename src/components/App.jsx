import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [item, setItem] = useState([
    {
      title: "",
      content: ""
    }
  ]);
  function pushButton(inputText) {
    setItem((prevItems) => {
      return [...prevItems, inputText];
    });
  }
  function Delete(id) {
    setItem((prevItems) => {
      return prevItems.filter((item, index) => {
        return index !== id;
      });
    });
  }
  return (
    <div>
      <Header />
      <CreateArea pushButton={pushButton} />

      {item.map((item, index) => (
        <Note
          key={index}
          id={index}
          title={item.title}
          content={item.content}
          delete={Delete}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
