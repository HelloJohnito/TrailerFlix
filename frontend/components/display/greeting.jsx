import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SessionFormContainer from '../session/sessionFormContainer';
import Modal from 'react-modal';
import ModalStyleGreeting from './modalStyleGreeting';



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
    this.setState({modalOpen: false});
    this.props.history.push("/");
  }

  render(){
    let content = (this.state.login) ? <SessionFormContainer formType="login" history={this.props.history}/> : <SessionFormContainer formType="signup" history={this.props.history}/>;

    if(!this.props.currentUser){
      return(
        <div className="flex">
          <a className="nav-button" onClick={this.handleClick.bind(this, false)}>Sign up</a>
          <a className="nav-button" onClick={this.handleClick.bind(this, true)}>Log In</a>
          <Modal
            contentLabel="modal-greeting"
            isOpen={this.state.modalOpen}
            onRequestClose={this.onModalClose}
            style={ModalStyleGreeting}>
              <button className="modal-close" onClick={this.onModalClose}>X</button>
              {content}
          </Modal>
        </div>
      );
    }
    else {
      return(
        <div className="nav-loggedin flex">
          <img className="nav-user-icon" src="https://res.cloudinary.com/deh9l9lyq/image/upload/v1499474794/user-icon_g4hecp.png"></img>
          <h1>{this.props.currentUser.username}</h1>
          <button onClick={this.handleLogOut} className="nav-button">Log Out</button>
        </div>
      );
    }
  }
}

export default Greeting;
