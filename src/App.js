import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import User from './users/User';
import {BrowserRouter as Router} from 'react-router-dom';
import Route from 'react-router-dom/Route';


function SayHello(){
  return <h1>Hello</h1>
}
function Header(){
  return <h1>This is a header</h1>
}
class App extends Component {
  render() {
    /*return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
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
    );*/

    return (
      <Router>
      <div className="App">
        <Header title="dsfs"></Header>
        <Route path="/user" exact strict component = {User}/>
     <Route path="/" exact strict render={
          ()=>{
            return(
  
           <h1>Welcome to home</h1>
            )
          }
        }/>

      </div>
      </Router>
    )
  }
}

export default App;
