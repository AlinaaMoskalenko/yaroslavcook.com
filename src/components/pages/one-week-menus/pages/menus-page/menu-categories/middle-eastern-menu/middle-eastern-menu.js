import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menu from '../../../data/menus.json';

import MenuSlider from '../../menu-slider';

import image from '../../../img/middle_eastern.jpg';
import classNames from 'classnames/bind';
import styles from './middle-eastern-menu.module.scss';

export default class MiddleEasternMenu extends Component { 
  links = [
    { url: '/one-week-menu', title: 'All menus' },
    { url: '#', title: 'Middle Eastern Menu', active: true }
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
    const { sliceId, prevId, height, onArrowClick, ...rest } = this.props;
    const cx = classNames.bind(styles);

    const slices = menu['middleEastern'].length;

    const items = menu['middleEastern'].map(({ lunch, dinner }, idx) => {
      const classes = cx(
        'menuDay',
        { 'menuDayVisible': idx === sliceId,
          'animation': idx === sliceId && prevId !== null }
      );

      const menuCreator = ({ courses }) => {
        const { firstCourse, mainCourse, sideDishes } = courses;
    
        return (
          <>
            <div className={styles.course}>
              <h1>First course</h1>
              { firstCourse.map((item, idx) => (<p key={idx}>{ item }</p>)) }
            </div>
    
            <div className={styles.course}>
              <h1>Main course</h1>
              { mainCourse.map((item, idx) => (<p key={idx}>{ item }</p>)) }
            </div>
    
            <div className={styles.course}>
              <h1>Side dishes</h1>
              { sideDishes.map((item, idx) => (<p key={idx}>{ item }</p>)) }
            </div>
          </>
        );
      };

      return (
        <div key={idx} className={classes}>
          <h1 className={styles.mainTitle}>
            <i className="fas fa-chevron-left"
              onClick={() => onArrowClick(-1, slices)} />

            Day {idx + 1}

            <i className="fas fa-chevron-right"
              onClick={() => onArrowClick(1, slices)} />
          </h1>
          <div className={styles.content}>
            <div className={styles.menu}>
              <h1>Lunch</h1>
              { menuCreator(lunch) }
            </div>
            <div className={styles.menu}>
              <h1>Dinner</h1>
              { menuCreator(dinner) }
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        <div className={styles.middleEasternMenu}>
            <MenuSlider {...rest}
              sliceId={sliceId}
              amountSlice={slices}>
                { items }
            </MenuSlider>
        </div>
      </>
    );
  }

  static defaultProps = {
    onArrowClick: () => {}
  };
  
  static propTypes = {
    sliceId: PropTypes.number.isRequired,
    prevId: PropTypes.number,
    onArrowClick: PropTypes.func
  };
}