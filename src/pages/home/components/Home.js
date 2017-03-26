import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {getUsers} from 'actions/home/usersActions';

class Home extends PureComponent {
  componentDidMount() {
    this.props.actions.getUsers();
  }
  
  render() {
    console.log('Home', this.props);
    return (
      <section className='container page-content-wrapper'>
        <div className="row">
          <div className="col-xs-12">
            <h2>Home</h2>
          </div>
        </div>
      </section>
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
        actions: bindActionCreators({getUsers}, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home);