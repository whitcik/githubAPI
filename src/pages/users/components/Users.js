import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from 'actions/usersActions';
import UsersList from './UsersList/UsersList';
import UsersDetails from './UserDetails/UserDetails';
import { Route } from 'react-router';
import routePaths from 'constans/routePaths';
import '../Users.scss';

class Users extends PureComponent {
  componentDidMount() {
    
    if(this.props.shouldGetUsers){
      this.props.actions.getUsers();
    };
  }
  
  render() {
    console.log('Users', this.props);
    return (
      <section className='container page-content-wrapper'>
        <div className="row height-100p">
          <div className="col-xs-12 height-100p">
            <div className="padd-0-5 height-100p">
              <UsersList />
              <Route path={routePaths.USERS + '/:userId'} component={UsersDetails}/>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        shouldGetUsers: !state.users.length
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({getUsers}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);