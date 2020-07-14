import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Crement from './components/Crement/Crement'


class App extends React.Component {

  state = {
    counter: 0
  }
  handleCrementClick = (number) => {
    this.setState({counter: this.state.counter + number})
  };


  render() {
    return (
      <div className="App">
        <TextField id="standard-basic"
                   label="Standard"
                   value={this.state.counter}/>
        <Crement onCrClick={this.handleCrementClick}/>
      </div>
    );
  }
}

export default App;
