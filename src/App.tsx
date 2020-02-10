import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  // let firstValue: string = 'Herbie';
  // let firstValue: number = 26;
  // let firstValue: boolean = true;
  // let firstValue: number[] = [2,3,56];
  // let firstValue: Array<number> = [2,3,56];
  let firstValue: Array<string> = ["one","two","Herbie"];

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {firstValue} is of {typeof firstValue} type!
        </p>
      </header>
    </div>
  );
}

export default App;
