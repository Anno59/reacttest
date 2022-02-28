import { connect } from "react-redux";
import Footer from "../component/Footer";
import { setFilter } from "../actions";

const mapStateToProps = (state) => ({
  filter: state.filter,
});

const mapDispatchToProps = (dispatch) => ({
  setVisibilityFilter: (filter) => dispatch(setFilter(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
