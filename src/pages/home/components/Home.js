import React, { PureComponent } from 'react';

export default class Home extends PureComponent {

  render() {
    console.log('About', this.props);
    return (
      <section className=' container page-content-wrapper'>
        <div className="row height-100p">
          <div className="col-xs-12 height-100p">
            <div className="height-100p overflow-auto">
              <div className="jumbotron">
                <h1>Welcome to the homepage</h1>
                <p>
                  I've done this project to improve my skills and test technologies such as redux, redux-saga and react-router.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
