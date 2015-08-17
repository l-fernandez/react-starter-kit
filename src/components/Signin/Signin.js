/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './Signin.less';
import withStyles from '../../decorators/withStyles';

@withStyles(styles)
class Signin {

  static propTypes = {
    className: PropTypes.string
  };

  render() {
    return (
      <div className="Signin">
        <div className="Signin-title">Sign up!</div>
          <form action="https://docs.google.com/forms/d/1goKoXZ9G3CEXsD4JlzQ00gQotyK_K4Mtqt8WAo1LEu8/formResponse" className="Signin-form">
          <input type="text" placeholder="Email" className="Signin-field" name="entry.2145706716"></input>
          <input type="text" placeholder="Name" className="Signin-field" name="entry.1824987454"></input>
          <button type="submit" className="Signin-pure-button" name="submit">Sign in</button>
        </form>
    </div>
    );
  }

}

export default Signin;
