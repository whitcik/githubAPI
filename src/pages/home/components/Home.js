import React, { PureComponent } from 'react';

export default class Home extends PureComponent {

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
