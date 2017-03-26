import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import '../../Home.css'

class UsersDetails extends PureComponent {
  

  render() {
    console.log('UsersDetails');
    return (
      <div className="users-details well well-sm height-100p pull-right">
        <h2>{this.props.user.login}</h2>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { users } = state;
  const selectedUserId = state.selected.userId;

  const index = _.findIndex(users, user => user.id === selectedUserId);

  return {
      user: state.users[index]
  };
}

export default connect(mapStateToProps)(UsersDetails);