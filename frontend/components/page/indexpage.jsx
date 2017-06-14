import React, { Component } from 'react';
import Navbar from '../display/nav';
import VideoContainer from '../video/videoContainer';

class IndexPage extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="indexpage-container">
        <Navbar />
        <VideoContainer/>
      </div>
    );
  }
}


export default IndexPage;
