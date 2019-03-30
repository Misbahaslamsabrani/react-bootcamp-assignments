import React, { Component } from 'react';

class App extends Component {
    constructor(){
        super();
        this.state={
            text:""
        }
    }
    whenChange = (event) => {
        this.setState({text: event.target.value})
    } 
  render() {
    return (
      <div className="App">
        <div className="container">
          <input type="text" placeholder="Write your text here" 
          value={this.state.text}
          onChange={this.whenChange}
          />
          <p className="echo">You are saying: {this.state.text}</p>
        </div>
      </div>
    );
  }
}

export default App;