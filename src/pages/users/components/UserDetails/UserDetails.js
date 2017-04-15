import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

class UsersDetails extends PureComponent {

  render() {
    console.log('UsersDetails', this.props);
    const { user } = this.props;
    if(!user){
      return null;
    }
    return (
      <div className="users-details well well-sm height-100p pull-right">
        <div className="thumbnail height-100p overflow-auto">
          <img src={user.avatar_url} alt={user.login} />
          <div className="caption">
            <h3>{user.login}</h3>
            <p>
              <a target="_blank" href={user.html_url} className="btn btn-primary">GitHub</a>
            </p>
          </div>
        </div>
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