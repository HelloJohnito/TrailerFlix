import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Greeting from './greeting';


class Navbar extends Component{
  constructor(props){
    super(props);
  }

  componentDidUpdate(prevProps, prevState){
    this.props.verify();
  }

  render(){
    let logoPage = (this.props.currentUser) ? "/video" : "/";
    return (
      <nav className="splash-nav flex">
        <Link to={logoPage} className="splash-logo">TrailerFlix</Link>

        <Greeting currentUser={this.props.currentUser} logout={this.props.logout} history={this.props.history}/>
      </nav>
    );
  }
}

export default Navbar;
