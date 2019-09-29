import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menu from '../../../data/menus.json';

import DaySlider from '../components/day-slider';
import ContentContainer from '../components/content-container/content-container.js';
import ContentTitle from '../components/content-title';
import Content from '../components/content/content.js';

import image from '../../../img/crew.jpg';
import classNames from 'classnames/bind';
import styles from './crew-menu.module.scss';
import commonStyles from '../components/common-styles.module.scss';

export default class CrewMenu extends Component {
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
    const { sliceId, prevId, onArrowClick, ...rest } = this.props;
    const cx = classNames.bind(styles);

    const slices = menu["crewMenu"].length;

    const items = menu['crewMenu'].map(({ lunch, dinner, pastry }, idx) => {
      const containerClasess = cx('container', {'containerVisible': idx === sliceId });
      const classes = cx({ 'menuDayAnimation': idx === sliceId && prevId !== null });

      if (idx === slices - 1) {
        const menuContent = pastry.map((item, idx) => ( <p key={idx}>{ item }</p> ));

        return (
          <ContentContainer key={idx}
            className={`${containerClasess} ${styles.pastry}`}>
            <div className={classes}>
              <ContentTitle
                title={'Pastry'}
                slices={slices}
                onArrowClick={onArrowClick} />

              <Content content={menuContent} />
            </div>
          </ContentContainer>
        );
      }
      const menuContent = [
        lunch.map((item, idx) => (<p key={idx}>{ item }</p>)),
        dinner.map((item, idx) => (<p key={idx}>{ item }</p>))
      ];
      
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