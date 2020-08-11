import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

import './App.css';
import Crement from './components/Crement/Crement'

import { crement } from "./store/slices/crement";
import { store } from "./store/slices/storage";


const App = () => {

  const counter = useSelector(state => state.crement);
  const results = useSelector(state => state.storage);
  const dispatch = useDispatch()

  const handleCrementClick = (number) => {
    console.log(number)
    dispatch(crement(number));
  };

  return (
    <div className="App">
      <TextField id="standard-basic"
                 label="Standard"
                 value={counter}/>
      <Crement onCrClick={handleCrementClick}/>
      <p/>
      <Button variant="contained" onClick={() => dispatch(store(counter))}>STORE</Button>
      <ul>
        {results.map(r => <li>{r}</li>)}
      </ul>
    </div>
  );
};

export default App;

