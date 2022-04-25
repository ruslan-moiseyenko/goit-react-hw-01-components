import React from 'react';
import PropTypes from 'prop-types';

import { ListItem, IsOnline, Avatar, Name } from './Friends.styled'

export default function Friend({ avatar, name, isOnline }) {
  return (
    <ListItem>
      <IsOnline isOnline={isOnline}> </IsOnline>
      <Avatar src={avatar} alt="User avatar" width="48" />
      <Name>{name}</Name>
    </ListItem>
  );
}

Friend.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
}
