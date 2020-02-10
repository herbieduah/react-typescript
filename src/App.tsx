import React,{useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Message from './Message';


// interface IUser {
//   name: string;
//   message:  string;
//   password: string;
// }

const [state, setState] = useState<{name: string, message: string} | null>(null);

function App() {
  const [state, setState] = useState({
    name: "Herbie",
    message: "Testing the message"
  });
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Message name={state.name} message = {state.message}/>
      </header>
    </div>
  );
}

export default App;
