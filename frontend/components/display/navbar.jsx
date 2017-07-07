import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Navbar extends Component{
  constructor(props){
    super(props);
    this.handleLogOut = this.handleLogOut.bind(this);
  }

  componentDidMount(){
    this.props.verify();
  }

  handleLogOut(){
    this.props.logout();
  }

  render(){
    console.log(this.props)
    return (
      <nav className="splash-nav flex">
        <h1 className="splash-logo">TrailerFlix</h1>
        <div>
          <Link to={"/signup"} className="splash-signup splash-button">Sign up</Link>
          <Link to={"/login"} className="splash-signup splash-button">Log In</Link>
          <button onClick={this.handleLogOut} className="splash-signup splash-button">Log Out</button>
        </div>
      </nav>
    );
  }
}

export default Navbar;
