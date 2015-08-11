/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Signin.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Signin {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Signin">
        <div className="Signin-container">
        </div>
    </div>
    );
  }

}

export default Signin;
