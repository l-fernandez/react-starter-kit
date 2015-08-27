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
          <h1 className="Cover-title">Design x ___ </h1>
          <p>We are exploring how technology is impacting us at different scales.
From its relationship with the self and the most personal, to its effect on our communities and finally to the challenges and opportunities for our society at large.
We intend to uncover designs potential when moving beyond its traditional domain.</p>
        </div>
    </div>
    );
  }

}

export default Cover;
