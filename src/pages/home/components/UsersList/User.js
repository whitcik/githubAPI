import React from 'react';
import { ListGroupItem } from 'react-bootstrap';

const User = (props) => {
  return (
    <ListGroupItem onClick={() => props.selectUser(props.id)}>
      {props.login}
    </ListGroupItem>
  );
}

export default User;