import React, { useState } from "react";

function CreateArea(props) {
  const [contact, setContact] = useState({
    title: "",
    content: ""
  });
  function handleChange(event) {
    const { name, value } = event.target;
    setContact((prevValue) => {
      return { ...prevValue, [name]: value };
    });
    event.preventDefault();
  }
  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          onChange={handleChange}
          name="title"
          placeholder="Title"
          value={contact.title}
        />
        <textarea
          onChange={handleChange}
          name="content"
          placeholder="Take a note..."
          rows="3"
          value={contact.content}
        />
        <button
          onClick={() => {
            props.pushButton(contact);
            setContact({ title: "", content: "" });
          }}
          type="submit"
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
