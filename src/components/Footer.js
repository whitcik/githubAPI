import React, { PureComponent } from 'react';
import './Footer.scss';

export default class Footer extends PureComponent {

  render() {
    return (
      <footer className="footer">
        <div className='container'>
          <div className="contain">
            &copy; 2017 Piotr Białek
          </div>
        </div>
      </footer>
    );
  }
}
