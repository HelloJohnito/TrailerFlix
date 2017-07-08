import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting';


class Navbar extends Component{
  constructor(props){
    super(props);
  }

  componentDidMount(){
    this.props.verify();
  }

  render(){
    let logoPage = (this.props.currentUser) ? "/video" : "/";
    return (
      <nav className="navbar flex">
        <Link to={logoPage} className="nav-logo">TrailerFlix</Link>

        <Greeting currentUser={this.props.currentUser} logout={this.props.logout} history={this.props.history}/>
      </nav>
    );
  }
}

export default Navbar;
