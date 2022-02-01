import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import * as actionCreator from './store/actions/actions';
import logo from './logo.svg';

const App = (props) => {
  return (
    <div className="App">
      <div>
        Age: <span>{props.age}</span>
      </div>
      <button
        onClick={() => {
          const val = 1;
          props.onAgeUp(val);
          props.onAddHistory(props.age + val);
        }}
      >
        AGE UP
      </button>
      <button
        onClick={() => {
          const val = 1;
          props.onAgeDown(val);
          props.onAddHistory(props.age - val);
        }}
      >
        AGE DOWN
      </button>

      {props.loading && <img src={logo} className="App-logo" />}

      <hr />
      <div>History</div>
      <div>
        <ul>
          {props.history.map((el) => (
            <li key={el.id} onClick={() => props.onDelItem(el.id)}>
              {el.age}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const mapStateToProps = (store) => {
  return { 
    age: store.ageState.age,
    history: store.historyState.history,
    loading: store.loadingState.loading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    // For Thunk
    // onAgeUp: (val) => dispatch(actionCreator.ageUp(val)),
    // onAgeDown: (val) => dispatch(actionCreator.ageDown(val)),
    // For SAGA
    onAgeUp: (value) => dispatch({ type: 'AGE_UP', value }),
    onAgeDown: (value) => dispatch({ type: 'AGE_DOWN', value }),
    onAddHistory: (age) => dispatch({ type: 'ADD_ITEM', age }),
    onDelItem: (id) => dispatch({ type: 'DEL_ITEM', key: id }),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
