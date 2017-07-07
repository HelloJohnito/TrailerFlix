import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/sessionFormContainer';
import Modal from 'react-modal';
import ModalStyle from './modalStyle';



class Greeting extends Component{
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
    this.onModalClose = this.onModalClose.bind(this);

    this.state={
      modalOpen: false,
      login: false
    };
  }

  handleClick(bool){
    this.setState({modalOpen: true, login: bool});
  }

  onModalClose(){
    this.setState({modalOpen: false});
  }

  handleLogOut(){
    this.props.logout();
    this.props.history.push("/");
  }

  render(){
    let content = (this.state.login) ? <SessionFormContainer formType="login"/> : <SessionFormContainer formType="signup"/>;

    if(!this.props.currentUser){
      return(
        <div className="flex">
          <a className="nav-button" onClick={this.handleClick.bind(this, false)}>Sign up</a>
          <a className="nav-button" onClick={this.handleClick.bind(this, true)}>Log In</a>
          <Modal
            contentLabel="modal-greeting"
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyle}>
              <button className="modal-close" onClick={this.onModalClose}>X</button>
              {content}
          </Modal>
        </div>
      );
    }
    else {
      return(
        <div className="flex">
          <Link to={"/user"} className="nav-button">{this.props.currentUser.username}</Link>
          <button onClick={this.handleLogOut} className="nav-button">Log Out</button>
        </div>
      );
    }
  }
}

export default Greeting;
