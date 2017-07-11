import React, {Component} from 'react';
import Modal from 'react-modal';
import ModalStyleDetail from '../modal/modalStyleDetail';
import VideoDetailContainer from '../video/VideoDetailContainer';

class UserProfileItems extends Component {
  constructor(props){
    super(props);

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
      <li className="video-detail-info">
        <div>
          <h1>{this.props.video.name}</h1>
          <img onClick={this.openModal} src={this.props.video.img} />
        </div>

        <Modal
          contentLabel="modal-greeting"
          isOpen={this.state.modalOpen}
          onRequestClose={this.closeModal}
          style={ModalStyleDetail}>
            <button className="modal-close-detail" onClick={this.closeModal}>X</button>
          <VideoDetailContainer video ={this.props.video} user={this.props.user} formType={"userProfile"}/>
        </Modal>
      </li>
    );
  }
}

export default UserProfileItems;
