import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const User = (props) => {
  return (
    <ListGroupItem>
      {props.login}
    </ListGroupItem>
  );
}

export default User;