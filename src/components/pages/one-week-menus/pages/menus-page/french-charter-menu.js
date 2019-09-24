import React, { Component } from 'react';
import menu from '../data/menus.json';

import PageContainer from '../../../../common/page-container';
import MenuSlider from './menu-slider';
import image from '../img/french_dinner.jpg';

import classNames from 'classnames/bind';
import styles from './menu-slider/menu-slider.module.scss';

export default class FrenchCharterMenu extends Component {
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

    const slices = menu['frenchCharter'].length;

    const items = menu['frenchCharter'].map(({ dinner }, idx) => {
      const classes = cx(
        'menuContainer',
        'menuDay',
        { 'menuDayVisible': idx === id,
          'animation': idx === id && prevId !== null }
      );

      const dinnerMenu = dinner.map((item, idx) => {
        return <p key={idx}>{ item }</p>;
      });

      return (
        <div key={idx} className={classes}>
          <h1 className={styles.mainTitle}>Day {idx + 1}</h1>
          <div className={styles.content}>
              { dinnerMenu }
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
}