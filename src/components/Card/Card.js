
/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Card.less';
import Author from '../Author/Author';
import withStyles from '../../decorators/withStyles';
import Signin from '../Signin/Signin';


@withStyles(styles)
class Card {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Card">
        <div className="Card-container">
          <div className="Card-top">
            <h1 className="Card-title">Design x Intimacy</h1>
            <div className="Card-details">13th October 2015, 20:00</div>
            <a className="Card-location" href="https://www.google.de/maps/place/U+Rosenthaler+Platz+(Berlin)/@52.5299308,13.4029232,17z/data=!3m1!4b1!4m2!3m1!1s0x47a851e4f5fb86d7:0xf07e77e388a998d1?hl=en" target="_blank">The Hub, Rosenthaler Platz 20</a>
          </div>
          <div className="Card-middle">
            <p>Intimacy is about close relationships we have with others, those who we trust, who know us best and who we share a sense of familiarity, affinity and togetherness with. This bond grows stronger, when there is mutual confidentiality and understanding that no significant other is involved in. Intimacy is about the promise of unfiltered, immediate and raw feelings and words, something that can’t be manipulated, might evolve but won’t go away once it has been established. What happens to these qualities once intermediates become omnipresent, when our surroundings are designed for constant connectivity, easy sharing of many to many? How do you evolve, preserve, amplify precious moments, gestures, feelings and information that you only want to share with the very special once with no external notice, consequences or pressures?  What role does technology play in this? Can it enable those special instances that make us so human? Or will we be always facing inherent tension of losing some of the non-transmissive once we surround ourselves with digital technologies?</p>
          </div>
          <div className="Card-bottom">
              <Author/>
              <Author/>
              <Author/>
              <Author/>
          </div>
          <Signin/>
        </div>
    </div>
    );
  }

}

export default Card;
