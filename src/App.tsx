import React, {useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import {ExpressionMathematique} from "./Model/Connaissances/ExpertiseMetier/ExpressionMathematique";

function App() {

  useEffect(() => {
    let expression = new ExpressionMathematique('a + 2', {a: 3, b: 4});
    let result = expression.evaluateExpression();
    console.log(result)
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
