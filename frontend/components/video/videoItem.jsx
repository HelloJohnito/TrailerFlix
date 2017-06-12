import React from 'react';

function videoItem(props){
  return(
    <li>
      <div>{props.name}</div>
      <div>{props.description}</div>
    </li>
  );
}

export default videoItem;
