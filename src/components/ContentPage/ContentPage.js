/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './ContentPage.less';
import withStyles from '../../decorators/withStyles';

import Card from '../Card/Card';
import Cover from '../Cover/Cover';
import Dlogo from '../Dlogo/Dlogo';


@withStyles(styles)
class ContentPage {

  static propTypes = {
    path: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    title: PropTypes.string
  };

  static contextTypes = {
    onSetTitle: PropTypes.func.isRequired
  };

  render() {
    this.context.onSetTitle(this.props.title);
    return (
      <div className="ContentPage">
        <div className="ContentPage-container">
          <Cover />
          <Dlogo />
          <Card />
        </div>
      </div>
    );
  }

}

export default ContentPage;
