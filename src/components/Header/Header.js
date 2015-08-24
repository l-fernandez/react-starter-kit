/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Header {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
            <img className="Header-IDEO" src={require('./logo-ideo.svg')} alt="React" />
            <img className="Header-Designx" src={require('./dx-logo-white.svg')} alt="React" />
            <div className="Header-border"></div>
        </div>
      </div>
    );
  }

}

export default Header;
