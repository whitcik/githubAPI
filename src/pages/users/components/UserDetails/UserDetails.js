import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';

class UsersDetails extends PureComponent {

  render() {
    console.log('UsersDetails', this.props);
    const { user, match, shouldntRender } = this.props;

    if(shouldntRender) {
      return false;
    }

    return (
      <div className="users-details well well-sm height-100p pull-right">
        <div className="thumbnail height-100p overflow-auto">
          {!user && <h3>Not found {match.params.userId}</h3>}
          {user && <div>
            <img src={user.avatar_url} alt={user.login} />
            <div className="caption">
              <h3>{user.login}</h3>
              <p>
                <a target="_blank" href={user.html_url} className="btn btn-primary">GitHub</a>
              </p>
            </div>
          </div>}
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
    user: state.users[index],
    shouldntRender: !state.users.length

  };
}

export default connect(mapStateToProps)(UsersDetails);