import React from 'react';

function videoItem(props){
  return(
    <li className="video-thumbnail">
      <div className="video-title">{props.name}</div>
      <div className="video-playbutton">playbutton</div>
      <img className="video-img" src={props.img} />
    </li>
  );
}

export default videoItem;
