/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Author.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Author {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Author">
        <div className="Author-image">
        </div>
          <div className="Author-info">
            <div className="Author-name">
            Lorenzo Fernandez
            </div>
            <span className="Author-bio">
            Interaction Designer from @IDEO Munich, for now in Berlin. Interested in anything related to #politics, #media and design for citizens.
            </span>
          </div>
      </div>
    );
  }
}

export default Author;
