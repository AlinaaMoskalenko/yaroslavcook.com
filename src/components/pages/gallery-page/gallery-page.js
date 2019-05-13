import React from 'react';
import { ImagesService } from '../../service';

const GalleryPage = () => {
  const service = new ImagesService();
  const { images } = service;

  const photosList = images.map(({ id, url }) => {
    return <img key={id} src={url} alt="Gallery img" />
  })

  return (
    <>
    <div>This is Gallery Page</div>
    { photosList }
    </>
  );
};

export default GalleryPage;