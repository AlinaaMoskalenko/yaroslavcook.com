import React, { Component } from 'react';
import menu from '../data/menus.json';

import PageContainer from '../../../../common/page-container';
import MenuSlider from './menu-slider';
import image from '../img/middle_eastern.jpg';

import classNames from 'classnames/bind';
import styles from './menu-slider/menu-slider.module.scss';

class MiddleEasternMenu extends Component {
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

    const slices = menu['middleEastern'].length;

    const items = menu['middleEastern'].map(({ lunch, dinner }, idx) => {
      const classes = cx(
        'menuContainer',
        'menuDay',
        { 'menuDayVisible': idx === id,
          'animation': idx === id && prevId !== null }
      );

      const [ lunchMenu, dinnerMenu ] =
        [ lunch, dinner ].map(({ courses }) => {
          const { firstCourse, mainCourse, sideDishes } = courses;

          const [ firstMenu, mainMenu, sideMenu ] = [ firstCourse, mainCourse, sideDishes ].map((item, idx) => {
            return <p key={idx}>{ item }</p>;
          });

          return(
            <>
              <div className={styles.firstCourse}>
                <h1>First course</h1>
                { firstMenu }
              </div>

              <div className={styles.mainCourse}>
                <h1>Main course</h1>
                { mainMenu }
              </div>

              <div className={styles.sideDishes}>
                <h1>Side dishes</h1>
                { sideMenu }
              </div>
            </>
          );
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
}

export default MiddleEasternMenu;