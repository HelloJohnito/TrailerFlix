import React, { Component } from 'react';
import NavbarContainer from '../display/navbarContainer';
import VideoContainer from '../video/videoContainer';

class IndexPage extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="indexpage-container">
        <NavbarContainer />
        <VideoContainer/>
      </div>
    );
  }
}


export default IndexPage;
