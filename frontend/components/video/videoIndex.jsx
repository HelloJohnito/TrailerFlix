import React, { Component } from 'react';


class VideoIndex extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllVideos();
  }

  render(){
    console.log(this.props);
    return(
      <div>
        testing
      </div>
    );
  }
}

export default VideoIndex;
