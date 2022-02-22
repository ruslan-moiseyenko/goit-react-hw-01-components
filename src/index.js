import React from 'react';
import ReactDOM from 'react-dom';
import { User } from './components/Profile/User.jsx';
import { StatsList } from './components/Statistics/StatsList';
import reportWebVitals from './reportWebVitals';
import './index.css';


import user from './components/Profile/user.json'
import data from './components/Statistics/data.json'
// console.log(data);

ReactDOM.render(
  <React.StrictMode>
    <User
      avatar={user.avatar}
      tag={user.tag}
      location={user.location}
      followers={user.stats.followers}
      views={user.stats.views}
      likes={user.stats.likes}
    />
    <StatsList title="Upload stats" stats={data} />
  </React.StrictMode >,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
