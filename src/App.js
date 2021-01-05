import React from "react";
import "./App.css";
// import Input from "./components/Form";
import Input2 from "./components/Form2";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <h1>Welcome</h1>
        {/*  <Input /> */}
        <Input2 />
      </div>
    );
  }
}

export default App;
