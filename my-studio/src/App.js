import logo from './logo.svg';
import './App.css';
import Amplify, { API } from 'aws-amplify';
import { useState } from 'react';

const viewAPI = 'viewSessions';
const path = '/sessions';

function App() {
  const [title,setTitle] = useState("");
  function getSessions() {
    API.get(viewAPI, path).then(response => {
      setTitle(response);
    }).catch(error => {
      console.log(error);
    })
  }
  return (
    <div className="App">
      <header className="App-header">
        <button onClick={getSessions}>View Sessions</button>
        <p>
          {title}
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
