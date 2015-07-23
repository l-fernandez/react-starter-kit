/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Homepage.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Homepage {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Homepage">
    </div>
    );
  }

}

export default Homepage;
