import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import axios from 'axios'
import startHealthCheckWorker from './util/healthCheckWorker';
// import star from './util/healthCheckWorker'
// REACT_APP_FILESERVER_PORT
let baseUrl = "http://"+process.env.REACT_APP_FILESERVER_IP+":"+process.env.REACT_APP_FILESERVER_PORT;
console.log("base url is ", baseUrl)
console.log("process env is ", process.env)
axios.defaults.baseURL = baseUrl
// console.log("base url is ",process.env.REACT_APP_FILESERVER_IP )
//"http://192.168.1.27:9010"
startHealthCheckWorker()
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
