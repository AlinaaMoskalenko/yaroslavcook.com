import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menu from '../../../data/menus.json';

import DaySlider from '../components/day-slider';
import ContentContainer from '../components/content-container/content-container.js';
import ContentTitle from '../components/content-title';
import Content from '../components/content/content.js';

import image from '../../../img/middle_eastern.jpg';
import classNames from 'classnames/bind';
import styles from './middle-eastern-menu.module.scss';
import commonStyles from '../components/common-styles.module.scss';

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
    const { sliceId, prevId, onArrowClick, ...rest } = this.props;
    const cx = classNames.bind(styles);

    const slices = menu['middleEastern'].length;

    const items = menu['middleEastern'].map(({ lunch, dinner }, idx) => {
      const containerClasess = cx('container', {'containerVisible': idx === sliceId });
      const classes = cx('menuDay', { 'menuDayAnimation': idx === sliceId && prevId !== null });

      const menuCreator = ({ courses }) => {
        const { firstCourse, mainCourse, sideDishes } = courses;
    
        return (
          <>
            <div className={styles.course}>
              <h1 className={styles.courseTitle}>First course</h1>
              { firstCourse.map((item, idx) => (<p key={idx}>{ item }</p>)) }
            </div>
    
            <div className={styles.course}>
              <h1 className={styles.courseTitle}>Main course</h1>
              { mainCourse.map((item, idx) => (<p key={idx}>{ item }</p>)) }
            </div>
    
            <div className={styles.course}>
              <h1 className={styles.courseTitle}>Side dishes</h1>
              { sideDishes.map((item, idx) => (<p key={idx}>{ item }</p>)) }
            </div>
          </>
        );
      };

      const menuContent = [menuCreator(lunch), menuCreator(dinner)];

      return (
        <ContentContainer key={idx} className={containerClasess}>
          <div className={classes}>
            <ContentTitle
              title={`Day ${idx + 1}`}
              slices={slices}
              onArrowClick={onArrowClick} />

            <Content type="EXTENDED" content={menuContent} />
          </div>
        </ContentContainer>
      );
    });

    return (
      <div className={commonStyles.pageContainer}>
        <DaySlider {...rest}
          sliceId={sliceId}
          amountSlice={slices}>
            { items }
        </DaySlider>
      </div>
    );
  }

  static defaultProps = {
    onArrowClick: () => {},
    onBackground: () => {}
  };
  
  static propTypes = {
    sliceId: PropTypes.number.isRequired,
    prevId: PropTypes.number,
    onArrowClick: PropTypes.func,
    onBackground: PropTypes.func
  };
}