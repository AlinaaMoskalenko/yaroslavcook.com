import React, { Component } from 'react';
import AboutChef from './components/about-chef/about-chef';
import SkillsAndStyles from './components/skills';

import chef from './img/chef_photo.jpg';
import dataInfo from './chef_description';
import dataSkills from './skills-and-styles.json';

import styles from './home-page.module.scss';


class HomePage extends Component {
  state = {
    chefInfo: false,
    infoHeight: null
  };
 
  infoRef = React.createRef();

  toggleInfo = () => {
    this.setState(({ chefInfo }) => (
      { chefInfo: !chefInfo }
    ));
  };

  onChangeInfoHeight = () => {
    const width = window.innerWidth;
    const height = window.innerHeight
    const landscapeOrientation = width > height;

    if (width < 768) {
      const btnHeight = 65;
      if (this.infoRef.current !== null) {
        const infoHeight = this.infoRef.current.clientHeight + btnHeight;
        this.setState({ infoHeight });
      }

    } else if (landscapeOrientation && width < 900 && width >= 768) {
      this.setState({ infoHeight: null });
    }
  };

  componentDidMount() {
    this.onChangeInfoHeight();
    window.addEventListener('resize', this.onChangeInfoHeight);
  }

  componentWillMount() {
    window.removeEventListener('resize', this.onChangeInfoHeight);
  }

  render () {
    const { chefInfo, infoHeight } = this.state;

    const descriptionStyle = chefInfo ? { height: infoHeight } : null;

    return (
      <div className={styles.homePage}>
        <div className={styles.categoryBanner}></div>
        <AboutChef
          photo={chef}
          data={dataInfo}
          style={descriptionStyle}
          description={chefInfo}
          ref={this.infoRef}
          onView={this.toggleInfo} />

        <div className={styles.line} />

        <SkillsAndStyles data={dataSkills} />
      </div>
    );
  }
};

export default HomePage;