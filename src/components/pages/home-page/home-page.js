import React, { Component } from 'react';
import chef from './img/chef_photo.jpg';
import data from './chef_description';

import styles from './home-page.module.scss';

class HomePage extends Component {
  state = {
    readMoreDescription: false,
    descriptionHeight: null
  };
  
  toggleViewDescription = () => {
    this.setState(({ readMoreDescription }) => (
      { readMoreDescription: !readMoreDescription }
    ));
  };

  componentDidMount() {
    const readMoreBtnHeight = 65;
    const descriptionHeight = this.refs.description.scrollHeight + readMoreBtnHeight;
    this.setState({ descriptionHeight });

    // window.addEventListener('orientationchange', () => {
    //   const descriptionHeight = this.refs.description.scrollHeight + readMoreBtnHeight;
    //   this.setState({ descriptionHeight });
    // });
  }

  render () {
    const { readMoreDescription, descriptionHeight } = this.state;
    
    const descriptionStyle = {
      height: readMoreDescription && descriptionHeight
    };

    return (
      <div className={styles.homePage}>
        <div className={styles.categoryBanner}></div>
        <div className={styles.aboutChef}>
          <div className={styles.photo}>
            <img src={chef} alt="Chef" />
          </div>
          <div className={styles.description}
            ref={'description'}
            style={descriptionStyle}>
            <p>{ data.paragraph1 }</p>
            <p>{ data.paragraph2 }</p>
            <p>{ data.paragraph3 }</p>
            <p>{ data.paragraph4 }</p>
            <div className={styles.readMore}
              onClick={this.toggleViewDescription}>
                { readMoreDescription ? 'Read less' : 'Read more' }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;