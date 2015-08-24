/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Social.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Social {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Social">
        <a className="Social-twitter-link" href="https://twitter.com/intent/tweet?text=Hello%20world" target="_blank">
          <div className="Social-twitter-button">
            <div className="Social-twitter-icon">
            </div>
          </div>
        </a>
        <a className="Social-facebook-link" href="http://www.facebook.com/sharer/sharer.php?s=100&amp;p[title]=Test">
          <div className="Social-facebook-button">
            <div className="Social-facebook-icon">
            </div>
          </div>
        </a>
      </div>
    );
  }
}

export default Social;
