import React, { Component } from 'react';
import RandomUser from './components/RandomUser';
import UserData from './UserData';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {UserData: UserData}
  }
  render () {
    return (
    <div className="App">
      <header className="App-header">
       <h1>Random User</h1>
      </header>
      <RandomUser />
    </div>
  )
  }
}

export default App;
