import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Panel, ListGroup } from 'react-bootstrap';
import { push } from 'react-router-redux'
import { selectUser } from 'actions/users/usersActions';
import User from './User';

class UsersList extends PureComponent {
  
  generateUsers (){
    const { users } = this.props;
    
    return _.map(
      users,
      user => <User
                push={this.props.actions.push}
                key={user.id}
                {...user} />
    );
  }

  render() {
    console.log('Users');
    return (
      <div className="users-list well well-sm height-100p pull-left">
        <Panel header="User List" className="height-100p">
          <ListGroup fill>
            {this.generateUsers()}
          </ListGroup>
        </Panel>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        users: state.users
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({ selectUser, push }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UsersList);