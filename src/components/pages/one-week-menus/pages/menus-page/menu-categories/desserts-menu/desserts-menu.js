import React, { Component } from 'react';
import PropTypes from 'prop-types';
import menu from '../../../data/menus.json';

import DaySlider from '../components/day-slider';
import ContentContainer from '../components/content-container/content-container.js';
import ContentTitle from '../components/content-title';
import Content from '../components/content/content.js';

import image from '../../../img/dessert.jpg';
import styles from './desserts-menu.module.scss';
import commonStyles from '../components/common-styles.module.scss';

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
    const menuContent = menu['desserts'].map((item, idx) => (
      <p key={idx}>{item}</p>
    ));

    return (
      <div className={commonStyles.pageContainer}>
        <DaySlider>
          <ContentContainer className={styles.container}>
            <ContentTitle title={'Desserts'} type="SIMPLE" />
            <Content content={menuContent} change />
          </ContentContainer>
        </DaySlider>
      </div>
    );
  }

  static defaultProps = {
    onBackground: () => {}
  };

  static propTypes = {
    onBackground: PropTypes.func
  };
}