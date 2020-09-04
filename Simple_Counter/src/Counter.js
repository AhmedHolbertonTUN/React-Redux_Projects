import React from "react";
import "./styles.css";
import { Increment, Decrement } from "./redux/Action";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <div className="container">
      <button className="bouton6" onClick={props.Increment}>
        <h4>+</h4>
      </button>
      <h2 className="counterbox">{props.counter}</h2>
      <button className="bouton6" onClick={props.Decrement}>
        <h4>-</h4>
      </button>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    counter: state.counter
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    Increment: () => dispatch(Increment()),
    Decrement: () => dispatch(Decrement())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
