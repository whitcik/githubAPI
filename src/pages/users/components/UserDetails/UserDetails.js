import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

class UsersDetails extends PureComponent {

  render() {
    console.log('UsersDetails', this.props);
    if(!this.props.user){
      return null;
    }
    return (
      <div className="users-details well well-sm height-100p pull-right">
        <h2>{this.props.user.login}</h2>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { users } = state;
  const selectedUserLogin = props.match.params.userId;

  const index = _.findIndex(users, user => user.login === selectedUserLogin);

  return {
      user: state.users[index]
  };
}

export default connect(mapStateToProps)(UsersDetails);