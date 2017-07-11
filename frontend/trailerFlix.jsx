import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import App from './components/app';
import configureStore from './store';
import Modal from 'react-modal';

document.addEventListener('DOMContentLoaded', () => {

  Modal.setAppElement(document.body);

  const root = document.getElementById('root');
  const store = configureStore();
  // window.getState = store.getState;
  ReactDOM.render(<App store={ store }/>, root);
});
