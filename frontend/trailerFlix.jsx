import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store';

document.addEventListener('DOMContentLoaded', () => {

  const root = document.getElementById('root');
  const store = configureStore();
  ReactDOM.render(<App store={ store }/>, root);
});
