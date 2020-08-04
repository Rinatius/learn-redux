import React from 'react';
import Button from '@material-ui/core/Button';
import {useDispatch} from "react-redux";

function Crement() {
  const dispatch = useDispatch()
  
  const onButtClick = (number) => {
    dispatch({type: 'INCREMENT', val: number})
  }

  return  <div>
    <Button variant="contained" onClick={() => onButtClick(1)}>+</Button>
    <Button variant="contained" onClick={() => onButtClick(-1)}>-</Button>
  </div>;
}

export default Crement;