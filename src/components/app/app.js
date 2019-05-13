import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { NavMenuService } from '../service';
import NavMenu from '../nav-menu';
import Header from '../header';
import HomePage from '../pages/home-page';
import GalleryPage from '../pages/gallery-page';
import DocumentsPage from '../pages/documents-page';
import classNames from 'classnames/bind';
import styles from './app.module.scss';
import Footer from '../footer';

export default class App extends Component {
  service = new NavMenuService();

  state = {
    isOpened: false
  };

  toggleNavMenu = () => {
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));
  }

  closeNavMenu = () => {
    const { isOpened } = this.state;
    if (isOpened) {
      this.setState({ isOpened: false });
    }
  }

  componentDidMount() {
    window.addEventListener('orientationchange', this.closeNavMenu);
  }

  componentWillUnmount() {
    window.removeEventListener('orientationchange', this.closeNavMenu);
  }

  render() {
    const { isOpened } = this.state;
    const { menuLink } = this.service;
    const cx = classNames.bind(styles);
    const classes = cx('app', { 'appHidden': isOpened });

    return (
      <>
        <NavMenu 
          link={menuLink} 
          isOpened={isOpened}
          toggleNavMenu={this.toggleNavMenu}
          type="SIDE" />

        <div className={classes} onClick={this.closeNavMenu}>
          <Header menuLink={menuLink} />
          <main className={styles.main}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/gallery" component={GalleryPage} />
              {/* <Route path="/about" component={LazyAdminPage} /> */}
              {/* <Route path="/one-week-menu" component={LazyExercisesPage} /> */}
              <Route path="/documents" component={DocumentsPage} />
              {/* <Route path="/contact" component={LazyExercisesPage} /> */}
            </Switch>
          </main>
          <Footer />
        </div>
      </>
    );
  };
}