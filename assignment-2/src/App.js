import React, { Component } from 'react';
import './App.css';
import Validation from "./Components/Validation/Validation";
import Char from "./Components/Char/Char";

class App extends Component {
  state = {
    text: []
  }

  onChangeHandle = (e) => {
    this.setState({text: e.target.value.split("")});
  }

  onClickHandle = (index) => {
    const text = [...this.state.text];
    text.splice(index, 1);
    this.setState({text:text});
  }

  render() {
    const charArray = this.state.text.map((char, index) => {
      return (
        <Char
          key={index}
          char={char}
          onClick={() => this.onClickHandle(index)}
        />
      );
    });

    return (
      <div className="App">
        <input type="text" onChange={this.onChangeHandle} value={this.state.text.join("")} />
        <p>{this.state.text.length}</p>
        <Validation textLength={this.state.text.length}/>
        {charArray}
      </div>
    );
  }
}

export default App;
