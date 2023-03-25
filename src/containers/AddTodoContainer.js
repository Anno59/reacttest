import { connect } from "react-redux";
import AddTodo from "../component/AddTodo";
import { setTodoText, addToDo } from "../actions";

const mapStateToProps = (state) => ({
  text: state.text,
});

const mapDispatchToProps = (dispatch) => ({
  setTodoText: (text) => dispatch(setTodoText(text)),
  addTodo: (text) => dispatch(addToDo(text)),
});

function fetchData(message, dispatch) {
  dispatch({ type: "LOADING", message });
  setTimeout(() => {
    dispatch({ type: "LOADED" });
  }, 1000);
}

function App() {
  const onClick = () => {
    fetchData("data is loading", dispatch);
  };

  return (
    <div>
      <button onClick={onClick}>click</button>
    </div>
  );
}

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
