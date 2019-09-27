import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menu from '../../../data/menus.json';

// import PageContainer from '../../../../../../common/page-container';
import MenuSlider from '../../menu-slider';
// import Breadcrumbs from '../../../../../../common/breadcrumbs';
import image from '../../../img/french_dinner.jpg';

import classNames from 'classnames/bind';
import styles from './french-charter-menu.module.scss';

export default class FrenchCharterMenu extends Component {
  links = [
    { url: '/one-week-menu', title: 'All menus' },
    { url: '#', title: 'French charter dinner menu', active: true }
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
    const{ sliceId, prevId, ...rest } = this.props;
    const cx = classNames.bind(styles);

    

    const slices = menu['frenchCharter'].length;

    const items = menu['frenchCharter'].map(({ dinner }, idx) => {
      const classes = cx(
        'menuContainer',
        'menuDay',
        { 'menuDayVisible': idx === sliceId,
          'animation': idx === sliceId && prevId !== null }
      );

      return (
        <div key={idx} className={classes}>
          <h1 className={styles.mainTitle}>Day {idx + 1}</h1>
          <div className={styles.content}>
              { dinner.map((item, idx) => ( <p key={idx}>{ item }</p> )) }
          </div>
        </div>
      );
    });

    return (
      <>
        {/* <Breadcrumbs items={links} /> */}
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

  static propTypes = {
    sliceId: PropTypes.number.isRequired,
    prevId: PropTypes.number
  };
}