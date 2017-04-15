import React, { PureComponent } from 'react';
import './Footer.scss';

export default class Footer extends PureComponent {

  render() {
    return (
      <footer className="footer">
        <div className='container'>
          &copy; 2016 Company, Inc.
        </div>
      </footer>
    );
  }
}
