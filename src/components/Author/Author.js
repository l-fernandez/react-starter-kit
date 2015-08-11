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
        <span className="Author-name">
        Lorenzo Fernandez
        </span>
      </div>
    );
  }
}

export default Author;
