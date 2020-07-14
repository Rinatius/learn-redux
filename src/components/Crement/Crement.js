import React from 'react';
import Button from '@material-ui/core/Button';

function Crement(props) {
  const onButtClick = (number) => {
    props.onCrClick(number)
  }

  return  <div>
    <Button variant="contained" onClick={() => onButtClick(1)}>+</Button>
    <Button variant="contained" onClick={() => onButtClick(-1)}>-</Button>
  </div>;
}

export default Crement;