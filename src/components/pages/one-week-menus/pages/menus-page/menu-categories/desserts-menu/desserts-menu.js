import React, { Component } from 'react';
import menu from '../../../data/menus.json';

// import PageContainer from '../../../../../../common/page-container';
import MenuSlider from '../../menu-slider';
import image from '../../../img/dessert.jpg';

import styles from './desserts-menu.module.scss';

export default class DessertsMenu extends Component {
  links = [
    { url: '/one-week-menu', title: 'All menus' },
    { url: '#', title: 'Desserts', active: true }
  ];

  componentDidMount () {
    this.props.onBackground(image);
    this.props.onBreadcrumbs(this.links);
  }

  componentWillUnmount () {
    this.props.onBackground(null);
    this.props.onBreadcrumbs([]);
  }

  render () {
    return (
      <>
        {/* <PageContainer image={image} type="MENU" position="CENTER"> */}
          <MenuSlider>
            <div className={styles.menuContainer}>
              <h1 className={styles.mainTitle}>Desserts</h1>
              <div className={styles.simpleContent}>
                { menu['desserts'].map((item, idx) => ( <p key={idx}>{item}</p> )) }
              </div>
            </div>
          </MenuSlider>
        {/* </PageContainer> */}
      </>
    );
  }
};