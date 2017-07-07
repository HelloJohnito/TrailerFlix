import React, { Component } from 'react';
import { Link } from 'react-router-dom';



class Greeting extends Component{
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  handleLogOut(){
    this.props.logout();
    this.props.history.push("/");
  }

  render(){
    if(!this.props.currentUser){
      return(
        <div className="flex">
          <Link to={"/signup"} className="splash-button">Sign up</Link>
          <Link to={"/login"} className="splash-button">Log In</Link>
        </div>
      );
    }
    else {
      return(
        <div className="flex">
          <Link to={"/user"} className="splash-signup splash-button">{this.props.currentUser.username}</Link>
          <button onClick={this.handleLogOut} className="splash-button">Log Out</button>
        </div>
      );
    }
  }
}

export default Greeting;
