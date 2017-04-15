import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, ListGroup } from 'react-bootstrap';
import { push } from 'react-router-redux'
import { selectUser } from 'actions/usersActions';
import User from './User';
import Loader from 'react-loader';

class UsersList extends PureComponent {
  
  generateUsers(){
    const { users } = this.props;
    
    return _.map(
      users,
      user => <User
                push={this.props.actions.push}
                key={user.id}
                isActive={this.props.activeLogin === user.login}
                {...user} />
    );
  }

  render() {
    console.log('UsersList', this.props);
    return (
      <div className="users-list well well-sm height-100p pull-left">
        <Panel header="User List" className="height-100p">
          <ListGroup fill>
            <Loader loaded={this.props.loaded} >
              {this.generateUsers()}
            </Loader>
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const { pathname } = state.routing.location;
  return {
      users: state.users,
      activeLogin: _.replace(pathname, '/users/', ''),
      loaded: !state.loaders.isUsersLoader
  };
}

function mapDispatchToProps(dispatch) {
  return {
      actions: bindActionCreators({ selectUser, push }, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);