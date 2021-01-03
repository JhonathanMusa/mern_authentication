import React from "react";
import "./App.css";
import Input from "./components/Form";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        <Input />
      </div>
    );
  }
}

export default App;
