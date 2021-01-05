import React, { useState } from "react";

export default function Form2() {
  const [value, setValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    e.preventDefault();
  };

  return (
    <div>
      <form onSubmit={handleChange}>
        <input
          type="text"
          onChange={(e) => setValue(e.target.value)}
          placeholder="Say something..."
        />
        <br />
        <br />
        <p>{value}</p>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
}
