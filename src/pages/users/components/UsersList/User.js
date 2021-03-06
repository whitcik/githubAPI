import React from 'react';
import { ListGroupItem } from 'react-bootstrap';
import routePaths from 'constans/routePaths';

const User = (props) => {
  return (
    <ListGroupItem active={props.isActive} onClick={() => props.push(routePaths.USERS  + '/' + props.login)}>
        {props.login}
    </ListGroupItem>
  );
}

export default User;