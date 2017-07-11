import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import VideoSlider from './videoslider';


class VideoIndex extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.fetchAllVideos();
    this.props.verify();
  }

  render(){

    if(!this.props.video.num){
      return <div className="loader"></div>;
    }

    return(
      <div>
        <div className="video-category-container-first">
          <div className="video-category-title">Action</div>
          <VideoSlider video = {this.props.video.action} user={this.props.user}/>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Comedy</div>
          <VideoSlider video = {this.props.video.comedy} user={this.props.user}/>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Documentary</div>
          <VideoSlider video = {this.props.video.documentary} user={this.props.user}/>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Family</div>
          <VideoSlider video = {this.props.video.family} user={this.props.user}/>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Fantasy</div>
          <VideoSlider video = {this.props.video.fantasy} user={this.props.user}/>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Horror</div>
          <VideoSlider video = {this.props.video.horror} user={this.props.user}/>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Mystery</div>
          <VideoSlider video = {this.props.video.mystery} user={this.props.user}/>
        </div>

        <div className="video-category-container">
          <div className="video-category-title">Romance</div>
          <VideoSlider video = {this.props.video.romance} user={this.props.user}/>
        </div>

      </div>
    );
  }
}

export default VideoIndex;
