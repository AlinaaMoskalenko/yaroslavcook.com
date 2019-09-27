import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menu from '../../../data/menus.json';

// import PageContainer from '../../../../../../common/page-container';
import MenuSlider from '../../menu-slider';
import image from '../../../img/crew.jpg';

import classNames from 'classnames/bind';
import styles from './crew-menu.module.scss';

class CrewMenu extends Component {
  links = [
    { url: '/one-week-menu', title: 'All menus' },
    { url: '#', title: 'Crew menu', active: true }
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
    const cx = classNames.bind(styles);
    const { sliceId, prevId, ...rest } = this.props;

    const slices = menu["crewMenu"].length;

    const items = menu['crewMenu'].map(({ lunch, dinner, pastry }, idx) => {
      const classes = cx(
        'menuContainer',
        'menuDay',
        { 'menuDayVisible': idx === sliceId,
          'animation': idx === sliceId && prevId !== null }
      );

      if (idx === slices - 1) {
        return (
          <div key={idx} className={classes}>
            <h1 className={styles.mainTitle}>Pastry</h1>
            <div className={styles.simpleContent}>
              { pastry.map((item, idx) => ( <p key={idx}>{ item }</p> )) }
            </div>
          </div>
        );
      }
      
      return (
        <div key={idx} className={classes}>
          <h1 className={styles.mainTitle}>Day {idx + 1}</h1>
          <div className={styles.content}>
            <div className={styles.menu}>
              <h1>Lunch</h1>
              { lunch.map((item, idx) => (<p key={idx}>{ item }</p>)) }
            </div>
            <div className={styles.menu}>
              <h1>Dinner</h1>
              { dinner.map((item, idx) => (<p key={idx}>{ item }</p>)) }
            </div>
          </div>
        </div>
      );
    });

    return (
      <>
        {/* <PageContainer image={image} type="MENU" position="CENTER"> */}
          <MenuSlider {...rest}
            sliceId={sliceId}
            amountSlice={slices}>
            { items }
          </MenuSlider>
        {/* </PageContainer> */}
      </>
    );
  }
}

CrewMenu.propTypes = {
  sliceId: PropTypes.number.isRequired,
  prevId: PropTypes.number
};

export default CrewMenu;
