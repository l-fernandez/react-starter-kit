/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Dlogo.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Dlogo {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Dlogo">
        <div className="Dlogo-top">
        </div>
        <div className="Dlogo-bottom">
        </div>
      </div>
    );
  }
}

export default Dlogo;
