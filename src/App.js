
import React from 'react';
import { User } from './components/Profile/User.jsx';
import StatsList from './components/statistics/StatsList.js';
import FriendList from './components/friends/FriendList';


import user from './components/Profile/user.json';
import data from './components/statistics/data.json';
import friends from "./components/friends/friends.json";

export default function App () {
    return (
        <>
        <User
        avatar={user.avatar}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <StatsList title="Upload stats" stats={data} />
      <StatsList stats={data} />

      <FriendList friends={friends} />;
      </>
    );
}