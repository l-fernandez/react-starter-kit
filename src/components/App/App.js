/*! React Starter Kit | MIT License | http://www.reactstarterkit.com/ */

import React, { PropTypes } from 'react';
import styles from './App.less';
import withContext from '../../decorators/withContext';
import withStyles from '../../decorators/withStyles';
import AppActions from '../../actions/AppActions';
import AppStore from '../../stores/AppStore';
import ContentPage from '../ContentPage';
import ContactPage from '../ContactPage';
import LoginPage from '../LoginPage';
import RegisterPage from '../RegisterPage';
import NotFoundPage from '../NotFoundPage';

import Homepage from '../Homepage/Homepage';


const pages = { ContentPage, ContactPage, LoginPage, RegisterPage, NotFoundPage };

@withContext
@withStyles(styles)
class App {

  static propTypes = {
    path: PropTypes.string.isRequired
  };

  componentDidMount() {
    window.addEventListener('popstate', this.handlePopState);
  }

  componentWillUnmount() {
    window.removeEventListener('popstate', this.handlePopState);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.path !== nextProps.path;
  }

  render() {
    let component;

    switch (this.props.path) {

      case '/':
      case '/about':
      case '/privacy':
        let page = AppStore.getPage(this.props.path);
        component = React.createElement(pages[page.component], page);
        break;

      case '/contact':
        component = <ContactPage />;
        break;


    }

    return component ? (
      <div className="Container">
      <Homepage />
      {component}
      </div>
    ) : <NotFoundPage />;
  }

  handlePopState(event) {
    AppActions.navigateTo(window.location.pathname, {replace: !!event.state});
  }

}

export default App;
