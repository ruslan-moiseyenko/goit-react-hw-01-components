import React from 'react'

import Friend from './Friend'


export default function FriendList ({friends}) {
    return (
        
        <ul>
        {friends.map((item) => 
            <Friend key={item.id} avatar={item.avatar} name={item.name} isOnline={item.isOnline} />
        )}
        </ul>
    );
}