import React, { PureComponent } from 'react';
import _ from 'lodash';
import { connect } from 'react-redux';
import { Panel, ListGroup } from 'react-bootstrap';
import User from './User';
import '../../Home.css'

class Users extends PureComponent {
  
  generateUsers (){
    const { users } = this.props;
    
    return _.map(
      users,
      user => <User key={user.id} {...user} />
    );
  }

  render() {
    return (
      <div className="users-list well well-sm height-100p">
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

export default connect(mapStateToProps)(Users);