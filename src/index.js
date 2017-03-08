import React from 'react';
import ReactDOM from 'react-dom';
import firebase from 'firebase';

import App from './App';
import './index.css';

firebase.initializeApp({
	apiKey: "AIzaSyAIvw5gRmS1glX4H7uxYy3-32zDwW3ytVQ",
    authDomain: "pseudogram-538d1.firebaseapp.com",
    databaseURL: "https://pseudogram-538d1.firebaseio.com",
    storageBucket: "pseudogram-538d1.appspot.com",
    messagingSenderId: "471927577678"
});

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
