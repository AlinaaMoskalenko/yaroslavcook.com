import React from 'react';
import { DocumentService } from '../../service';
import icon from './img/fileIcon.svg';
import styles from './documents-page.module.scss';

const DocumentsPage = () => {
  const service = new DocumentService ();
  const { fileList } = service;

  const documents = fileList.map(({ name, link, format }, idx) => {
    return (
      <a key={idx} 
        href={link}
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
    <div className={styles.documentsPage}>{ documents }</div>
  );
};

export default DocumentsPage;