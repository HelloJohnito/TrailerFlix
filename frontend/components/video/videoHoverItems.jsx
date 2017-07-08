import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import ModalStyleDetail from './modalStyleDetail';
import VideoDetailContainer from './VideoDetailContainer';


class VideoHoverItems extends Component {
  constructor(){
    super();

    this.openModal = this.openModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state={
      modalOpen: false
    };
  }

  openModal(){
    this.setState({modalOpen: true});
  }

  closeModal(){
    this.setState({modalOpen: false});
  }


  render(){
    return(
      <div className="video-thumbnail">
        <div className="video-title">{this.props.video.name}</div>
        <Link to={`/video/${this.props.video._id}`} className="video-playbutton-link">
          <img src="http://res.cloudinary.com/deh9l9lyq/image/upload/c_scale,h_100/v1497473078/playbutton_coznrx.png" className="video-playbutton" alt="play" />
        </Link>
        <div className="video-detail-button-container">
          <button onClick={this.openModal}>Details</button>
        </div>
        <img className="video-img" src={this.props.video.img} />


        <Modal
          contentLabel="modal-greeting"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyleDetail}>
            <button className="modal-close" onClick={this.closeModal}>X</button>
          <VideoDetailContainer video ={this.props.video} user={this.props.user}/>
        </Modal>
      </div>
    );
  }
}

export default VideoHoverItems;
