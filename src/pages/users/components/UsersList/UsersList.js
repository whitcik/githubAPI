import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, ListGroup } from 'react-bootstrap';
import { push } from 'react-router-redux'
import { selectUser } from 'actions/usersActions';
import User from './User';
import Loader from 'react-loader';
import SearchUserInput from './SearchUserInput';

class UsersList extends PureComponent {
  
  constructor() {
    super();

    this.state = {
      searchText: ''
    }
  }

  handleInputChange = (e) => {
    
    this.setState({
      searchText: e.target.value
    });
  }

  generateUsers() {
    
    return _.map(
      this.filterUsers(),
      user => <User
                push={this.props.actions.push}
                key={user.id}
                isActive={this.props.activeLogin === user.login}
                {...user} />
    );
  }

  filterUsers() {
    const { users } = this.props;
    const { searchText } = this.state;

    if(searchText === '') {
      return users;
    }

    return _.filter(
      users,
      user => _.includes(user.login.toLowerCase(), searchText)
    );
  }

  render() {
    console.log('UsersList', this.props);
    const header = (
      <div>
        <span>Users List</span>
        <SearchUserInput placeholder="Search..."
                         value={this.state.searchText}
                         handleInputChange={this.handleInputChange} />
      </div>
    );
    return (
      <div className="users-list well well-sm height-100p pull-left">
        <Panel header={header} className="height-100p">
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