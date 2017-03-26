import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { getUsers } from 'actions/home/usersActions';
import Users from './UsersList/Users';
import UsersDetails from './UserDetails/UserDetails';
import '../Home.css';

class Home extends PureComponent {
  componentDidMount() {
    
    if(this.props.shouldGetUsers){
      this.props.actions.getUsers();
    };
  }
  
  render() {
    console.log('Home', this.props);
    return (
      <section className='container page-content-wrapper'>
        <div className="row height-100p">
          <div className="col-xs-12 height-100p">
            <div className="padd-10-5 height-100p">
              <Users />
              {this.props.shouldShowUserDetails && <UsersDetails />}
            </div>
          </div>
        </div>
      </section>
    );
  }
}

function mapStateToProps(state, props) {
    return {
        shouldGetUsers: !state.users.length,
        shouldShowUserDetails: state.selected.userId !== null
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({getUsers}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);