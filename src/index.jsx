/*jshint esversion: 6*/
// Application entrypoint.

// Load up the application styles
require("../styles/application.scss");

// Render the top-level React component
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

// const nav = document.getElementById('nav');

ReactDOM.render(
  <App />, document.getElementById('react-root')
);
