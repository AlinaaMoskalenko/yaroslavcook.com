import React, { Component } from 'react';
import chef from './img/chef_photo.jpg';
import data from './chef_description';

import styles from './home-page.module.scss';

class HomePage extends Component {
   state = {
    description: false,
    dHeight: null
  };
 
  dRef = React.createRef();

  toggleViewDescription = () => {
    this.setState(({ description }) => (
      { description: !description }
    ));
  };

  onDescriptionHeight = () => {
    const btnHeight = 65;
    if (this.dRef.current !== null) {
      const dHeight = this.dRef.current.clientHeight + btnHeight;
      this.setState({ dHeight });
    }
  };

  componentDidMount() {
    this.onDescriptionHeight();
    window.addEventListener('resize', this.onDescriptionHeight);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.onDescriptionHeight);
  }

  render () {
    const { description, dHeight } = this.state;

    const descriptionStyle = description ? { height: dHeight } : null;

    return (
      <div className={styles.homePage}>
        <div className={styles.categoryBanner}></div>
        <div className={styles.aboutChef}>
          <div className={styles.photo}>
            <img src={chef} alt="Chef" />
          </div>
          <div className={styles.description}
            style={descriptionStyle}>
            <div ref={this.dRef} className={styles.paragraphBlock}>
              <p>{ data.paragraph1 }</p>
              <p>{ data.paragraph2 }</p>
              <p>{ data.paragraph3 }</p>
              <p>{ data.paragraph4 }</p>
            </div>
            <div className={styles.readMore}
              onClick={this.toggleViewDescription}>
              { description ? 'Read less' : 'Read more' }
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default HomePage;