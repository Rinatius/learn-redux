import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './App.css';
import Crement from './components/Crement/Crement'


const App = () => {

  const counter = useSelector(state => state.counter);
  const results = useSelector(state => state.results);
  const dispatch = useDispatch()

  const handleCrementClick = (number) => {
    dispatch({type: 'INCREMENT', val: number})
  };

  return (
    <div className="App">
      <TextField id="standard-basic"
                 label="Standard"
                 value={counter}/>
      <Crement onCrClick={handleCrementClick}/>
      <p/>
      <Button variant="contained" onClick={() => dispatch({type: 'STORE', val: counter})}>STORE</Button>
      <ul>
        {results.map(r => <li>{r}</li>)}
      </ul>
    </div>
  );
};

export default App;

