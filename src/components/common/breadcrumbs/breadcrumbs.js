import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import classNames from 'classnames/bind';
import styles from './breadcrumbs.module.scss';

export default class Breadcrumbs extends Component {
  ref = React.createRef();

  componentDidMount() {
    this.props.setBreadcrumbsHeight(this.ref.current.offsetHeight)
  }

  componentWillUnmount() {
    this.props.setBreadcrumbsHeight(null);
  }

  render () {
    const { items } = this.props;
    const cx = classNames.bind(styles);

    const links = items.map(({ url, title, active }) => {
      const classes = cx('link', { 'linkActive': active });
      return <Link key={url} to={url} className={classes}>{title}</Link>;
    });

    return (
      <div className={styles.breadcrumbs} ref={this.ref} >
        { links }
      </div>
    );
  }

  static defaultProps = {
    setBreadcrumbsHeight: () => {}
  };

  static propTypes = {
    items: PropTypes.arrayOf(PropTypes.shape({
      url: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired
    })),
    setBreadcrumbsHeight: PropTypes.func
  };
};