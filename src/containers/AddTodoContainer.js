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

export default connect(mapStateToProps, mapDispatchToProps)(AddTodo);
