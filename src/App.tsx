import * as React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
 //tuple, you can multiple arrays
 let aTuple: [string,number] = ["Herbie", 26] ;
 //enum is like an object
 enum Codes {first = 1, second = 2};
 //any
 let firstName: any = "Herbie";
 //void
 const warning = (): void => {
   console.log('Warning');
 }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          The value {aTuple[0]} is of {typeof aTuple} type!
        </p>
      </header>
    </div>
  );
}

export default App;
