import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavMenu from '../nav-menu';
import Header from '../header';
// import HomePage from '../pages/home-page';
import GalleryPage from '../pages/gallery-page';
import DocumentsPage from '../pages/documents-page';
import classNames from 'classnames/bind';
import styles from './app.module.scss';
import Footer from '../footer';
import PhotoViewerContainer from '../common/photo-viewer';

const menuLink = [
  // { name: 'Home', link: '/' },
  { name: 'Gallery', link: '/' },
  // { name: 'Gallery', link: '/gallery' },
  // { name: 'About Chef', link: '/about' },
  // { name: 'One Week Menu', link: '/one-week-menu' },
  { name: 'Documents', link: '/documents' },
  // { name: 'Contact', link: '/contact' },
];

export default class App extends Component {
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
    const { isPhotoViewer } = this.props;
    const cx = classNames.bind(styles);
    const classes = cx('app', { 'appHidden': isOpened, 'appNoScroll': isPhotoViewer });

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
              {/* <Route path="/" component={HomePage} exact /> */}
              <Route path="/" component={GalleryPage} exact />
              {/* <Route path="/gallery" component={GalleryPage} /> */}
              {/* <Route path="/about" component={LazyAdminPage} /> */}
              {/* <Route path="/one-week-menu" component={LazyExercisesPage} /> */}
              <Route path="/documents" component={DocumentsPage} />
              {/* <Route path="/contact" component={LazyExercisesPage} /> */}
            </Switch>
          </main>
          <Footer />
        </div>

        { isPhotoViewer && <PhotoViewerContainer selectedPhoto={{}} /> }
      </>
    );
  };
}