import React from 'react';
import { useReducer } from 'react';
import reducer from '../reducers';
import { initialState } from '../reducers';
import { ADD_ONE, applyNumber, changeOperator } from '../actions';
import './App.css';

import TotalDisplay from './TotalDisplay';
import CalcButton from './CalcButton';



function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const handleAddOne = () => {
    return dispatch({ type: ADD_ONE});
    }
  const handleApplyNumber = (number) => {
    return dispatch(applyNumber(number));
    }
  const handleChangeOperator = (operator) => {
    return dispatch(changeOperator(operator));
  }
  return (
    <div className="App">
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#"> Reducer Challenge</a>
      </nav>

      <div className = "container row mt-5">
        <div className="col-md-12 d-flex justify-content-center">
          <form name="Cal">
            
            <TotalDisplay value={state.total}/>
            <div className="row details">
              <span id="operation"><b>Operation:</b> {state.operation}</span>
              <span id="memory"><b>Memory:</b> {state.memory}</span>
            </div>
            
            <div className="row">
              <CalcButton value={"M+"}/>
              <CalcButton value={"MR"}/>
              <CalcButton value={"MC"}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(1)} value={1}/>
              <CalcButton onClick={() => handleApplyNumber(2)} value={2}/>
              <CalcButton onClick={() => handleApplyNumber(3)} value={3}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(4)} value={4}/>
              <CalcButton onClick={() => handleApplyNumber(5)} value={5}/>
              <CalcButton onClick={() => handleApplyNumber(6)} value={6}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleApplyNumber(7)} value={7}/>
              <CalcButton onClick={() => handleApplyNumber(8)} value={8}/>
              <CalcButton onClick={() => handleApplyNumber(9)} value={9}/>
            </div>

            <div className="row">
              <CalcButton onClick={() => handleChangeOperator("+")} value={"+"}/>
              <CalcButton onClick={() => handleChangeOperator("*")} value={"*"}/>
              <CalcButton onClick={() => handleChangeOperator("-")} value={"-"}/>
            </div>

            <div className="row ce_button">
              <CalcButton value={"CE"}/>
            </div>

          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
