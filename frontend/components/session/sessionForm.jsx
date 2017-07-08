import React, {Component} from 'react';
import { withRouter } from 'react-router-dom';
import axios from 'axios';

class SessionForm extends Component {
  constructor(props){
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidUpdate() {
    this.redirectIfLoggedIn();
  }

  redirectIfLoggedIn() {
    if (this.props.loggedIn) {
      this.props.history.push('/video');
    }
  }

  handleUpdate(field){
    return e => (
      this.setState({[field]: e.currentTarget.value})
    );
  }


  handleSubmit(e){
    e.preventDefault();
    this.props.processForm(this.state);
    this.props.history.push('/video');
  }

  render(){

    let title = (this.props.path === "signup") ? "sign up" : "log in";

    return(
      <div className="session-background">
        <form className="session-form" onSubmit={this.handleSubmit}>
          <label>{title}</label>

            <label> Username</label>
              <input type="text" placeholder="Username" onChange={this.handleUpdate("username")}></input>

            <label> Password</label>
              <input type="password" placeholder="Password" onChange={this.handleUpdate("password")}></input>


            <div className="form-submit-container">
              <input className="form-submit" type="submit" value="Submit" />
            </div>

        </form>

        <h1 className="form-switch"> Don't hav an account? Try the
          <button className=""> DEMO ACCOUNT</button>
        </h1>

      </div>
    );
  }
}

export default SessionForm;
