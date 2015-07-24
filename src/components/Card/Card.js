/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Card.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Card {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Card">
        <div className="Card-container">
          <h1 className="Card-title">Design x Depth</h1>
          <h2 className="Card-lead"> Selfies, quantified self</h2>
          <p>When design deals with the most personal, intimate and sacred new questions arises. Classic paradigms of digital technologies are questioned:</p>
        </div>
    </div>
    );
  }

}

export default Card;
