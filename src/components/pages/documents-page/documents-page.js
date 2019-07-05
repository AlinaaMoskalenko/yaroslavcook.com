import React, { Component } from 'react';
import HTTPService from '../../common/service';
import icon from './img/fileIcon.svg';
import Loader from '../../common/loader';

import styles from './documents-page.module.scss';

export default class DocumentsPage extends Component {
  state = {
    documents: [],
    loading: true
  };

  httpService = new HTTPService();

  componentDidMount() {
    this.httpService.get(
      'chef_documents/documents.json',
      (documents) => this.setState({ documents, loading: false }),
      (err) => console.log(err)
    );
  }

  render () {
    const { documents, loading } = this.state;

    const documentsList = documents.map(({ name, url, format }, idx) => {
      return (
        <a key={idx} 
          href={url}
          target='_blank'
          rel="noopener noreferrer"
          className={styles.link}>
          <div className={styles.iconBlock}>
            <img src={icon} alt='Icon' />
            <span>{ format }</span>
          </div>
          <span className={styles.title}>{ name }{ format }</span>
        </a>
      );
    });

    return (
      <div className={styles.documentsPage}>
        { loading ? <Loader /> : documentsList }
      </div>
    );
  }
}