import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { HashRouter as Router } from 'react-router-dom';
import Routes from './routes';

class App extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <Provider store={ this.props.store }>
        <Router>
          <Routes />
        </Router>
      </Provider>
    );
  }
}

export default App;
