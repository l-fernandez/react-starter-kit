/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React from 'react';
import styles from './Header.less';
import withStyles from '../../decorators/withStyles';
import Link from '../../utils/Link';
import Navigation from '../Navigation';

@withStyles(styles)
class Header {

  render() {
    return (
      <div className="Header">
        <div className="Header-container">
          <a className="Header-brand" href="/" onClick={Link.handleClick}>
            <img className="Header-brandImg" src={require('./logo-ideo.svg')} width="80" height="38" alt="React" />
          </a>
          <Navigation className="Header-nav" />
          <div className="Header-banner">
          </div>
        </div>
      </div>
    );
  }

}

export default Header;
