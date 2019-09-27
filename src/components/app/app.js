import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { closeViewer, setBackgroundImage, setBreadcrumbs } from '../../reducers/actions';

import HeaderContainer from '../header';
import Footer from '../footer';
import PhotoViewerContainer from '../common/photo-viewer';
import Breadcrumbs from '../common/breadcrumbs';

import HomePage from '../pages/home-page';
import GalleryPage from '../pages/gallery-page';
import { MenuPages } from '../pages/one-week-menus';
import DocumentsPage from '../pages/documents-page';
import ContactsPage from '../pages/contacts-page';

import classNames from 'classnames/bind';
import styles from './app.module.scss';

const menuLink = [
  { name: 'Home', link: '/' },
  { name: 'Gallery', link: '/gallery' },
  { name: 'One Week Menu', link: '/one-week-menu' },
  { name: 'Documents', link: '/documents' },
  { name: 'Contacts', link: '/contacts' }
];

class App extends Component {
  state = {
    isOpened: false,
    mainHeight: null,
    // breadcrumbsHeight: 0
  };

  headerRef = React.createRef();
  breadcrumbsRef = React.createRef();
  footerRef = React.createRef();

  toggleNavMenu = () => {
    this.setState(({ isOpened }) => ({ isOpened: !isOpened }));
  };

  closeNavMenu = () => {
    const { isOpened } = this.state;
    if (isOpened) {
      this.setState({ isOpened: false });
    }
  };

  getHeight = () => {
    const windowHeight = 'innerHeight' in window ?
                          window.innerHeight :
                          document.documentElement.clientHeight;

    const headerHeight = this.headerRef.current.offsetHeight;
    // ???
    // const breadcrumbsHeight = this.breadcrumbsRef.current.clientHeight;
    // console.log(breadcrumbsHeight)
    const footerHeight = this.footerRef.current.offsetHeight;
    const mainHeight = windowHeight - headerHeight - footerHeight;
    // const mainHeight = windowHeight - headerHeight - breadcrumbsHeight - footerHeight;

    this.setState({ mainHeight });
  };

  componentDidMount() {
    this.getHeight();    
    window.addEventListener('orientationchange', this.closeNavMenu);
    window.addEventListener('resize', this.getHeight);
  }

  componentWillUnmount() {
    window.removeEventListener('orientationchange', this.closeNavMenu);
    window.removeEventListener('resize', this.getHeight);
  }

  // componentDidUpdate({ breadcrumbsLinks: oldLinks }) {
  //   const { breadcrumbsLinks } = this.props;
  //   if(oldLinks !== breadcrumbsLinks) {
  //     const breadcrumbsHeight = this.breadcrumbsRef.current.clientHeight;
  //     this.setState({breadcrumbsHeight});
  //   }
  // }

  render() {
    const { isOpened, mainHeight } = this.state;
    const {
      backgroundImage,
      breadcrumbsLinks,
      photosList,
      currentPhoto,
      photoViewer,
      closeViewer,
      setBackgroundImage,
      setBreadcrumbs
    } = this.props;

    const cx = classNames.bind(styles);

    return (
      <>
        <div className={styles.app} onClick={this.closeNavMenu}>
          <HeaderContainer
            ref={this.headerRef}
            menuLink={menuLink}
            isOpened={isOpened}
            isViewer={photoViewer}
            toggleNavMenu={this.toggleNavMenu} />

          <Breadcrumbs ref={this.breadcrumbsRef} items={breadcrumbsLinks} />

          <main className={cx('main', { 'mainHidden': isOpened })}
            style={{'minHeight': `${mainHeight}px`,
            'backgroundImage': `url(${ backgroundImage })`
            }}>
            <Switch>
              <Route path="/" component={HomePage} exact />
              <Route path="/gallery" component={GalleryPage} />
              <Route path="/one-week-menu" render={() => (
                <MenuPages
                  onBackground={setBackgroundImage}
                  onBreadcrumbs={setBreadcrumbs} />
                )}
              />
              <Route path="/documents" component={DocumentsPage} />
              <Route path="/contacts" component={ContactsPage} />
            </Switch>
          </main>

          <Footer ref={this.footerRef} />
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
const mapStateToProps = ({
  photosList,
  currentPhoto,
  photoViewer,
  backgroundImage,
  breadcrumbsLinks
}) => {
  return {
    photosList,
    currentPhoto,
    photoViewer,
    backgroundImage,
    breadcrumbsLinks
  };
};

//get action creators
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
    closeViewer,
    setBackgroundImage,
    setBreadcrumbs
  }, dispatch);
};

//connect creates new component that contents App
//and inside this new component we get access to store via Context API
export default connect(mapStateToProps, mapDispatchToProps)(App);