import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import TextField from '@material-ui/core/TextField';
import Crement from './components/Crement/Crement'
import Button from "@material-ui/core/Button";


const App = () => {

  const [counter, setCounter] = useState(0);
  const [results, setResults] = useState([]);

  const handleCrementClick = (number) => {
    setCounter(counter + number)
  };

  return (
    <div className="App">
      <TextField id="standard-basic"
                 label="Standard"
                 value={counter}/>
      <Crement onCrClick={handleCrementClick}/>
      <p/>
      <Button variant="contained" onClick={() => setResults(results.concat(counter))}>STORE</Button>
      <ul>
        {results.map(r => <li>{r}</li>)}
      </ul>
    </div>
  );
};

export default App;
