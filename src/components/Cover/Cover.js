/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Cover.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Cover {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Cover">
        <div className="Cover-container">
        <h1 className="Cover-title">Design x </h1>
        <h2 className="Cover-lead">Design as tool  for humanising technology. </h2>


      </div>
    </div>
    );
  }

}

export default Cover;
