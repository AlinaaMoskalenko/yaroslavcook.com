import React from 'react';
import { images } from '../../service';

const GalleryPage = () => {
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