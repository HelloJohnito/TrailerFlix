import React from 'react';

function videoItem(props){
  console.log(props)
  return(
    <li>
      <div>{props.name}</div>
      <div>{props.description}</div>
    </li>
  );
}

export default videoItem;
