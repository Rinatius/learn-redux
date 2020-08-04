import React from 'react';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";

function Crement() {
  const dispatch = useDispatch()

  return  <div>
    <Button variant="contained" onClick={() => dispatch({type: 'INCREMENT', val: 1})}>+</Button>
    <Button variant="contained" onClick={() => dispatch({type: 'INCREMENT', val: -1})}>-</Button>
  </div>;
}

export default Crement;