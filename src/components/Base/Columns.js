/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Cover.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Columns {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Columns">
        
    </div>
    );
  }

}

export default Columns;
