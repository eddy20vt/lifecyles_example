import React, { Component } from 'react';
import Button from './components/button'
import Counter from './components/counter'
import './App.css';

class App extends Component {
  constructor(props){
    super();
    this.state = { 
      counter: 0
    };
  }
  onIncrementClick = () =>{
    return (
      this.setState({counter:this.state.counter + 1}))
  }

  onDecrementClick = () =>{
    return (
      (this.state.counter - 1 >= 0)
      ? this.setState({counter:this.state.counter - 1})
      : this.setState({counter:this.state.counter})
      )
  }

  render() {
    return (
      <div className="App">
        {'Mi contador'}
        <div>
          <Button 
            text='+'
            onClick={this.onIncrementClick}
          />
          {this.state.counter <= 5 &&
            <Counter value={this.state.counter}/>
          }
          <Button
            text='-'
            onClick={this.onDecrementClick}
          />
        </div>
      </div>
    );
  }
}

export default App;
