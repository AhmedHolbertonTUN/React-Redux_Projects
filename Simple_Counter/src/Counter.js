import React from "react";
import "./styles.css";
import { Increment, Decrement, Reset } from "./redux/Action";
import { connect } from "react-redux";

function Counter(props) {
  return (
    <>
      <div className="container">
        <button className="bouton6" onClick={props.Increment}>
          <h4>+</h4>
        </button>
        <h2 className="counterbox">{props.counter}</h2>
        <button className="bouton6" onClick={props.Decrement}>
          <h4>-</h4>
        </button>
      </div>
      <button className="bouton6" onClick={props.Reset}>
        <h4>RESET</h4>
      </button>
    </>
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
    Decrement: () => dispatch(Decrement()),
    Reset: () => dispatch(Reset())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
