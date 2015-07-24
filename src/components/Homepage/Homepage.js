/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Homepage.less';
import withStyles from '../../decorators/withStyles';

import Header from '../Header';
import Cover from '../Cover/Cover';
import Card from '../Card/Card';

@withStyles(styles)
class Homepage {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Homepage">
        <Header />
        <Cover />
        <Card />
      </div>
    );
  }

}

export default Homepage;
