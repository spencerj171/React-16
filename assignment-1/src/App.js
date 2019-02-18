import React, { Component } from 'react';
import './App.css';
import UserInput from "./Components/UserInput/UserInput";
import UserOutput from "./Components/UserOutput/UserOutput";

class App extends Component {
  state = {
    username: "Spencer"
  }

  OnChangeHandle = (e) => {
    this.setState({
      username: e.target.value
    })
  }

  render() {
    return (
      <div>
        <UserInput change={ this.OnChangeHandle.bind(this) } username={ this.state.username }/>
        <UserOutput username={ this.state.username } />
        <UserOutput username={ this.state.username } />
      </div>
    );
  }
}

export default App;
