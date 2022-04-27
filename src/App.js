
import React from 'react';
import { User } from './components/User/User.jsx';
import StatsList from './components/Statistics/Statistics.js';
import FriendList from './components/Friends/FriendList';
import TransactionHistory from './components/Transactions/TransactionHistory.js';


import user from './components/User/user.json';
import data from './components/Statistics/data.json';
import friends from "./components/Friends/friends.json";
import transactions from "./components/Transactions/transactions.json";

export default function App() {
  return (
    <>
      <User
        user={user}
      />
      <StatsList title="Upload stats" stats={data} />
      <StatsList stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
}
