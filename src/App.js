import React from 'react';
import { connect } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './App.css';
import Crement from './components/Crement/Crement'


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <TextField id="standard-basic"
                   label="Standard"
                   value={this.props.ctr}/>
        <Crement onCrClick={this.props.onIncrement}/>
        <p/>
        <Button variant="contained"
                onClick={() => this.props.onStore(this.props.ctr)}>
          STORE
        </Button>
        <ul>
          {this.props.res.map(r => <li>{r}</li>)}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    ctr: state.counter,
    res: state.results
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrement: (val) => dispatch({type: 'INCREMENT', val: val}),
    onStore: (val) => dispatch({type: 'STORE', val:val})
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
