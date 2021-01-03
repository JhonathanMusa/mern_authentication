import React from "react";

class Input extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ value: e.target.value });
  }

  handleSubmit(e) {
    console.log(this.state.value);
    e.preventDefault();
  }

  render() {

    return (
      <form onSubmit={this.handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Say Something..."
          onChange={this.handleChange}
        />
        <br /><br />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Input;
