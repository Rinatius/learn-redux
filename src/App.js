import React from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Crement from './components/Crement/Crement'
import Button from "@material-ui/core/Button";


class App extends React.Component {

  state = {
    counter: 0,
    results: []
  }

  handleCrementClick = (number) => {
    this.setState({counter: this.state.counter + number})
  };

  handleStoreClick = (count) => {
    this.setState({results: this.state.results.concat(count)})
  }

  render() {
    return (
      <div className="App">
        <TextField id="standard-basic"
                   label="Standard"
                   value={this.state.counter}/>
        <Crement onCrClick={this.handleCrementClick}/>
        <p/>
        <Button variant="contained" onClick={() => this.handleStoreClick(this.state.counter)}>STORE</Button>
        <ul>
          {this.state.results.map(r => <li>{r}</li>)}
        </ul>
      </div>
    );
  }
}

export default App;
