import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeViewer } from '../../reducers/actions';

import NavMenu from '../nav-menu';
import Header from '../header';
import Footer from '../footer';
import PhotoViewerContainer from '../common/photo-viewer';

import HomePage from '../pages/home-page';
import GalleryPage from '../pages/gallery-page';
import MenusPage from '../pages/menus-page';
import DocumentsPage from '../pages/documents-page';
import ContactsPage from '../pages/contacts-page';

import classNames from 'classnames/bind';
import styles from './app.module.scss';

const menuLink = [
  { name: 'Home', link: '/' },
  { name: 'Gallery', link: '/gallery' },
  // { name: 'About Chef', link: '/about' },
  { name: 'One Week Menu', link: '/one-week-menu' },
  { name: 'Documents', link: '/documents' },
  { name: 'Contacts', link: '/contacts' }
];

class App extends Component {
  state = {
    isOpened: false,
    appHeight: null,
    mainHeight: null
  };

  headerRef = React.createRef();

  toggleNavMenu = () => {
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));
  };

  closeNavMenu = () => {
    const { isOpened } = this.state;
    if (isOpened) {
      this.setState({ isOpened: false });
    }
  };

  onWindowHeight = () => {
    const appHeight = window.innerHeight;

    const headerHeight = this.headerRef.current.clientHeight;
    const value = window.innerWidth < 768 ? appHeight : appHeight - headerHeight;
    const mainHeight = value < 450 ? 450 : value;

    this.setState({ appHeight, mainHeight });
  };

  componentDidMount() {
    this.onWindowHeight();    
    window.addEventListener('orientationchange', this.closeNavMenu);
    window.addEventListener('resize', this.onWindowHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('orientationchange', this.closeNavMenu);
    window.removeEventListener('resize', this.onWindowHeight);
  }

  render() {
    const { isOpened, appHeight, mainHeight } = this.state;
    const {
      photosList,
      currentPhoto,
      photoViewer,
      closeViewer
    } = this.props;

    const cx = classNames.bind(styles);
    const classes = cx('app', { 'appHidden': isOpened });

    return (
      <>
        <NavMenu 
          link={menuLink} 
          isOpened={isOpened}
          isViewer={photoViewer}
          toggleNavMenu={this.toggleNavMenu}
          type="SIDE" />

        <div
          className={classes}
          style={{ 'minHeight': appHeight }}
          onClick={this.closeNavMenu}>
          <Header menuLink={menuLink} ref={this.headerRef} />
          <main
            className={styles.main}
            style={{ 'minHeight': mainHeight }}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/gallery" component={GalleryPage} />
              {/* <Route path="/about" component={LazyAdminPage} /> */}
              <Route path="/one-week-menu" component={MenusPage} />
              <Route path="/documents" component={DocumentsPage} />
              <Route path="/contacts" component={ContactsPage} />
            </Switch>
          </main>

          <Footer />
        </div>

        { photoViewer && 
          <PhotoViewerContainer
            selectedPhoto={currentPhoto}
            photos={photosList}
            onClose={closeViewer} />
        }
      </>
    );
  }

  static defaultProps = {
    closeViewer: () => {}
  };

  static propTypes = {
    photosList: PropTypes.arrayOf(PropTypes.object),
    currentPhoto: PropTypes.object,
    photoViewer: PropTypes.bool,
    closeViewer: PropTypes.func
  };
}

//get current state from redux store
const mapStateToProps = ({ photosList, currentPhoto, photoViewer }) => {
  return {
    photosList,
    currentPhoto,
    photoViewer
  };
};

//get action creators
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeViewer
  }, dispatch);
};

//connect creates new component that contents App
//and inside this new component we get access to store via Context API
export default connect(mapStateToProps, mapDispatchToProps)(App);