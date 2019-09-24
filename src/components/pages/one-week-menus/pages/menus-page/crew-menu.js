import React, { Component } from 'react';
import menu from '../data/menus.json';

import PageContainer from '../../../../common/page-container';
import MenuSlider from './menu-slider';
import image from '../img/crew.jpg';

import classNames from 'classnames/bind';
import styles from './menu-slider/menu-slider.module.scss';

export default class CrewMenu extends Component {
  state = {
    id: 0,
    prevId: null
  };

  onDotClick = ({ target: { id: sliceId }}) => {
    const { id } = this.state;
    this.setState({ prevId: id }); 
    this.setState({ id: +sliceId }); 
  };

  render() {
    const cx = classNames.bind(styles);
    const { id, prevId } = this.state;

    const slices = menu["crewMenu"].length;

    const items = menu['crewMenu'].map(({ lunch, dinner, pastry }, idx) => {
      const classes = cx(
        'menuContainer',
        'menuDay',
        { 'menuDayVisible': idx === id,
          'animation': idx === id && prevId !== null }
      );

      if (idx === slices - 1) {
        const pastryMenu = pastry.map((item, idx) => {
          return <p key={idx}>{ item }</p>;
        });

        return (
          <div key={idx} className={classes}>
            <h1 className={styles.mainTitle}>Pastry</h1>
            <div className={styles.simpleContent}>
              { pastryMenu }
            </div>
          </div>
        );
      }
      
      const [ lunchMenu, dinnerMenu ] = [ lunch, dinner ].map((item, idx) => {
        return <p key={idx}>{ item }</p>;
      });

      return (
        <div key={idx} className={classes}>
          <h1 className={styles.mainTitle}>Day {idx + 1}</h1>
          <div className={styles.content}>
            <div className={styles.menu}>
              <h1>Lunch</h1>
              { lunchMenu }
            </div>
            <div className={styles.menu}>
              <h1>Dinner</h1>
              { dinnerMenu }
            </div>
          </div>
        </div>
      );
    });

    return (
      <PageContainer image={image} type="MENU" position="CENTER">
        <MenuSlider
          sliceId={id}
          prevId={prevId}
          amountSlice={slices}
          onDotClick={this.onDotClick}>
          { items }
        </MenuSlider>
      </PageContainer>
    );
  }
};
