import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyDzlSZPqFD22gtVeFsNiBHHZtkmYOak9mM",
  authDomain: "e-commerce--paez.firebaseapp.com",
  projectId: "e-commerce--paez",
  storageBucket: "e-commerce--paez.appspot.com",
  messagingSenderId: "575750742512",
  appId: "1:575750742512:web:e094fbc241acddfa537d35"
};

initializeApp(firebaseConfig);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
