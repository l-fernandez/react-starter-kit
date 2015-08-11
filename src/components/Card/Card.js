/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Card.less';
import Author from '../Author/Author';
import withStyles from '../../decorators/withStyles';



@withStyles(styles)
class Card {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Card">
        <div className="Card-logo">
        </div>
        <div className="Card-container">
          <div className="Card-top">
            <h1 className="Card-title">Design x Intimacy</h1>
            <h2 className="Card-lead"> Selfies, quantified self</h2>
            <p>When design deals with the most personal, intimate and sacred new questions arises. Classic paradigms of digital technologies are questioned:</p>
          </div>
          <div className="Card-bottom">
              <Author/>
              <Author/>
              <Author/>
              <Author/>
          </div>
        </div>
    </div>
    );
  }

}

export default Card;
