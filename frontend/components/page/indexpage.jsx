import React, { Component } from 'react';
import NavbarContainer from '../display/navbarContainer';
import VideoContainer from '../video/videoContainer';
import Footer from '../display/footer';

class IndexPage extends Component {
  constructor(props){
    super(props);
  }


  render(){
    return(
      <div className="indexpage-container">
        <NavbarContainer history={this.props.history}/>
        <VideoContainer/>
        <Footer />
      </div>
    );
  }
}


export default IndexPage;
