import React, { Component } from "react";

class AddTodo extends Component {
  handleOnClick = () => {
    const { text } = this.props;
    this.props.addTodo(text);
  };

  handleOnChange = (e) => {
    this.props.setTodoText(e.target.value);
  };

  render() {
    return (
      <div>
        <input value={this.props.text} onChange={this.handleOnChange} />
        <button onClick={this.handleOnClick}>add</button>
      </div>
    );
  }
}

export default AddTodo;
