import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import MediaCard from "./MediaCard";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>
    <App name = "Jahanzeb Khurshid" Surname = "KALYANI" age = {40} />,

    <MediaCard title = "Pakistan Flag" body = "Pakistani Flag always High. In Sha Allah" imageUrl = "https://media.gettyimages.com/videos/pakistani-flag-video-id481261983?s=640x640" />,
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
